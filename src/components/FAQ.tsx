import { ChevronDown } from "lucide-react";
import { Heading, Section } from "./ui";

const faqs = [
  {
    q: "What happens in the free trial?",
    a: "A free 30-minute online class with one of our coaches. The coach sees your child's level and you see how we teach. There's no obligation to continue.",
  },
  {
    q: "What age and level can join?",
    a: "Children of all ages and levels, from complete beginners to tournament players. Coaches adapt each class to the student.",
  },
  {
    q: "Are classes online?",
    a: "Yes. Classes are live online, so students can join from anywhere. In-person sessions may be available for schools and special programs.",
  },
  {
    q: "How long is each class?",
    a: "Private classes are one hour. Community sessions run on a set weekly schedule with a coach on duty.",
  },
  {
    q: "What's the difference between the plans?",
    a: "Community is group play and chat. The 2 and 4 classes a week plans are private one-on-one coaching, about 8 or 16 classes a month. The top plan combines 4 classes a week with Community.",
  },
  {
    q: "Do you prepare students for tournaments?",
    a: "Yes. We cover openings, middlegame strategy, endgames, calculation, game analysis and tournament preparation.",
  },
  {
    q: "How can my school partner with ChessR?",
    a: "Message us from the Schools section. We'll discuss your goals and design a program for your students.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq">
      <Heading eyebrow="FAQ" title="Questions parents ask" />
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-xl border border-line px-5 py-4">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
              {f.q}
              <ChevronDown size={20} className="chev shrink-0 transition-transform" aria-hidden />
            </summary>
            <p className="mt-3 leading-7 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
