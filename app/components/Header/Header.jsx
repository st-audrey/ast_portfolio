import NavLink from "../NavLink/NavLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="bg-white mx-8 my-10 flex flex-grow">
      <nav
        className="flex items-center justify-between w-1/2"
        aria-label="Global"
      >
        <NavLink link_name="A propos" link_href="#about_section" />
        <NavLink link_name="Projets" link_href="#works_section" />
        <NavLink link_name="Contact" link_href="#contact_section" />
      </nav>
      <div className="w-1/2 h-8 flex flew-row justify-end">
        <FontAwesomeIcon icon={faGithub} size="2x" className="cursor-pointer" />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className="ml-3 cursor-pointer"
        />
      </div>
    </header>
  );
}
