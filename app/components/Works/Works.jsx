"use client";
import { useState } from "react";

import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import projects from "../../content/projects.json";
// import ProjectCard from "../ProjectCard/ProjectCard";

import "./Works.css";

export default function Works() {
  const [showModal, setShowModal] = useState(false);

  const [project, setProject] = useState(projects[0]);

  return (
    <div className="h-auto mx-8 mb-44" id="works_section">
      <div className="font-orbit font-semibold mb-10">Projets</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full mb-28">
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
            className="works-card w-full h-full mx-3 rounded-lg relative cursor-pointer"
            onClick={() => {
              setProject(project);
              setShowModal(true);
            }}
          >
            <img
              src={project.img_cover}
              className="rounded-lg h-auto w-full overflow-hidden"
              alt={project.name}
            />
            <div className="works-card-overlay w-full rounded-lg h-full absolute top-0 left-0">
              <div className="w-full flex flex-col justify-center items-center h-5/6">
                <p className="font-orbit font-semibold text-black text-4xl">
                  {project.name}
                </p>
              </div>

              <div className="w-full h-13 flex justify-end pr-5 items-center">
                <p className="font-orbit font-semibold text-black text-xl">
                  Voir plus
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="xl"
                  className="pl-5 text-black"
                />
              </div>
            </div>
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
