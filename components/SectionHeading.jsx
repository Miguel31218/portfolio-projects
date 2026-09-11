export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-lg">
      <p className="font-mono text-sm text-amber">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
