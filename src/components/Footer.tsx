import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { Brand, LinkButton } from "./ui";
import { EMAIL, LOCATION, trialLink } from "../config";
import king from "../assets/king.webp";

const explore = [
  { href: "#plans", label: "Plans and prices" },
  { href: "#how", label: "How it works" },
  { href: "#schools", label: "Schools" },
  { href: "#faq", label: "FAQ" },
];
const plans = [
  "Community",
  "2 classes / week",
  "4 classes / week",
  "4 classes + Community",
];

const head = "text-sm font-bold uppercase tracking-widest text-white";
const link = "text-slate-400 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-ink-deep font-sans text-slate-400">
      <div className="mx-auto max-w-6xl px-5 pt-14">
        {/* Call to action */}
        <div className="grad relative overflow-hidden rounded-3xl p-8 text-white md:p-12">
          <div className="checker absolute inset-0" aria-hidden />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
                Your child's next move starts today.
              </h2>
              <p className="mt-3 text-white/85">
                Book a free 30-minute trial class. No payment needed.
              </p>
              <LinkButton
                href={trialLink()}
                className="mt-6 bg-white! text-white! hover:bg-brand-soft!"
              >
                Book a free trial <ArrowRight size={18} aria-hidden />
              </LinkButton>
            </div>
            <img
              src={king}
              alt=""
              width={360}
              height={437}
              loading="lazy"
              className="hidden h-36 w-auto drop-shadow-xl md:block"
            />
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Brand size="lg" />
            <p className="mt-4 max-w-xs leading-7">
              Friendly online chess coaching for children, taught by trusted
              Nigerian coaches.
            </p>
          </div>

          <nav aria-label="Explore">
            <h3 className={head}>Explore</h3>
            <ul className="mt-4 space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={link}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Plans">
            <h3 className={head}>Plans</h3>
            <ul className="mt-4 space-y-3">
              {plans.map((p) => (
                <li key={p}>
                  <a href="#plans" className={link}>
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={head}>Get in touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={trialLink()}
                  target="_blank"
                  rel="noreferrer"
                  className={`${link} flex items-center gap-3`}
                >
                  <MessageCircle size={18} className="text-cyan" aria-hidden />{" "}
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className={`${link} flex items-center gap-3`}
                >
                  <Mail size={18} className="text-cyan" aria-hidden /> {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan" aria-hidden />{" "}
                {LOCATION}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-sm sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} ChessR Academy. All rights reserved.
          </p>
          <p>Made for young chess players everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
