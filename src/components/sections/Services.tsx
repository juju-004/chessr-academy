import { GraduationCap, School, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../ui/section";

const services = [
  {
    icon: GraduationCap,
    title: "Online Coaching",
    description:
      "Private one-on-one coaching sessions designed around your current level, playing style and long-term goals.",
  },
  {
    icon: School,
    title: "School Chess Programs",
    description:
      "Structured chess curriculum, after-school clubs and tournaments for primary and secondary schools.",
  },
  {
    icon: Trophy,
    title: "Tournament Preparation",
    description:
      "Opening preparation, endgame mastery, calculation training and competitive mindset coaching.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description:
      "Learn alongside other motivated players through engaging interactive lessons and practical exercises.",
  },
];

export default function Services() {
  return (
    <Section>
      <div className="text-center">
        <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-primary">
          Our Services
        </p>

        <h2 className="mx-auto max-w-3xl text-5xl font-black">
          Everything You Need to
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            {" "}
            Improve Your Chess
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Whether you're learning your first opening or preparing for your next
          tournament, ChessR Academy provides structured coaching that delivers
          real improvement.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-primary/40
                hover:bg-white/[0.07]
              "
            >
              <div
                className="
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-linear-to-br
                  from-primary
                  to-secondary
                  shadow-lg
                "
              >
                <Icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>

              <p className="leading-7 text-muted">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
