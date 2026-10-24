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
      {CASES.map((c) => (
        <CaseFile key={c.id} c={c} />
      ))}
      <div style={{ height: 30 }} />
    </div>
  );
}
