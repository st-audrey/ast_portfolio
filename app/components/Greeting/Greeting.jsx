"use client";
// import { useRef } from "react";
// import Spline from "@splinetool/react-spline";

export default function Greeting() {
  // const spline = useRef();

  return (
    <div className="h-96 w-full flex flex-row justify-between items-center mx-8 ">
      <div className="text-6xl font-orbit">
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
