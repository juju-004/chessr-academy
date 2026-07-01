import { motion } from "framer-motion";
import Section from "../ui/section";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Student Name",
    role: "Rapid Player",
    quote:
      "Placeholder testimonial. Replace this with feedback from a real student once ChessR Academy launches.",
  },
  {
    name: "Parent Name",
    role: "Parent",
    quote:
      "Placeholder testimonial. Share how coaching improved your child's confidence, focus and enjoyment of chess.",
  },
  {
    name: "School Representative",
    role: "School Partner",
    quote:
      "Placeholder testimonial. Describe how ChessR helped introduce or grow chess within your school community.",
  },
];

export default function Testimonials() {
  return (
    <Section>
      <div className="text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-primary">
          Testimonials
        </p>

        <h2 className="mt-4 text-5xl font-black">What Our Community Says</h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          We're excited to fill this section with genuine stories from students,
          parents and schools as ChessR Academy grows.
        </p>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <p className="leading-8 text-muted">"{testimonial.quote}"</p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-lg font-bold text-white">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>

                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
