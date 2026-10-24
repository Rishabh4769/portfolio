import { useState } from 'react';
import Reveal from './Reveal';

export default function CaseFile({ c, flashId }) {
  const [tab, setTab] = useState('brief');
  const dotColor = c.statusClass === 'ship' ? 'var(--green)' : 'var(--amber)';

  return (
    <Reveal>
      <article className="casefile" id={flashId || 'case-' + c.id}>
        <div className="cf-bar">
          <div className="cf-bar-left">
            <span className="dot" style={{ background: dotColor }} />
            <span>{c.no} — {c.status}</span>
          </div>
          {c.arch && (
            <div className="cf-tabs">
              <button
                type="button"
                className={`cf-tab-btn ${tab === 'brief' ? 'active' : ''}`}
                onClick={() => setTab('brief')}
              >
                BRIEF
              </button>
              <button
                type="button"
                className={`cf-tab-btn ${tab === 'arch' ? 'active' : ''}`}
                onClick={() => setTab('arch')}
              >
                ARCHITECTURE
              </button>
            </div>
          )}
          <span className="cf-eyes">EYES: PUBLIC</span>
        </div>
        <div className="cf-body">
          <div>
            <h3 className="cf-title">{c.title}</h3>
            <p className="cf-sub">{c.sub}</p>
            {tab === 'brief' ? (
              <>
                <p className="cf-desc" dangerouslySetInnerHTML={{ __html: c.desc }} />
                <dl className="cf-meta">
                  {c.meta.map(([k, v]) => (
                    <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
              </>
            ) : (
              <div className="cf-arch-wrapper">
                <div className="cf-arch-head">PIPELINE SCHEMATIC &amp; TELEMETRY</div>
                <pre className="cf-arch-diagram">{c.arch}</pre>
              </div>
            )}
          </div>
          <div className="cf-side">
            <h4>FIELD NOTES</h4>
            <ul className="cf-feats">
              {c.feats.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <div className="cf-stack">
              {c.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
            </div>
            <div className="cf-links">
              {c.links.length > 0 ? (
                c.links.map((l) => (
                  <a className="linkbtn" key={l.label} href={l.href} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                ))
              ) : (
                <span className="linkbtn dim">Repo — on release</span>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
