import FlipCard from "../FlipCard/FlipCard";

export default function About() {
  return (
    <div className="h-96 mx-8 flex flex-col" id="about_section">
      <div>A propos</div>

      <div
        className="h-96 mx-8 flex flex-row justify-between"
        id="about_section"
      >
        <div className="flex flex-col justify-center text-center">
          <FlipCard title="relationnel" />
        </div>

        <div className="flex flex-col justify-center text-center">
          <FlipCard title="equipe" />
        </div>

        <div className="flex flex-col justify-center text-center">
          <FlipCard title="junior" />
        </div>

        <div className="flex flex-col justify-center text-center">
          <FlipCard title="creative" />
        </div>
      </div>
    </div>
  );
}
