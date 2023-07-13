import Image from "next/image";
import Blob from "../Blob/Blob";

export default function Presentation() {
  return (
    <div className="flex flex-row w-full m-8 mb-28">
      <div className="w-6/12">
        <p className="font-orbit">
          Bienvenue sur mon portfolio. <br />
          <br /> Je suis actuellement à la recherche d'un poste de développeur
          web / frontend en <strong>alternance</strong> pour me perfectionner
          sur <strong>React</strong> grâce la formation de développeur React
          proposée par la très reconnue plateforme{" "}
          <strong>Openclassrooms</strong>. <br />
          <br />
          Cette formation, s'étalant sur deux ans, me permettra de maîtriser
          cette technologie et les bonnes pratiques qui lui sont liées, tout en
          apportant mon savoir faire à une entreprise. <br />
          <br />
          N'hésitez pas à explorer mon portfolio et à me contacter.
          <br /> Repoussons ensemble les limites de l'innovation et créons
          quelque chose d'extraordinaire !
        </p>
      </div>
      <div className="w-6/12 h-auto">
        {/* <Image src="/photo.jpg" alt="" width="400" height="400" /> */}
        <Blob />
      </div>
    </div>
  );
}
