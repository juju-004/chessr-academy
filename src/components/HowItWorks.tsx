import { Calendar, ClipboardCheck, Route, Trophy } from "lucide-react";
import { Heading, Section } from "./ui";

const steps = [
  { icon: Calendar, title: "Book a free trial", text: "A 30-minute class with one of our coaches. No payment needed." },
  { icon: ClipboardCheck, title: "We find your level", text: "The coach sees how your child plays and how they like to learn." },
  { icon: Route, title: "Pick a plan", text: "Choose the plan that fits. We match your child with the right coach." },
  { icon: Trophy, title: "Learn, play, improve", text: "Regular classes, game review and friendly matches. Watch the rating grow." },
];

export default function HowItWorks() {
  return (
    <Section id="how">
      <Heading eyebrow="How it works" title="Getting started takes four easy steps" />
      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-line p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl grad text-white">
                <s.icon size={20} aria-hidden />
              </span>
              <span className="text-sm font-bold text-muted">Step {i + 1}</span>
            </div>
            <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
