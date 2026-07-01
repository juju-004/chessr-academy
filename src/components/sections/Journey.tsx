import { Calendar, ClipboardCheck, Route, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../ui/section";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book a Free Trial",
    description:
      "Meet with one of our coaches and tell us about your goals, experience and ambitions.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Skill Assessment",
    description:
      "We evaluate your playing strength, identify weaknesses and understand how you learn best.",
  },
  {
    number: "03",
    icon: Route,
    title: "Personal Training Plan",
    description:
      "Receive a structured improvement plan with lessons, practice goals and milestones.",
  },
  {
    number: "04",
    icon: Trophy,
    title: "Learn • Play • Improve",
    description:
      "Attend coaching sessions, analyse your games, compete regularly and watch your rating grow.",
  },
];

export default function Journey() {
  return (
    <Section>
      <div className="text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-primary">
          How It Works
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-black">
          Your Journey Starts
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {" "}
            With One Lesson
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Our coaching follows a proven step-by-step process that keeps students
          motivated, accountable and consistently improving.
        </p>
      </div>

      <div className="relative mt-24">
        {/* Connecting line (desktop) */}
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-primary/30 via-secondary/40 to-primary/30 lg:block" />

        <div className="grid gap-10 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_10px_40px_rgba(59,130,246,0.35)]">
                  <Icon className="h-9 w-9 text-white" />
                </div>

                <span className="mt-6 block text-sm font-bold tracking-[0.3em] text-primary">
                  {step.number}
                </span>

                <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>

                <p className="mt-4 leading-7 text-muted">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
