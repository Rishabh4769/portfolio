export default function SectionHead({ index, eyebrow, title, out, body }) {
  return (
    <div className="sec-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title} <span className="out">{out}</span></h2>
      {body && <p>{body}</p>}
      {index && <div className="sec-index">{index}</div>}
    </div>
  );
}
