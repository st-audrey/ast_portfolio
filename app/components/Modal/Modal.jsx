import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function ProjectModal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="modal-overlay">
      <div className="modal-modal">
        <div className="modal-header">
          <a hre="#" onClick={handleClose}>
            <button>Close</button>
          </a>
        </div>
        <div className="modal-body">{children}</div>
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
