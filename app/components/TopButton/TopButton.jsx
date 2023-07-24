import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

export default function TopButton() {
  const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="w-full flex mb-12 justify-end">
      <button onClick={goTop}>
        <FontAwesomeIcon
          icon={faCircleUp}
          size="3x"
          className="cursor-pointer"
        />
      </button>
    </div>
  );
}
