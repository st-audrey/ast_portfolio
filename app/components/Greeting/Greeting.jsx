"use client";
import { PowerGlitch } from "powerglitch";

import { useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function Greeting() {
  const spline = useRef();
  PowerGlitch.glitch(".glitch", {
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 3950,
    },
    glitchTimeSpan: {
      start: 0.06,
      end: 0.18,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 3,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.02,
      hueRotate: true,
    },
    pulse: false,
  });

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
