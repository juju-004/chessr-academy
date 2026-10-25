import { useState, type ReactNode } from "react";
import logo from "../assets/logo.png";
import king from "../assets/king.webp";

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-14 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5">{children}</div>
    </section>
  );
}

export function Heading({
  eyebrow,
  title,
  text,
  center = true,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow && (
        <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand">
          <span className="h-0.5 w-6 rounded grad" aria-hidden /> {eyebrow}
        </p>
      )}
      <h2 className={`mt-2 text-3xl font-extrabold leading-tight md:text-4xl ${dark ? "text-white" : ""}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-7 ${dark ? "text-slate-300" : "text-muted"}`}>{text}</p>}
    </div>
  );
}

/** Chessr logo + gradient ACADEMY badge */
export function Brand({ size = "md" }: { size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <span className="flex items-center gap-2">
      <img src={logo} alt="Chessr" width={520} height={109} className={`w-auto ${big ? "h-9" : "h-7"}`} />
      <span
        className={`grad rounded-md font-extrabold uppercase text-white ${
          big ? "px-2.5 py-1 text-xs tracking-[0.22em]" : "px-2 py-0.5 text-[10px] tracking-[0.2em]"
        }`}
      >
        Academy
      </span>
    </span>
  );
}

export function LinkButton({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const styles = {
    solid: "grad text-white hover:brightness-110",
    outline: "border border-line bg-white text-ink hover:bg-paper",
    light: "border border-white/25 bg-white/10 text-white hover:bg-white/20",
  }[variant];
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

/** Lazy photo. If the file is missing it shows the Chessr king on a brand tile instead of a broken image. */
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width: number;
  height: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`grad flex items-center justify-center ${className}`}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <img src={king} alt="" width={360} height={437} className="h-2/3 w-auto drop-shadow-lg" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
      className={`bg-brand-soft object-cover ${className}`}
    />
  );
}
