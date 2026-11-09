import { useEffect, useRef, useState } from 'react';
import SectionHead from '../components/SectionHead';
import { TIMELINE } from '../data/content';

/* Pixel snake: the connecting line is NOT pre-drawn. It is built from pixel
   blocks sampled along an invisible S-curve through the event nodes. Each
   block starts scattered at a small random offset and flies into place as
   scrolling brings it near — so the snake assembles ahead of the reader and
   never sits on top of unread content. */
const rnd = (i, salt) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

export default function Timeline() {
  const snakeRef = useRef(null);
  const pathRef = useRef(null);
  const blockRefs = useRef([]);
  const [blocks, setBlocks] = useState([]);

  /* measure nodes -> build invisible path -> sample pixel blocks along it */
  useEffect(() => {
    const build = () => {
      const box = snakeRef.current;
      const path = pathRef.current;
      if (!box || !path) return;
      const br = box.getBoundingClientRect();
      const dots = [...box.querySelectorAll('.sn-dot')].map((d) => {
        const r = d.getBoundingClientRect();
        return { x: r.left - br.left + r.width / 2, y: r.top - br.top + r.height / 2 };
      });
      if (dots.length < 2) return;
      const mobile = br.width < 760;
      const amp = mobile ? 26 : Math.min(120, br.width * 0.11);
      let d = `M ${dots[0].x} ${dots[0].y - 34} L ${dots[0].x} ${dots[0].y}`;
      for (let i = 1; i < dots.length; i++) {
        const pv = dots[i - 1];
        const q = dots[i];
        const midY = (pv.y + q.y) / 2;
        const bulge = i % 2 === 1 ? amp : -amp;
        d += ` C ${pv.x + bulge} ${midY}, ${q.x + bulge} ${midY}, ${q.x} ${q.y}`;
      }
      const last = dots[dots.length - 1];
      d += ` L ${last.x} ${last.y + 34}`;
      path.setAttribute('d', d);

      const total = path.getTotalLength();
      const n = Math.max(56, Math.floor(total / 13));
      const pts = [];
      for (let i = 0; i <= n; i++) {
        const pt = path.getPointAtLength((total * i) / n);
        let node = false;
        for (const dt of dots) {
          if (Math.hypot(pt.x - dt.x, pt.y - dt.y) < 9) { node = true; break; }
        }
        pts.push({
          x: pt.x,
          y: pt.y,
          dx: (rnd(i, 1) - 0.5) * 92,
          dy: (rnd(i, 2) - 0.5) * 60,
          hi: i % 6 === 3,
          node,
        });
      }
      setBlocks(pts);
    };
    build();
    const t = setTimeout(build, 400);
    window.addEventListener('resize', build);
    return () => { clearTimeout(t); window.removeEventListener('resize', build); };
  }, []);

  /* scroll driver: activate blocks as the reading line passes them */
  useEffect(() => {
    if (!blocks.length) return;
    let raf = 0;
    const drive = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const box = snakeRef.current;
        if (!box) return;
        const br = box.getBoundingClientRect();
        const vh = window.innerHeight;
        blocks.forEach((b, i) => {
          const el = blockRefs.current[i];
          if (!el) return;
          const screenY = br.top + b.y;
          const on = screenY < vh * 0.68;
          el.style.opacity = on ? '1' : '0';
          el.style.transform = on
            ? 'translate(0px, 0px)'
            : `translate(${b.dx}px, ${b.dy}px)`;
        });
      });
    };
    drive();
    window.addEventListener('scroll', drive, { passive: true });
    window.addEventListener('resize', drive);
    return () => {
      window.removeEventListener('scroll', drive);
      window.removeEventListener('resize', drive);
      cancelAnimationFrame(raf);
    };
  }, [blocks]);

  return (
    <div className="wrap">
      <SectionHead
        index="05 / TIMELINE"
        eyebrow="Chain of events"
        title="How we"
        out="got here"
        body="Phases, not padding. Every entry below is something actually built, shipped, or underway."
      />
      <div className="snake" ref={snakeRef}>
        <svg aria-hidden="true" style={{ visibility: 'hidden' }}>
          <path ref={pathRef} d="" />
        </svg>
        {blocks.map((b, i) => (
          <span
            key={i}
            ref={(el) => { blockRefs.current[i] = el; }}
            className={'pxb' + (b.node ? ' node' : b.hi ? ' hi' : '')}
            style={{ left: b.x + 'px', top: b.y + 'px', transform: `translate(${b.dx}px, ${b.dy}px)` }}
          />
        ))}
        {TIMELINE.map((t, i) => {
          const side = i % 2 === 0 ? 'left' : 'right';
          const card = (
            <article className="sn-card">
              <div className="sn-date">{t.date}</div>
              <h3>{t.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: t.body }} />
            </article>
          );
          return (
            <div className={'sn-row ' + side + (t.now ? ' now' : '')} key={t.title}>
              {side === 'left' ? <>{card}<div className="sn-dot" /></> : <><div className="sn-dot" />{card}</>}
            </div>
          );
        })}
      </div>
      <p className="endmark">— END OF RECORD · <b>CHAIN COMPLETE</b> —</p>
      <div style={{ height: 30 }} />
    </div>
  );
}
