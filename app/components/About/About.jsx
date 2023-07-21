import FlipCard from "../FlipCard/FlipCard";

export default function About() {
  const PDF_URL = "http://localhost:3000/cv.pdf";
  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    aTag.setAttribute("target", "_blank");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="h-auto mx-8 flex flex-col" id="about_section">
      <div className="font-orbit font-semibold mb-10">A propos</div>
      <div className="flex flex-row justify-center mb-28">
        <p className="font-orbit w-9/12">
          Développeuse web junior en reconversion, j'ai déjà parcouru un chemin
          professionnel riche et diversifié.
          <br />
          <br /> Avant de me lancer dans le développement web, j'ai consacré
          plusieurs années de ma vie à aider les autres en tant
          qu'aide-soignante, ce qui m'a permis de développer de solides
          compétences relationnelles et d'acquérir une grande empathie envers
          les personnes dans le besoin. <br />
          <br />
          De plus, j'ai également eu une expérience valorisante en tant que
          militaire, où j'ai appris l'importance du travail d'équipe, de la
          discipline et de l'engagement.
          <br />
          <br />
          Malgré une reconnaissance de travailleur handicapé, je tiens à
          souligner que je suis valide, capable et motivée pour accomplir les
          tâches qui me sont confiées. <br />
          <br />
          Aujourd'hui, je suis animée par une passion nouvelle : la création de
          sites web innovants. Je suis constamment en train d'apprendre et de me
          former aux dernières technologies, afin de toujours rester à la pointe
          du développement web. <br />
          <br />
          J'aimerais travailler en full remote, car suis persuadée que le
          travail à distance offre une flexibilité et une liberté accrues, tout
          en permettant une concentration maximale sur les projets. <br />
          Je suis enthousiaste à l'idée de rejoindre une équipe dynamique et
          innovante, où je pourrai continuer à grandir en tant que développeuse
          web. <br />
          <br />
          N'hésitez pas à me contacter pour discuter de toute opportunité de
          collaboration ou pour en savoir plus sur mon parcours et mes
          compétences. Merci de prendre le temps de découvrir mon portfolio en
          ligne, où vous trouverez des exemples de mes travaux et de mes
          réalisations. <br />
          <br />
          J'ai hâte de contribuer à des projets passionnants et de faire partie
          d'une communauté professionnelle inspirante."
        </p>
      </div>

      <div className="flex justify-center font-orbit font-semibold mb-20">
        <button
          className="dl-button"
          onClick={() => {
            downloadFile(PDF_URL);
          }}
        >
          Télécharger mon CV
        </button>
      </div>

      <div
        className="md:h-96 h-auto md:mx-8 flex flex-col md:flex-row md:justify-between mb-28 w-full"
        id="about_section"
      >
        <div className="flex md:flex-col flex-row justify-center text-center mt-4">
          <FlipCard title="relationnel" />
        </div>

        <div className="flex md:flex-col flex-row justify-center text-center mt-4">
          <FlipCard title="equipe" />
        </div>

        <div className="flex md:flex-col flex-row justify-center text-center mt-4">
          <FlipCard title="junior" />
        </div>

        <div className="flex md:flex-col flex-row justify-center text-center mt-4">
          <FlipCard title="creative" />
        </div>
      </div>
    </div>
  );
}
