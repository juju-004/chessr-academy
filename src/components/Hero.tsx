import { ArrowRight, Check } from "lucide-react";
import { LinkButton, Photo } from "./ui";
import { trialLink } from "../config";
import king from "../assets/king.webp";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-deep text-white">
      <div className="hero-bg absolute inset-0" aria-hidden />
      <div className="checker absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-28 pt-12 md:grid-cols-2 md:pb-32 md:pt-20">
        <div>
          <p className="inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold text-cyan-200">
            Online chess coaching for children
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Help your child learn chess with a coach who <span className="grad-text">cares.</span>
          </h1>
          <p className="mt-5 text-lg leading-7 text-slate-300">
            Friendly one-hour classes with trusted Nigerian coaches, live online. Chess builds focus, patience and
            confidence, and kids enjoy every minute of it.
          </p>

          <ul className="mt-6 space-y-2 text-slate-200">
            {["Free 30-minute trial class", "Beginner to tournament level", "Class times that fit your timezone"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grad flex h-5 w-5 items-center justify-center rounded-full">
                  <Check size={13} aria-hidden />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={trialLink()}>
              Book a free trial <ArrowRight size={18} aria-hidden />
            </LinkButton>
            <LinkButton href="#plans" variant="light">
              See plans and prices
            </LinkButton>
          </div>
        </div>

        <div className="relative">
          <Photo
            src="/images/hero.jpg"
            alt="A child learning chess with a coach"
            width={800}
            height={640}
            priority
            className="w-full rounded-3xl border border-white/15"
          />
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-ink shadow-xl md:-left-6">
            <img src={king} alt="" width={360} height={437} className="h-12 w-auto" />
            <div>
              <p className="text-sm font-extrabold leading-tight">Free trial class</p>
              <p className="text-xs text-muted">30 minutes, no payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
