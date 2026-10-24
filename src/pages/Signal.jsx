import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import Terminal from '../components/Terminal';
import { LINKS } from '../data/content';

export default function Signal() {
  const cards = [
    {
      channel: 'CHANNEL // 01',
      k: 'GITHUB',
      v: 'Rishabh4769',
      sub: 'github.com/Rishabh4769',
      d: 'Public repositories, intrusion detection tools, and security codebase commits.',
      action: 'Browse Code',
      icon: 'icon-github',
      href: LINKS.github,
      status: 'PUBLIC',
    },
    {
      channel: 'CHANNEL // 02',
      k: 'LINKEDIN',
      v: 'Rishabh Joshi',
      sub: 'in/rishabh-joshi',
      d: 'Professional history, security research discussions, and network connections.',
      action: 'Connect',
      icon: 'icon-linkedin',
      href: LINKS.linkedin,
      status: 'VERIFIED',
    },
    {
      channel: 'CHANNEL // 03',
      k: 'EMAIL',
      v: 'contact@rishabh-joshi.in',
      sub: 'Direct Line / Inquiries',
      d: 'Direct dispatch for inquiries, collaborations, and internship opportunities.',
      action: 'Send Message',
      icon: 'icon-mail',
      href: LINKS.email,
      status: 'DIRECT',
    },
    {
      channel: 'CLEARANCE // 04',
      k: 'STATUS',
      v: 'Open to Opportunities',
      sub: 'Internships & Security Roles',
      d: 'Available for cybersecurity internships, threat analysis, and detection roles.',
      action: 'Download Resume',
      icon: 'icon-signal-pulse',
      href: '/rishabh-joshi-resume.pdf',
      download: 'rishabh-joshi-resume.pdf',
      status: 'AVAILABLE',
      footerLabel: 'Download RESUME',
    },
  ];

  return (
    <div className="wrap">
      <SectionHead
        index="06 / SIGNAL"
        eyebrow="Establish contact"
        title="Open a"
        out="channel"
        body="Pick a channel below — or skip the formalities and interrogate the dossier directly in the terminal."
      />

      <div className="contact-grid">
        {cards.map((c, i) => {
          const content = (
            <>
              <div className="contact-card-top">
                <div className="contact-card-id">
                  <svg className="contact-icon" width="22" height="22">
                    <use href={`/icons.svg#${c.icon}`} />
                  </svg>
                  <span className="k">{c.channel}</span>
                </div>
                <span className="contact-badge">
                  {c.action} <span className="arrow">↗</span>
                </span>
              </div>
              <div className="contact-card-main">
                <div className="v">{c.v}</div>
                <div className="contact-sub">{c.sub}</div>
                <p className="d">{c.d}</p>
              </div>
              <div className="contact-card-footer">
                <span className="contact-link-label">
                  {c.footerLabel || `Redirect to ${c.k}`}
                </span>
                <span className="contact-status-tag">{c.status}</span>
              </div>
            </>
          );

          return (
            <Reveal key={c.k} delay={i * 80}>
              <a
                className="contact-card"
                href={c.href}
                target="_blank"
                rel="noreferrer"
                download={c.download || undefined}
                aria-label={`${c.k}: ${c.v}`}
              >
                {content}
              </a>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="eyebrow">Direct line — the dossier answers</div>
        <Terminal />
        <div className="term-hint">
          TRY — ls · nmap · ping · rules · theme amber · scan · cat operations/plexus/brief.txt · stats
        </div>
      </Reveal>
      <div style={{ height: 40 }} />
    </div>
  );
}
