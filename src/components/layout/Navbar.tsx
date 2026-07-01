import { Menu } from "lucide-react";
import Button from "../ui/button";
import Container from "../ui/container";
import logo from "../../assets/chessrlogofull.png";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <nav className="mt-6 w-full flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <img src={logo} alt="ChessR" className="w-23" />

            <span className="text-md mt-1 font-bold tracking-tight opacity-80">
              Academy
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden items-center gap-10 md:flex">
            <a
              href="#services"
              className="text-muted transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#schools"
              className="text-muted transition hover:text-white"
            >
              Schools
            </a>

            <a
              href="#pricing"
              className="text-muted transition hover:text-white"
            >
              Pricing
            </a>

            <a href="#faq" className="text-muted transition hover:text-white">
              FAQ
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button>Contact Us</Button>
          </div>

          {/* Mobile */}
          <button className="md:hidden">
            <Menu />
          </button>
        </nav>
      </Container>
    </header>
  );
}
