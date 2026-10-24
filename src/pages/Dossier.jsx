import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { CASES } from '../data/content';

const ThreatTopology = lazy(() => import('../components/ThreatTopology'));

export default function Dossier() {
  return (
    <>
      <section className="poster">
        <div className="ghost">Dossier</div>

        <div className="poster-top">
          <div className="issueno">
            <b>SUBJECT FILE № 001</b><br />
            REV 2026.09 — CLEARANCE: PUBLIC
          </div>
          <div className="issueno" style={{ textAlign: 'right' }}>
            STATUS: <b>BUILDING</b><br />
            VECTOR: <b>BLUE ←→ RED</b>
          </div>
        </div>

        <div className="nameblock">
          <div className="solid">Rishabh</div>
          <div className="hollow">Joshi</div>
          <p className="tag">Security-first engineer. Builds things that detect bad things.</p>
          <div className="hero-ctas">
            <Link className="btn btn-p" to="/operations">Open case files</Link>
            <Link className="btn btn-g" to="/signal">Establish signal</Link>
          </div>
        </div>

        <div className="anno anno-a1">
          <div className="leader" />
          <div className="box">
            <b>FIELD NOTE 01</b>
            Network IDS with ML —<br />shipped v3.0.0
          </div>
        </div>
        <div className="anno anno-a2">
          <div className="leader" />
          <div className="box">
            <b>FIELD NOTE 02</b>
            SIEM under active build —<br />210 tests green
          </div>
        </div>

        <div className="diagram">
          <div className="ring" />
          <div className="ring r2" />
          <Suspense fallback={null}>
            <ThreatTopology />
          </Suspense>
          <span className="tick t1">FIG. 01</span>
          <span className="tick t2">HOSTILE ×3</span>
          <span className="tick t3">SENSORS ×12</span>
          <span className="cap">THREAT TOPOLOGY — LIVE</span>
        </div>

        <div className="scrollcue">SCROLL</div>
      </section>

      <section className="strip">
        <div className="feat-grid">
          {CASES.map((c, i) => (
            <Reveal key={c.id} delay={i * 90}>
              <Link className="feat" to="/operations">
                <span className="go">↗</span>
                <span className="no">{c.no}</span>
                <h3>{c.title}</h3>
                <p>{c.sub}</p>
                {c.stack && (
                  <div className="feat-stack">
                    {c.stack.slice(0, 3).map(tech => <span key={tech}>{tech}</span>)}
                    {c.stack.length > 3 && <span>+{c.stack.length - 3}</span>}
                  </div>
                )}
                <div style={{ flex: 1 }} />
                <span className={'st ' + c.statusClass}>{c.status}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ——— Approach / doctrine ——— */}
      <section className="wrap" style={{ paddingTop: 54, paddingBottom: 0 }}>
        <Reveal>
          <div className="eyebrow">Operational doctrine</div>
        </Reveal>
        <div className="about-doctrine-grid">
          {[
            {
              icon: 'icon-crosshair',
              title: 'Build to detect',
              body: 'Every project starts with one question — what does the attacker leave behind? Then I build the thing that catches it.',
            },
            {
              icon: 'icon-flask',
              title: 'Evidence over vibes',
              body: 'Self-assessed skill bars are backed by shipped code, test suites, and real packet captures. Nothing here is decoration.',
            },
            {
              icon: 'icon-layers',
              title: 'Fundamentals first',
              body: 'TCP/IP, OS internals, how the kernel handles a socket — you can\'t defend what you don\'t understand at the lowest level.',
            },
            {
              icon: 'icon-radar',
              title: 'Always be learning',
              body: 'Every sprint sharpens the foundation the tools are built on. Learn freely, defend ethically.',
            },
          ].map((d, i) => (
            <Reveal key={d.title} delay={i * 90}>
              <div className="doctrine-card">
                <svg className="doctrine-icon" width="28" height="28"><use href={`/icons.svg#${d.icon}`} /></svg>
                <h4>{d.title}</h4>
                <p>{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <div className="hero-ctas" style={{ marginTop: 40 }}>
            <Link className="btn btn-g" to="/profile">Read the profile</Link>
            <Link className="btn btn-g" to="/timeline">See the timeline</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
