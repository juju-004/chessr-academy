import { School } from "lucide-react";
import { LinkButton, Section } from "./ui";
import { schoolLink } from "../config";

export default function Schools() {
  return (
    <Section id="schools">
      <div className="relative overflow-hidden rounded-3xl bg-ink-deep p-8 text-white md:p-12">
        <div className="hero-bg absolute inset-0" aria-hidden />
        <div className="checker absolute inset-0" aria-hidden />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <span className="grad flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
              <School size={24} aria-hidden />
            </span>
            <div>
              <h2 className="text-2xl font-extrabold md:text-3xl">Chess for schools</h2>
              <p className="mt-2 max-w-xl text-slate-300">
                Chess curriculum, after-school clubs and tournaments for primary and secondary schools. Tell us about
                your school and we'll design a program that fits your timetable.
              </p>
            </div>
          </div>
          <LinkButton href={schoolLink()}>Talk to us</LinkButton>
        </div>
      </div>
    </Section>
  );
}
