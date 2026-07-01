import { Brain, Target, TrendingUp, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../ui/section";

const features = [
  {
    icon: Brain,
    title: "Strategic Thinking",
    description:
      "Develop problem-solving, planning and decision-making skills that extend far beyond the chessboard.",
  },
  {
    icon: Target,
    title: "Personalized Coaching",
    description:
      "Every lesson is adapted to your current level, learning pace and long-term goals.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Receive structured feedback and measurable milestones so you always know how you're improving.",
  },
  {
    icon: Trophy,
    title: "Competition Ready",
    description:
      "From openings to endgames, prepare confidently for tournaments and competitive play.",
  },
];

export default function WhyChessR() {
  return (
    <Section>
      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-primary">
            Why ChessR
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight">
            More Than Chess Lessons.
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Build Skills for Life.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted">
            ChessR Academy combines structured coaching, practical training, and
            continuous feedback to help students grow both on and off the board.
          </p>
        </motion.div>

        {/* Right */}
        <div className="grid gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>

                  <p className="mt-2 leading-7 text-muted">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
