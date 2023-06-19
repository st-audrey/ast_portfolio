import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Greeting from "./components/Greeting/Greeting";
import Works from "./components/Works/Works";

export default function Home() {
  return (
    <main>
      <Greeting />
      <About />
      <Works />
      <Contact />
    </main>
  );
}
