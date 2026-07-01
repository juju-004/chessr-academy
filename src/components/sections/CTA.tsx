import { ArrowRight } from "lucide-react";
import Button from "../ui/button";
import Section from "../ui/section";

export default function CTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-linear-to-br from-blue-600 via-indigo-600 to-violet-700 px-8 py-24 text-center shadow-[0_25px_80px_rgba(59,130,246,0.35)]">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

        <div className="relative">
          <p className="font-semibold uppercase tracking-[0.3em] text-white/80">
            Ready to Begin?
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-6xl font-black leading-tight">
            Your Next Move
            <br />
            Starts Today.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-white/80">
            Whether you're learning chess for the first time, preparing for your
            next tournament, or introducing chess to your school, ChessR Academy
            is ready to help you succeed.
          </p>

          <div className="mt-12">
            <Button className="bg-white text-slate-900 hover:bg-slate-100">
              Book Your Free Lesson
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
