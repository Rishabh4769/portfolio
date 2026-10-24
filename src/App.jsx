import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Frame from './components/Frame';
import Ticker from './components/Ticker';
import Dossier from './pages/Dossier';
import Profile from './pages/Profile';
import Operations from './pages/Operations';
import Capabilities from './pages/Capabilities';
import Timeline from './pages/Timeline';
import Signal from './pages/Signal';
import NotFound from './pages/NotFound';

const Background3D = lazy(() => import('./components/Background3D'));

const NAV = [
  ['/', 'DOSSIER'],
  ['/profile', 'PROFILE'],
  ['/operations', 'OPERATIONS'],
  ['/capabilities', 'CAPABILITIES'],
  ['/timeline', 'TIMELINE'],
  ['/signal', 'SIGNAL'],
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Shell() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <Frame />

      <header className="nav">
        <NavLink to="/" className="nav-brand">
          <span className="nav-mark">RJ</span>
          <span><b>RISHABH JOSHI</b><br /><span>SUBJECT DOSSIER</span></span>
        </NavLink>
        <nav className={'nav-links' + (open ? ' open' : '')}>
          {NAV.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <NavLink to="/signal" className="nav-cta">ESTABLISH SIGNAL</NavLink>
          <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="menu">
            {open ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </header>
      <Ticker />

      <main className="page">
        <Routes>
          <Route path="/" element={<Dossier />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/signal" element={<Signal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="footer">
          <div className="footer-inner">
            <span className="sig">© 2026 <b>RISHABH JOSHI</b> — ALL SIGNALS MONITORED</span>
            <span>CLEARANCE: PUBLIC · REV 2026.09</span>
          </div>
        </footer>
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Shell />
      <Analytics />
    </BrowserRouter>
  );
}
