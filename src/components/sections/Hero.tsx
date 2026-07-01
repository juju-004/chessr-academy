import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";

import Button from "../ui/button";
import Section from "../ui/section";
import HeroVisual from "./Herovisual";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-44">
      {/* Background Glow */}
      <div className="absolute -left-50 top-0 h-125 w-125 rounded-full bg-blue-500/20 blur-[150px]" />
      <div className="absolute -right-50 bottom-0 h-125 w-125 rounded-full bg-violet-500/20 blur-[150px]" />

      <div className="relative grid items-center gap-20 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          {/* Badge */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl">
            <GraduationCap className="h-4 w-4 text-primary" />
            Professional Chess Coaching
          </div>

          {/* Heading */}

          <h1 className="text-5xl font-black leading-tight tracking-tight lg:text-7xl">
            Master the Game
            <br />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              That Builds Great Minds
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            Professional online coaching for ambitious players, competitive
            tournament preparation, and complete chess programs designed
            specifically for schools.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>
              Book a Free Lesson
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold backdrop-blur-xl transition hover:bg-white/10">
              Partner With Your School
            </button>
          </div>

          {/* Trust */}

          <div className="mt-12 flex items-center gap-6">
            <div className="text-yellow-400">★★★★★</div>

            <p className="text-sm text-muted">
              Trusted by students, parents & schools.
            </p>
          </div>
        </motion.div>

        {/* Right */}

        <div className=" absolute right-0 opacity-45 lg:opacity-100 translate-x-1/2 lg:translate-x-0 lg:relative flex justify-center">
          <div className="h-125 w-125 overflow-hidden rounded-[40px] border border-white/10 bg-linear-to-br from-surface to-surface-light backdrop-blur-xl shadow-2xl">
            <HeroVisual />
          </div>
        </div>
      </div>
    </Section>
  );
}
