import { motion } from "framer-motion";
import Section from "../ui/section";

const stats = [
  {
    value: "120+",
    label: "Students Trained",
  },
  {
    value: "13+",
    label: "Partner Schools",
  },
  {
    value: "2,000+",
    label: "Lessons Delivered",
  },
  {
    value: "4.7★",
    label: "Average Rating",
  },
];

export default function Trusted() {
  return (
    <Section className="pt-10 ">
      <div className="text-center w-full">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="mb-2 text-5xl font-black bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </h3>

              <p className="text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
