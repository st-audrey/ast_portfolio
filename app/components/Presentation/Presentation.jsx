import Image from "next/image";
import Blob from "../Blob/Blob";
import Animation from "../Animation/Animation";

export default function Presentation() {
  return (
    <div className="flex flex-col md:flex-row m-8 mb-28">
      <div className="md:w-6/12 w-full">
        <p className="font-orbit">
          Bienvenue sur mon portfolio. <br />
          <br />
          Passionnée par la création de solutions numériques innovantes, je
          recherche actuellement un poste de Développeuse web / frontend en CDI.
          <br />
          <br />
          Mes compétences en JavaScript, Angular et React, me permettent de
          concevoir des sites web performants, attrayants et accessibles. Je
          crois en la puissance d'une première impression positive et en
          l'importance d'une expérience utilisateur exceptionnelle.
          <br />
          <br />
          J'ai également été formée en SEO, ce qui signifie que je peux
          contribuer à positionner votre site web de manière stratégique dans
          les résultats de recherche. <br />
          <br />
          Pour en savoir plus sur mon travail, n'hésitez pas à consulter mon
          portfolio. Je suis enthousiaste à l'idée de rejoindre une équipe
          dynamique et de contribuer à son succès.
        </p>
      </div>
      <div className="md:w-6/12 h-auto w-full flew justify-center">
        {/* <Image src="/photo.jpg" alt="" width="400" height="400" /> */}
        {/* <Blob /> */}
        <Animation />
      </div>
    </div>
  );
}
