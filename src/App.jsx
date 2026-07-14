import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Approach from "./components/Approach";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Approach />
        <Work />
        <Blog />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
