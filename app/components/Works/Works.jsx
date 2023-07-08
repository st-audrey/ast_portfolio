"use client";
import { useState } from "react";

import Modal from "../Modal/Modal";
// import ProjectCard from "../ProjectCard/ProjectCard";

import "./Works.css";

export default function Works() {
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Booki",
      year: "2023",
      tech: ["HTML", "CSS"],
      img_cover: "/booki_cover.png",
      img_modal: ["/booki_1.png"],
    },
    {
      id: 2,
      name: "lala",
      year: "1254",
      mission: "toto titi titi",
      img_cover: "/booki_cover.png",
      img_modal: ["/booki_1.png"],
    },
    {
      id: 3,
      name: "Booki",
      year: "2023",
      tech: ["HTML", "CSS"],
      img_cover: "/booki_cover.png",
      img_modal: ["/booki_1.png"],
    },
    {
      id: 4,
      name: "lala",
      year: "1254",
      mission: "toto titi titi",
      img_cover: "/booki_cover.png",
      img_modal: ["/booki_1.png"],
    },
  ];

  const [project, setProject] = useState(projects[0]);

  return (
    <div className="h-auto mb-20 mx-8" id="works_section">
      <div className="font-orbit font-semibold mb-10">Projets</div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {/* {projects &&
          projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                props={project}
                onClick={function (e) {
                  this.setProject(project);
                  this.setShowModal(true);
                }}
                // onClick={() => {
                //   this.setProject(project);
                //   this.setShowModal(true);
                // }}
              />
            );
          })} */}
        {projects.map((project, i) => (
          <div
            key={i}
            className="works-card w-full h-96 mx-3 rounded-lg relative cursor-pointer"
            onClick={() => {
              setProject(project);
              setShowModal(true);
            }}
          >
            <div className="works-card-overlay w-full rounded-lg h-96 absolute top-0 left-0 hidden">
              <div className="w-full h-80 ">Projet Booki</div>
              <div className="w-full h-13">Voir plus</div>
            </div>
            <img
              src={project.img_cover}
              className="rounded-lg w-full h-96"
              alt={project.name}
            />
          </div>
        ))}

        <Modal
          show={showModal}
          selectedProject={project}
          onClose={() => setShowModal(false)}
        ></Modal>
      </div>
    </div>
  );
}
