import { useEffect, useRef } from 'react';
import SectionHead from '../components/SectionHead';
import { TIMELINE } from '../data/content';

export default function Timeline() {
  const snakeRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const draw = () => {
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
    };
    draw();
    const t = setTimeout(draw, 350);
    window.addEventListener('resize', draw);
    return () => { clearTimeout(t); window.removeEventListener('resize', draw); };
  }, []);

  return (
    <div className="wrap">
      <SectionHead
        index="05 / TIMELINE"
        eyebrow="Chain of events"
        title="How we"
        out="got here"
        body="Phases, not padding. Every entry below is something actually built, shipped, or underway — filed along one winding line, left, right, left."
      />
      <div className="snake" ref={snakeRef}>
        <svg aria-hidden="true"><path className="snake-path" ref={pathRef} d="" /></svg>
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
