import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import NavLink from "../NavLink/NavLink";

export default function Header() {
  return (
    <header className="bg-white mx-8 my-10 flex flex-grow">
      <nav
        className="flex items-center justify-between w-1/2 font-orbit"
        aria-label="Global"
      >
        <FontAwesomeIcon
          icon={faAsterisk}
          size="2x"
          className="cursor-pointer"
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
        <a href="https://github.com/st-audrey" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="cursor-pointer"
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
