import { useState } from "react";

import Modal from "../Modal/Modal";

export default function Works() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-96 mx-8 flex flex-col" id="works_section">
      <div className="font-orbit">Projets</div>

      <div className="flex flex-row justify-around">
        <button onClick={() => setShowModal(true)}>toto</button>;
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          ttititititititit
        </Modal>
      </div>
    </div>
  );
}
