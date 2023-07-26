"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

import NavLink from "../NavLink/NavLink";

export default function Header() {
  const PDF_URL = "http://https://st-audrey.github.io/ast_portfolio/cv.pdf";
  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    aTag.setAttribute("target", "_blank");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <header className="bg-transparent mx-8 my-10 flex flex-grow">
      <nav
        className="flex items-center justify-between md:w-1/2 font-orbit w-full"
        aria-label="Global"
      >
        <FontAwesomeIcon
          icon={faAsterisk}
          size="2x"
          className="cursor-pointer hidden sm:block"
        />

        <NavLink
          link_href="#works_section"
          link_name="Projets"
          className="font-semibold leading-6 text-gray-900"
        />

        <NavLink
          link_href="#about_section"
          link_name="A propos"
          className="font-semibold leading-6 text-gray-900"
        />

        <NavLink
          link_href="#contact_section"
          link_name="Contact"
          className="font-semibold leading-6 text-gray-900"
        />
      </nav>
      <div className="w-1/2 h-8 flex flew-row justify-end">
        <button
          onClick={() => {
            downloadFile(PDF_URL);
          }}
        >
          <FontAwesomeIcon
            icon={faAddressCard}
            size="2x"
            className="cursor-pointer"
          />
        </button>

        <a href="https://github.com/st-audrey" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="ml-3 cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/audrey-santo-tomas-44599518b/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="ml-3 cursor-pointer"
          />
        </a>
      </div>
    </header>
  );
}
