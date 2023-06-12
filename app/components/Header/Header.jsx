import React from "react";

export default function Header() {
  return (
    <header className="bg-white mx-8 mt-8">
      <nav
        className="flex items-center justify-between w-96"
        aria-label="Global"
      >
        <a
          href="#about_section"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          À propos
        </a>
        <a
          href="#works_section"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Projets
        </a>
        <a
          href="#contact_section"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
