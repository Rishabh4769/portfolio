import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import { TIMELINE } from '../data/content';

export default function Timeline() {
  return (
    <div className="wrap" style={{ maxWidth: 900 }}>
      <SectionHead
        index="05 / TIMELINE"
        eyebrow="Chain of events"
        title="How we"
        out="got here"
        body="Phases, not padding. Every entry below is something actually built, shipped, or underway."
      />
      <div className="tl">
        {TIMELINE.map((t, i) => (
          <Reveal key={t.title} delay={i * 60}>
            <div className={'tl-item' + (t.now ? ' now' : '')}>
              <div className="tl-date">{t.date}</div>
              <h3>{t.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: t.body }} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
