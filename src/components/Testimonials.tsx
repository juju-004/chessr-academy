import { Heading, Section } from "./ui";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section className="bg-paper">
      <Heading eyebrow="Testimonials" title="What parents and students say" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-line bg-white p-6">
            <blockquote className="leading-7 text-muted">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-bold">{t.name}</span> <span className="text-muted">· {t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
