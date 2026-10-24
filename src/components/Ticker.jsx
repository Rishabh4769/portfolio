import { TICKER_ITEMS } from '../data/content';

export default function Ticker() {
  const seq = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((half) => (
          <span key={half} style={{ display: 'inline-block' }}>
            {seq.map((it, i) => (
              <span key={i} className={it.c || ''}>◆ {it.t}</span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
