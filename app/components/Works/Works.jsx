"use client";
import { useState } from "react";

import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import ProjectCard from "../ProjectCard/ProjectCard";

import "./Works.css";

export default function Works() {
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Booki",
      year: "2023",
      missions: [
        "Intégration de maquettes Figma",
        "Respect des spécifications et contraintes techniques",
        "Versionner avec Git et Github",
        "Responsive",
        "Validité du code auprès du W3C",
        "Production d'un rapport",
      ],
      techs: ["HTML", "CSS"],
      img_cover: "/booki_cover.png",
      img_modal: ["/booki_modal_1.png", "/booki_resp_1.png"],
    },
    {
      id: 2,
      name: "Portfolio S.B",
      year: "2023",
      missions: [
        "Récupération de datas depuis le back-end (API)",
        "Réalisation de filtres",
        "Authentification de l’utilisateur",
        "Création de formulaire",
        "CRUD et gestion des erreurs",
      ],
      techs: ["HTML", "CSS", "Javascript", "POO", "API"],
      img_cover: "/sb_cover.png",
      img_modal: [
        "/sb_modal_1.png",
        "/sb_modal_2.png",
        "/sb_modal_3.png",
        "/sb_modal_4.png",
      ],
    },
    {
      id: 3,
      name: "Nina Carducci",
      year: "2023",
      techs: ["Lighthouse", "Schema.org", "Google Rich Snippet", "Wave"],
      missions: [
        "Optimisation globale du site, tant sur les performances que sur le SEO",
        "Mise en place le référencement local",
        "Ajout des metas pour les réseaux sociaux",
        "Modifications liées à l’accessibilité du site",
        "Production d'un rapport d’optimisation présentant toutes les actions et leur impact",
      ],
      img_cover: "/nina_cover.png",
      img_modal: ["/nina_modal_1.png", "/nina_modal_2.png"],
      pdf: "/nina_pdf.pdf",
    },
    {
      id: 4,
      name: "Menu Maker",
      year: "2023",
      missions: [
        "Développer un système de veille",
        "Déterminer les spécifications techniques",
        "Organiser la gestion de projet du développement du site",
        "Configutation de l'outil de gestion de projet (Kanban, Roadmap, Planning Poker)",
        "Production d'un rapport qui valorise la travail de veille",
        "Production d'un rapport qui présente la solution technique",
      ],
      techs: ["Jira", "Pitch", "Feedly", "Notion"],
      img_cover: "/mm_cover.png",
      img_modal: [
        "/mm_modal_1.png",
        "/mm_modal_2.png",
        "/mm_modal_3.png",
        "/mm_modal_4.png",
      ],
      pdf: "/mm_pdf.pdf",
    },
    {
      id: 5,
      name: "Kasa",
      year: "2023",
      missions: [
        "Développer l’ensemble de l’application",
        "Respect des maquettes et des coding guidelines",
        "Responsive",
        "Animations CSS",
        "Production d'un rapport qui présente la solution",
      ],
      techs: ["React", "Sass"],
      img_cover: "/kasa_cover.png",
      img_modal: [
        "/kasa_modal_1.png",
        "/kasa_resp_1.png",
        "/kasa_modal_2.png",
        "/kasa_resp_2.png",
        "/kasa_modal_3.png",
        "/kasa_resp_3.png",
        "/kasa_modal_4.png",
        "/kasa_resp_4.png",
      ],
    },
    {
      id: 6,
      name: "Mon Vieux Grimoire",
      year: "2023",
      missions: [
        "Implémenter un modèle logique de données conformément à la réglementation",
        "Stocker des données de manière sécurisée",
        "Mettre en œuvre des opérations CRUD de manière sécurisée",
        "Production d'un rapport qui présente la solution",
      ],
      techs: [
        "Express",
        "Node",
        "Mongoose",
        "Nodemon",
        "MongoDB",
        "Helmet",
        "Multer",
        "Sharp",
      ],
      img_cover: "/mvg_cover.png",
      img_modal: [
        "/mvg_modal_1.png",
        "/mvg_modal_2.png",
        "/mvg_modal_3.png",
        "/mvg_modal_4.png",
      ],
      pdf: "/mvg_pdf.pdf",
    },
  ];

  const [project, setProject] = useState(projects[0]);

  return (
    <div className="h-auto mx-8 mb-44" id="works_section">
      <div className="font-orbit font-semibold mb-10">Projets</div>

      <div className="grid grid-cols-2 gap-4 w-full mb-28">
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
            <img
              src={project.img_cover}
              className="rounded-lg h-96 w-full object-cover"
              alt={project.name}
            />
            <div className="works-card-overlay w-full rounded-lg h-96 absolute top-0 left-0">
              <div className="w-full flex flex-col justify-center items-center h-80">
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
