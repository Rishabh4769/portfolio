import SectionHead from '../components/SectionHead';
import CaseFile from '../components/CaseFile';
import { CASES } from '../data/content';

export default function Operations() {
  return (
    <div className="wrap">
      <SectionHead
        index="03 / OPERATIONS"
        eyebrow="Case files"
        title="Filed"
        out="operations"
        body="Three builds, three different ways of watching a network. Open each file — or interrogate them from the terminal on the signal page."
      />
      <div className="band"><span>CASE FILES 001–003</span><span>EYES ONLY // PUBLIC RELEASE</span></div>
      <div style={{ height: 34 }} />
      {CASES.map((c) => (
        <CaseFile key={c.id} c={c} />
      ))}
      <p className="endmark">— END OF OPERATIONS · <b>3 CASES FILED</b> —</p>
      <div style={{ height: 30 }} />
    </div>
  );
}
