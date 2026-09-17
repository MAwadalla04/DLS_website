export function SectionHeading({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="section-lede">{body}</p> : null}
    </div>
  );
}
