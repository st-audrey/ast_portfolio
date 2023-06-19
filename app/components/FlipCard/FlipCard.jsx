import "./FlipCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeSimple,
  faSeedling,
  faChess,
  faPalette,
  faFaceGrinBeamSweat,
  faChessBishop,
  faSkullCrossbones,
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
              <p className="font-orbit font-semibold mt-3">
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
              <p className="font-orbit text-xs mt-3">
                {props.title == "relationnel"
                  ? "Je dis ce que je pense et je pense ce que je dis."
                  : props.title == "equipe"
                  ? "Esprit d'équipe"
                  : props.title == "junior"
                  ? "Junior"
                  : props.title == "creative"
                  ? "Créative"
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
                    ? faFaceGrinBeamSweat
                    : props.title == "equipe"
                    ? faChessBishop
                    : props.title == "junior"
                    ? faPersonCane
                    : props.title == "creative"
                    ? faSkullCrossbones
                    : null
                }
              />
            </div>
            <div>
              <p className="font-orbit mt-3">
                {props.title == "relationnel"
                  ? "Spontanée"
                  : props.title == "equipe"
                  ? "Esprit d'équipe"
                  : props.title == "junior"
                  ? "Personne âgée"
                  : props.title == "creative"
                  ? "Créative"
                  : null}
              </p>
            </div>
            <div>
              <p className="font-orbit text-xs mt-3">
                {props.title == "relationnel"
                  ? "Je dis ce que je pense et je pense ce que je dis."
                  : props.title == "equipe"
                  ? "Esprit d'équipe"
                  : props.title == "junior"
                  ? "Junior"
                  : props.title == "creative"
                  ? "Créative"
                  : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
