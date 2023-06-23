import Image from "next/image";

export default function Presentation() {
  return (
    <div className="flex flex-row w-full m-8">
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
          {/* J'ai une vive préférence pour le <strong>full remote</strong> car
          c'est comme cela que j'ai toujours travaillé et étudié. La distance
          n'est qu'un concept abstrait lorsqu'il s'agit de créer du code de
          qualité. De plus, cela me permet d'être totalement immergée dans mon
          univers de développement et je suis bien plus efficace sur mon propre
          clavier avec mon chat sur les genoux :) <br /> */}
          {/* <br />
          Je tiens également à mentionner que j'ai une reconnaissance de
          travailleur handicapé <strong>RQTH</strong>. Bien que je n'aie aucun
          problème de mobilité permanant, cette reconnaissance témoigne de ma
          persévérance, de ma détermination et de ma capacité à surmonter les
          obstacles. La diversité et l'inclusion sont des valeurs qui me
          tiennent à cœur, et je suis convaincue que nos différences sont des
          atouts précieux pour construire une équipe solide et créative. <br /> */}
          <br />
          N'hésitez pas à explorer mon portfolio et à me contacter.
          <br /> Repoussons ensemble les limites de l'innovation et créons
          quelque chose d'extraordinaire !
        </p>
      </div>
      <div className="w-6/12 h-auto">
        <Image src="/photo.jpg" alt="" width="400" height="400" />
      </div>
    </div>
  );
}
