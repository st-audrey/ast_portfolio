"use client";
import Greeting from "./components/Greeting/Greeting";
import About from "./components/About/About";
import Presentation from "./components/Presentation/Presentation";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import TopButton from "./components/TopButton/TopButton";

export default function Home() {
  return (
    <main>
      <Greeting />
      <Presentation />
      <Works />
      <About />
      <Contact />
      <TopButton />
    </main>
  );
}
