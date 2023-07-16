"use client";
// import { useRef } from "react";
// import Spline from "@splinetool/react-spline";

export default function Greeting() {
  // const spline = useRef();

  return (
    <div className="h-96 w-full flex flex-row justify-between items-center mx-8 mb-28">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-orbit">
        Bonjour !<br />
        Je suis Audrey <br />
        Développeuse Web
      </div>

      {/* <div className="w-1/3">
        <Spline scene="https://prod.spline.design/hb-DKAh9zktU6XXU/scene.splinecode" />
      </div> */}
    </div>
  );
}
