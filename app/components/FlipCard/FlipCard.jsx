import "./FlipCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeSimple,
  faSeedling,
  faChess,
  faPalette,
  faBiohazard,
  faChessKnight,
  faFaceFlushed,
  faPersonCane,
} from "@fortawesome/free-solid-svg-icons";

export default function FlipCard(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flex flex-col justify-center">
            <div className="w-72 h-12 flex justify-center">
              <FontAwesomeIcon
                className="w-3/12r"
                icon={
                  props.title == "relationnel"
                    ? faHandshakeSimple
                    : props.title == "equipe"
                    ? faChess
                    : props.title == "junior"
                    ? faSeedling
                    : props.title == "creative"
                    ? faPalette
                    : null
                }
              />
            </div>
            <div>
              <p className="font-orbit font-semibold mt-2">
                {props.title == "relationnel"
                  ? "Bon relationnel"
                  : props.title == "equipe"
                  ? "Esprit d'équipe"
                  : props.title == "junior"
                  ? "Junior"
                  : props.title == "creative"
                  ? "Créative"
                  : null}
              </p>
            </div>
            <div>
              <p className="font-orbit text-xs mt-2">
                {props.title == "relationnel"
                  ? "J'accorde une grande importance à cultiver de bonnes relations avec mes collègues."
                  : props.title == "equipe"
                  ? "J'ai à cœur de travailler en étroite collaboration avec mes collègues pour atteindre nos objectifs communs."
                  : props.title == "junior"
                  ? "2 ans d'expérience me permettent de contribuer de manière significative aux projets."
                  : props.title == "creative"
                  ? "Je dessine, je peins, j’écris, je fais du piano, je suis plutôt douée pour les wireframes et les maquettes..."
                  : null}
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="flex flex-col justify-center">
            <div className="w-72 h-12 flex justify-center">
              <FontAwesomeIcon
                icon={
                  props.title == "relationnel"
                    ? faBiohazard
                    : props.title == "equipe"
                    ? faChessKnight
                    : props.title == "junior"
                    ? faPersonCane
                    : props.title == "creative"
                    ? faFaceFlushed
                    : null
                }
              />
            </div>
            <div>
              <p className="font-orbit mt-2 font-semibold">
                {props.title == "relationnel"
                  ? "Spontanée"
                  : props.title == "equipe"
                  ? "Cavalier seul"
                  : props.title == "junior"
                  ? "J'ai 40 ans !"
                  : props.title == "creative"
                  ? "Exigente"
                  : null}
              </p>
            </div>
            <div>
              <p className="font-orbit text-xs mt-2">
                {props.title == "relationnel"
                  ? "Je dis ce que je pense et je pense ce que je dis."
                  : props.title == "equipe"
                  ? "Je suis capable de travailler et de m’organiser de manière autonome."
                  : props.title == "junior"
                  ? "Je suis donc mature, diplomate, ponctuelle, calme, réfléchie ..."
                  : props.title == "creative"
                  ? "Choisir une typo pour ce portfolio m’a pris 4 jours."
                  : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
