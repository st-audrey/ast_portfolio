import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="h-auto mx-8" id="contact_section">
      <div className="font-orbit font-semibold">Contact</div>

      <div className="h-96 w-full flex flex-row justify-center my-24">
        <div className="flex flex-col">
          <div className="font-orbit w-full text-center">
            <p>
              N'hésitez pas à me contacter par mail ou par message privé sur
              <br />
              LinkedIn. Je vous répondrai dans la journée.
            </p>
          </div>

          <div className="flex flex-row justify-around items-center mt-12">
            <a href="mailto:st_audrey@outlook.fr" target="_blank">
              <FontAwesomeIcon
                icon={faPaperPlane}
                size="5x"
                className="ml-3 cursor-pointer hover:text-white ease-in-out duration-300"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/audrey-santo-tomas-44599518b/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="5x"
                className="ml-3 cursor-pointer hover:text-sky-600 ease-in-out duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
