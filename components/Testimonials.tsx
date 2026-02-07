import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="testimonials" aria-label="Client feedback">
      <div className="container">
        <p className="eyebrow">Client feedback</p>
        <h2>What clients value.</h2>
        <p className="fineprint">
          Anonymised examples while published client reviews are collected.
        </p>
        <div className="testimonials__grid">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.quote} className="testimonials__card">
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              {(t.name || t.title) && (
                <figcaption>
                  {t.name ? <strong>{t.name}</strong> : null}
                  {t.title ? <span>{t.title}</span> : null}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
