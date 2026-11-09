import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import { CAPABILITIES, TOOLS } from '../data/content';

export default function Capabilities() {
  return (
    <div className="wrap">
      <SectionHead
        index="04 / CAPABILITIES"
        eyebrow="Known capabilities"
        title="What the subject"
        out="can do"
        body="Self-assessed, evidence-linked. Every meter below points at a build or a drill that earned it — nothing here is vibes."
      />
      <div className="cap-grid">
        {CAPABILITIES.map((cap, i) => (
          <Reveal key={cap.k} delay={(i % 2) * 110}>
            <div className="cap-card">
              <span className="k">{cap.k}</span>
              <h3>{cap.title}</h3>
              {cap.meters.map(([label, pct]) => (
                <div className="meter" key={label}>
                  <div className="row"><span>{label}</span><span>{pct}%</span></div>
                  <div className="bar"><i style={{ width: pct + '%' }} /></div>
                </div>
              ))}
              <p className="cap-note">{cap.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="band"><span>ARSENAL — TOOLS IN ROTATION</span><span>{TOOLS.length} ENTRIES</span></div>
      <Reveal>
        <div className="eyebrow" style={{ marginTop: 40 }}>Arsenal — tools in rotation</div>
        <div className="tools-index">
          {TOOLS.map((t, i) => (
            <div className="trow" key={t}><span>{t}</span><i>{String(i + 1).padStart(2, '0')} / {TOOLS.length}</i></div>
          ))}
        </div>
      </Reveal>
      <p className="endmark">— END OF CAPABILITIES · <b>ARSENAL LOGGED</b> —</p>
      <div style={{ height: 40 }} />
    </div>
  );
}
