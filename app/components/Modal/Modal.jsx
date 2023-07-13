import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ show, selectedProject, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  let pdf_href = selectedProject.pdf ? selectedProject.pdf : null;

  const modalContent = show ? (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal-modal">
          <div className="modal-header relative">
            <a href="#" onClick={handleClose} className="fixed">
              <button className="font-semibold font-orbit">x</button>
            </a>
          </div>
          <div className="modal-body">
            <div className="modal-project">
              <div className="font-orbit pl-10 flex flex-col justify-between">
                <p className="font-semibold text-3xl mt-12">
                  Projet {selectedProject.name}
                </p>
                <p className="font-semibold mt-5">
                  Année :
                  <span className="font-normal"> {selectedProject.year}</span>
                </p>
                <div className="font-semibold mt-5">
                  Missions :
                  <ul className="mt-5">
                    {selectedProject.missions.map((mission, i) => (
                      <li className="font-normal" key={i}>
                        <FontAwesomeIcon
                          icon={faAsterisk}
                          size="lg"
                          className="cursor-pointer"
                        />
                        <span> {mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="font-semibold flex flex-row items-center mt-5">
                  Technologies :
                  {selectedProject.techs.map((tech, i) => (
                    <div className="font-normal modal-tech" key={i}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-wrap my-10">
              {selectedProject.img_modal.length &&
                selectedProject.img_modal.map((image, i) => (
                  <div key={i} className="p-2 modal-image-container">
                    <img
                      src={image}
                      alt={selectedProject.name}
                      className="modal-image rounded-lg mt-5 w-full h-auto"
                    />
                  </div>
                ))}
            </div>
            {selectedProject.pdf ? (
              <div className="w-full flex flex-row justify-center my-12 font-orbit font-semibold">
                <a href={pdf_href} target="_blank">
                  Voir le rapport complet
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
}
