import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function NotFound() {
  return (
    <section className="poster" style={{ alignItems: 'center', textAlign: 'center', minHeight: '70vh' }}>
      <div className="ghost" style={{ fontSize: 'clamp(6rem, 18vw, 15rem)', left: '50%', transform: 'translateX(-50%)', top: '20%' }}>
        404
      </div>
      
      <Reveal>
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="issueno" style={{ marginBottom: 24, fontSize: '0.75rem' }}>
          <b style={{ color: 'var(--red)' }}>ERROR 404 — SIGNAL LOST</b><br />
          TRACE ROUTE FAILED
        </div>
        
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', marginBottom: 20 }}>
          Sector <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--paper)' }}>Dark</span>
        </h1>

        <pre style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.35rem, 1vw, 0.65rem)',
          lineHeight: 1.1,
          color: 'var(--red)',
          textShadow: '0 0 12px rgba(240, 80, 80, 0.4)',
          opacity: 0.85,
          marginBottom: 30,
          userSelect: 'none',
          textAlign: 'left'
        }}>
{`                         __    _
                    _wr""        "-q__
                 _dP                 9m_
               _#P                     9#_
              d#@                       9#m
             d##                         ###
            J###                         ###L
            {###K                       J###K
            ]####K      ___aaa___      J####F
        __gmM######_  w#P""   ""9#m  _d#####Mmw__
     _g##############mZ_         __g##############m_
   _d####M@PPPP@@M#######Mmp gm#########@@PPP9@M####m_
  a###""          ,Z"#####@" '######"\\g          ""M##m
 J#@"             0L  "*##     ##@"  J#              *#K
 #"               \`#    "_gmwgm_~    dF               \`#_
7F                 "#_   ]#####F   _dK                 JE
]                    *m__ ##### __g@"                   F
                       "PJ#####LP"
 \`                       0######_                      '
                       _0########_
     .               _d#####^#####m__              ,
      "*w_________am#####P"   ~9#####mw_________w*"
          ""9@#####@M""           ""P@#####@M""`}
        </pre>
        
        <p style={{ color: 'var(--muted)', maxWidth: '42ch', margin: '0 auto 40px', fontSize: '1.1rem', lineHeight: 1.6 }}>
          The requested dossier does not exist, has been redacted, or your current clearance level is insufficient to view this file.
        </p>

        <div className="hero-ctas" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-p" to="/">Return to Base</Link>
          <Link className="btn btn-g" to="/signal">Establish Signal</Link>
        </div>
        </div>
      </Reveal>
    </section>
  );
}
