import "./Blob.css";

export default function Blob() {
  return (
    <div className="blob-container ">
      <div className="blob"></div>
      <div className="blob-svg">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="a">
              <path
                fill="currentColor"
                d="M801.5 654q-55.5 154-222 190.5t-325-57Q96 694 148.5 525t148-333.5Q392 27 569.5 109T802 345.5q55 154.5-.5 308.5Z"
              />
            </clipPath>
          </defs>

          <path
            fill="none"
            stroke="#000000"
            strokeWidth="4"
            d="M801.5 654q-55.5 154-222 190.5t-325-57Q96 694 148.5 525t148-333.5Q392 27 569.5 109T802 345.5q55 154.5-.5 308.5Z"
          >
            <animate
              attributeName="d"
              dur="50s"
              repeatCount="indefinite"
              values="M801.5 654q-55.5 154-222 190.5t-325-57Q96 694 148.5 525t148-333.5Q392 27 569.5 109T802 345.5q55 154.5-.5 308.5Z;M748 621q-55 121-206.5 242t-315-15.5Q63 711 61.5 499.5T239 214q179-74 319-18t192.5 180Q803 500 748 621Z;M839.5 668Q768 836 580 905.5t-284-96q-96-165.5-144.5-333T247 166Q391 23 575 99t260 238.5Q911 500 839.5 668Z;M801.5 654q-55.5 154-222 190.5t-325-57Q96 694 148.5 525t148-333.5Q392 27 569.5 109T802 345.5q55 154.5-.5 308.5Z"
            ></animate>
          </path>
        </svg>
      </div>
    </div>
  );
}
