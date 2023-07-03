"use client";
import { useState } from "react";

import Modal from "../Modal/Modal";

export default function Works() {
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      name: "toto",
      year: "2001",
      mission: "toto titi titi",
      img_front: "/photo.jpg",
      img_modal: "/photo.jpg",
    },
    {
      id: 2,
      name: "lala",
      year: "1254",
      mission: "toto titi titi",
      img_front: "/photo.jpg",
      img_modal: "/photo.jpg",
    },
  ];

  return (
    <div className="h-full mx-8 flex flex-col" id="works_section">
      <div className="font-orbit font-semibold">Projets</div>

      <div className="flex flex-row justify-around">
        {projects.map((project) => (
          <button key={project.id} onClick={() => setShowModal(true)}>
            {project.name}0
          </button>
        ))}
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          ttititititititit
        </Modal>
      </div>
    </div>
  );
}
