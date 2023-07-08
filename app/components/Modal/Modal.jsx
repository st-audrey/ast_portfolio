import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ show, selectedProject, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);
  console.log("toto", selectedProject);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal-modal">
          <div className="modal-header">
            <a href="#" onClick={handleClose}>
              <button>x</button>
            </a>
          </div>
          <div className="modal-body">
            <div className="modal-project">
              <div className="w-1/2 pl-10">
                <img src={selectedProject.img_cover} className="rounded-lg" />
              </div>
              <div className="w-1/2 font-orbit font-semibold pl-10">
                {selectedProject.name}
              </div>
            </div>
            <div className="modal-image-container mt-10">
              {selectedProject &&
                selectedProject.img_modal.map((image, i) => {
                  return (
                    <img
                      src={image}
                      key={i}
                      alt=""
                      className="modal-image rounded-lg"
                    />
                  );
                })}
            </div>
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
