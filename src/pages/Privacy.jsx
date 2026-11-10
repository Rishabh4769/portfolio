import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';

export default function Privacy() {
  return (
    <div className="wrap">
      <SectionHead
        index="07 / PRIVACY"
        eyebrow="Disclosure — what this site collects"
        title="Data"
        out="handling"
        body="Plain record, no legalese. This site collects no account, no form input and no login — the only data that moves is what the three services below see when your browser loads the page."
      />

      <div className="band"><span>THIRD PARTIES — THE COMPLETE LIST</span><span>03 SERVICES</span></div>
      <div style={{ height: 24 }} />

      <Reveal>
        <div className="eyebrow">01 — Vercel Analytics</div>
        <p>
          Pageviews are measured by Vercel Analytics, which runs on this site&apos;s own
          domain. Vercel receives your IP address and browser details with each pageview,
          as any host does, and keeps the last 31 days of aggregate counts on the Hobby
          plan. No cookies are set by this site itself, and no individual visitor is
          identified or tracked across the web.
        </p>
      </Reveal>

      <Reveal>
        <div className="eyebrow">02 — Abacus visitor counter</div>
        <p>
          The footer counter (&ldquo;FILE ACCESS LOG — NNNNNN VISITS&rdquo;) is a public
          counter from Abacus (abacus.jasoncameron.dev). Every page load sends one request
          to Abacus, which sees your IP address and browser details and increments a
          single number. It counts page loads, not unique visitors, and the number is a
          public, decorative tally — it can be inflated by anyone, so treat it as a
          display, not a measurement.
        </p>
      </Reveal>

      <Reveal>
        <div className="eyebrow">03 — Google Fonts</div>
        <p>
          Typefaces are loaded from Google Fonts (fonts.googleapis.com / fonts.gstatic.com).
          Loading a font sends your IP address and browser details to Google, as loading
          any remote file does. No Google account, cookie or tracking pixel is involved
          on this site&apos;s side.
        </p>
      </Reveal>

      <div className="band"><span>WHAT THIS SITE DOES NOT DO</span><span>NO ACCOUNT · NO FORMS</span></div>
      <div style={{ height: 24 }} />

      <Reveal>
        <p>
          No login, no sign-up, no contact form, no comments, no newsletter and no
          cookies set by this site. The only way to reach the owner is the email link
          on the Signal page — contact@rishabh-joshi.in — and anything you send there
          is an email you chose to send, handled like any other email.
        </p>
        <p>
          Questions about this page: contact@rishabh-joshi.in. Last revised 10 November 2026.
        </p>
      </Reveal>

      <p className="endmark">— END OF PRIVACY · <b>RECORD CLOSED</b> —</p>
      <div style={{ height: 40 }} />
    </div>
  );
}
