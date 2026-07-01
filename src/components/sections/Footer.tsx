import { Mail, Phone, MapPin } from "lucide-react";

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

import Container from "../ui/container";
import logo from "../../assets/chessrlogofull.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <img src={logo} alt="ChessR" className="w-32" />

            <p className="mt-6 leading-8 text-muted">
              Building stronger players, sharper thinkers and confident learners
              through professional chess coaching.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-6 font-bold">Navigation</h3>

            <ul className="space-y-4 text-muted">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 font-bold">Contact</h3>

            <div className="space-y-5 text-muted">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                hello@chessr.com
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                +234 XXX XXX XXXX
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                Lagos, Nigeria
              </div>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-6 font-bold">Follow Us</h3>

            <div className="flex gap-4">
              {[FaInstagram, FaFacebookF, FaYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-primary hover:bg-white/10"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-muted">
          © {new Date().getFullYear()} ChessR. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
