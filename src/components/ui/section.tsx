import type { ReactNode } from "react";
import Container from "./container";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
