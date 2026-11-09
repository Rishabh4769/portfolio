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

      <div className="ledger">
        {cards.map((c, i) => (
          <a
            className={'ld-row v' + (i + 1)}
            key={c.k}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            download={c.download || undefined}
            aria-label={`${c.k}: ${c.v}`}
          >
            <div className="ld-ch">{c.channel}<br />{c.status}</div>
            <div>
              <div className="ld-k">{c.k}</div>
              <div className="ld-v">{c.v}</div>
              <p className="ld-d">{c.d}</p>
            </div>
            <span className="ld-glyph" aria-hidden="true">{['</>', 'in', '@', '§'][i]}</span>
            <span className="ld-act">{c.action} ↗</span>
          </a>
        ))}
      </div>

      <div className="band"><span>DIRECT LINE — THE DOSSIER ANSWERS</span><span>TERMINAL</span></div>
      <div style={{ height: 34 }} />

      <Reveal>
        <div className="eyebrow">Direct line — the dossier answers</div>
        <Terminal />
        <div className="term-hint">
          TRY — ls · nmap · ping · rules · theme amber · scan · cat operations/plexus/brief.txt · stats
        </div>
      </Reveal>
      <p className="endmark">— END OF SIGNAL · <b>CHANNEL OPEN</b> —</p>
      <div style={{ height: 40 }} />
    </div>
  );
}
