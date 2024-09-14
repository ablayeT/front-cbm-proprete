import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import logo from "./assets/images/441BCC21-CC9D-44C9-873B-7B06E91395D4_4_5005_c.jpeg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fermer le menu si on clique à l'extérieur
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
    <header className="fixed top-0 left-0 w-full flex items-center justify-between pl-6 pr-6 bg-gray-800 text-white z-50">
      {/* Logo */}
      <div className="flex-shrink-0 mr-4">
        {" "}
        {/* Ajout de 'mr-4' pour un espace à droite */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 lg:h-20 lg:w-20 rounded-xl object-contain"
          />
        </Link>
      </div>

      {/* Bouton Toggle pour les petits écran */}
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

      {/* CTA Button pour les petits écran */}
      <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
        <a
          href="/get-quote"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-customBlue"
        >
          Devis gratuit
        </a>
      </div>

      {/* Liens de navigation*/}
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
              className="block text-white lg:inline-block px-4 py-2 hover:text-gray-500"
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
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-customBlue"
        >
          Devis gratuit
        </a>
      </div>
    </header>
  );
};

export default Header;
