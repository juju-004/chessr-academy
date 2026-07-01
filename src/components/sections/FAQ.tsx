import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import Section from "../ui/section";

const faqs = [
  {
    question: "Who can join ChessR Academy?",
    answer:
      "Our coaching is open to complete beginners, intermediate players, competitive tournament players, and schools looking to introduce structured chess programs.",
  },
  {
    question: "Are lessons held online?",
    answer:
      "Yes. Most lessons are conducted online, making it easy for students from anywhere to learn with our coaches. In-person sessions may also be available for schools and special programs.",
  },
  {
    question: "How long is each lesson?",
    answer:
      "Most lessons last between 60 and 90 minutes depending on the student's age, experience and coaching plan.",
  },
  {
    question: "Do you prepare students for tournaments?",
    answer:
      "Absolutely. We cover openings, middlegame strategy, endgames, calculation, game analysis and tournament preparation.",
  },
  {
    question: "How do schools partner with ChessR?",
    answer:
      "Simply contact us through the website. We'll discuss your goals and design a chess program that fits your students and timetable.",
  },
];

export default function FAQ() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-muted">
            Everything you need to know before starting your ChessR journey.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between px-8 py-6 text-left text-lg font-semibold">
                  {faq.question}

                  <ChevronDown className="transition group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="px-8 pb-6 text-muted leading-8">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Section>
  );
}
