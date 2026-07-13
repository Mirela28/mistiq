import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/mistiq-photos/mistiq-logo.png";

const NAV_LINKS = [
  { label: "About", to: "#about" },
  { label: "Products", to: "/#products" },
  { label: "Contact", to: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center mt-3 shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-50 w-50 rounded-full object-cover"
          />
        </a>

        <div className="hidden md:flex md:items-center md:gap-12 md:ml-auto md:mr-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-lg font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={32} />}
        </button>
      </nav>

      {isOpen && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-gray-100 bg-white shadow-sm md:hidden">
          <div className="flex flex-col items-center px-4 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="py-3 text-md font-medium text-gray-700 hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}