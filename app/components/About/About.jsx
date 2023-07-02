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
    <div className="h-96 mx-8 flex flex-col" id="about_section">
      <div className="font-orbit font-semibold">A propos</div>

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

      <div className="flex justify-center font-orbit font-semibold">
        <button
          className="dl-button"
          onClick={() => {
            downloadFile(PDF_URL);
          }}
        >
          Télécharger mon CV
        </button>
      </div>
    </div>
  );
}
