import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand, LinkButton } from "./ui";
import { trialLink } from "../config";

const links = [
  { href: "#plans", label: "Plans" },
  { href: "#how", label: "How it works" },
  { href: "#schools", label: "Schools" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" aria-label="ChessR Academy home">
          <Brand />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-muted hover:text-ink">
              {l.label}
            </a>
          ))}
          <LinkButton href={trialLink()} className="px-4! py-2! text-sm">
            Free trial class
          </LinkButton>
        </nav>

        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-5 pb-5 pt-2 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-line py-3 font-semibold">
              {l.label}
            </a>
          ))}
          <LinkButton href={trialLink()} className="mt-4 w-full">
            Book a free trial class
          </LinkButton>
        </nav>
      )}
    </header>
  );
}
