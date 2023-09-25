import FlipCard from "../FlipCard/FlipCard";

export default function About() {
  const PDF_URL = "/cv.pdf";
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
    <div className="h-auto mx-8" id="about_section">
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
          Mon objectif professionnel est clair : continuer à apprendre et à
          grandir en tant que développeuse. La technologie évolue rapidement, et
          je suis convaincue que l'apprentissage continu est essentiel pour
          rester compétitif. Je suis prête à relever de nouveaux défis, à
          acquérir de nouvelles compétences et à contribuer au succès de notre
          entreprise.
          <br />
          <br />
          N'hésitez pas à me contacter pour discuter de toute opportunité de
          collaboration ou pour en savoir plus sur mon parcours et mes
          compétences. Merci de prendre le temps de découvrir mon portfolio en
          ligne, où vous trouverez des exemples de mes travaux et de mes
          réalisations. <br />
          <br />
          J'ai hâte de contribuer à des projets passionnants et de faire partie
          d'une communauté professionnelle inspirante.
        </p>
      </div>

      <div className="flex justify-center font-orbit font-semibold mb-20">
        <a href="cv.pdf">Télécharger mon CV</a>
      </div>

      <div
        className="lg:h-96 h-auto flex flex-col lg:flex-row lg:justify-between mb-28 w-full"
        id="about_section"
      >
        <div className="flex lg:flex-col flex-row justify-center text-center mt-4">
          <FlipCard title="relationnel" />
        </div>

        <div className="flex lg:flex-col flex-row justify-center text-center mt-4">
          <FlipCard title="equipe" />
        </div>

        <div className="flex lg:flex-col flex-row justify-center text-center mt-4">
          <FlipCard title="junior" />
        </div>

        <div className="flex lg:flex-col flex-row justify-center text-center mt-4">
          <FlipCard title="creative" />
        </div>
      </div>
    </div>
  );
}
