"use client";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Greeting from "./components/Greeting/Greeting";
import Presentation from "./components/Presentation/Presentation";
import Works from "./components/Works/Works";

export default function Home() {
  return (
    <main id="main">
      <Greeting />
      {/* <Presentation />
      <About />
      <Works />
      <div id="modal"></div>
      <Contact /> */}
    </main>
  );
}
