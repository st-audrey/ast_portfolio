import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="h-96 mx-8 flex flex-col" id="contact_section">
      <div className="font-orbit font-semibold">Contact</div>

      <div className="h-96 mx-8 flex flex-row justify-around">
        <a href="mailto:st_audrey@outlook.fr" target="_blank">
          <FontAwesomeIcon
            icon={faPaperPlane}
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
    </div>
  );
}
