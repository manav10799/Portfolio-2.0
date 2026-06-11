import Cursor from "./components/Cursor.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Nav from "./sections/Nav.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Work from "./sections/Work.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[10000] focus:bg-accent focus:text-accent-contrast focus:px-4 focus:py-2 focus:font-mono focus:text-step--1"
      >
        Skip to content
      </a>
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
