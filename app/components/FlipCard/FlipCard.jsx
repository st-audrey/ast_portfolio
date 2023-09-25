import "./FlipCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeSimple,
  faChess,
  faPalette,
  faChessKnight,
  faFaceFlushed,
  faBrain,
  faFaceGrimace,
} from "@fortawesome/free-solid-svg-icons";

export default function FlipCard(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flex flex-col justify-center">
            <div className="h-12 ml-20">
              <FontAwesomeIcon
                className="icon-height"
                icon={
                  props.title == "relationnel"
                    ? faHandshakeSimple
                    : props.title == "equipe"
                    ? faChess
                    : props.title == "junior"
                    ? faBrain
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
                  ? "MBTI = INTP"
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
                  ? "Capacité d'analyse et de résolution de problèmes, pensée créative et indépendance d'esprit."
                  : props.title == "creative"
                  ? "Je dessine, je peins, j’écris, je fais du piano, je suis plutôt douée pour les wireframes et les maquettes..."
                  : null}
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="flex flex-col justify-center">
            <div className="h-12 ml-20">
              <FontAwesomeIcon
                className="icon-height"
                icon={
                  props.title == "relationnel"
                    ? faFaceGrimace
                    : props.title == "equipe"
                    ? faChessKnight
                    : props.title == "junior"
                    ? faBrain
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
                  ? "MBTI = INTP"
                  : props.title == "creative"
                  ? "Dev Web"
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
                  ? "Accorde une importance plus grande aux critères objectifs qu'à des considérations émotionnelles."
                  : props.title == "creative"
                  ? "Je ne suis pas Web Designer. Choisir une typo pour ce portfolio... m’a pris 4 jours."
                  : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
