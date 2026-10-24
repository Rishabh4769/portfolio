import { useEffect, useRef } from 'react';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';

function Redact({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.querySelectorAll('.bar').forEach((b, i) => setTimeout(() => b.classList.add('lit'), 350 + i * 260));
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className="redact" ref={ref}>
      <p>{children}</p>
    </div>
  );
}

const B = ({ children }) => <span className="bar">{children}</span>;

export default function Profile() {
  return (
    <div className="wrap">
      <SectionHead
        index="02 / PROFILE"
        eyebrow="Subject identification"
        title="Who is"
        out="Rishabh?"
        body="Declassified on scroll. Hover the blue bars — or just keep reading and they'll clear themselves."
      />

      <div className="profile-grid">
        <Reveal>
          <Redact>
            I build <B>security systems</B>, not just study them — a network IDS with machine learning (<B>PLEXUS</B>),{' '}
            SIEM tooling (<B>KRONOS</B>), and live packet analysis on my own gear. I think in systems:{' '}
            <B>trust boundaries</B>, failure modes, what breaks first and what the evidence leaves behind.{' '}
            My rule is simple — learn freely, defend ethically, and never touch what isn't mine to touch.{' '}
            I'm a <B>BTech student</B> working toward a career in cybersecurity, still deciding whether the{' '}
            <B>blue team or the red team</B> fits me best.
          </Redact>
        </Reveal>
        <Reveal delay={120}>
          <div className="doctrine" style={{ marginTop: 0 }}>
            <p>"Build things that detect bad things."</p>
            <cite>— THE DOSSIER'S STANDING RULE</cite>
          </div>
          <div className="doctrine">
            <p>"An authentic analyst console, never an AI-made neon dashboard."</p>
            <cite>— DESIGN DOCTRINE, SET EARLY AND KEPT</cite>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="stat-row">
          <div className="stat"><b>03</b><span>CASES FILED</span></div>
          <div className="stat"><b>210</b><span>TESTS GREEN</span></div>
          <div className="stat"><b>13</b><span>TOOLS IN ARSENAL</span></div>
          <div className="stat"><b>02</b><span>BUILDS SHIPPED</span></div>
        </div>
      </Reveal>
      <div style={{ height: 40 }} />
    </div>
  );
}
