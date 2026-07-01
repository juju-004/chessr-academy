import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-2xl bg-linear-to-r flex items-center justify-center from-primary to-secondary px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]",
        className,
      )}
    >
      {children}
    </button>
  );
}
