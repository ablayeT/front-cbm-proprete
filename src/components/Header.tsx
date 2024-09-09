import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import logo from "./assets/images/441BCC21-CC9D-44C9-873B-7B06E91395D4_4_5005_c.jpeg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Ferme le menu si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest("nav") && !target.closest("button")) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="relative flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src={logo}
          alt="Logo"
          className="h-full w-16 rounded-md object-contain"
        />
      </div>

      {/* Toggle Button for small screens */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* CTA Button for small screens */}
      <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
        <a
          href="/get-quote"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Obtenir un devis
        </a>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:space-x-4 absolute lg:static top-full right-0 w-50 lg:w-auto bg-gray-800 lg:bg-transparent p-4 lg:p-0 z-10`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block lg:inline-block px-4 py-2 hover:text-gray-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Call to Action Button */}
      <div className="hidden lg:block">
        <a
          href="/get-quote"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Obtenir un devis
        </a>
      </div>
    </header>
  );
};

export default Header;
