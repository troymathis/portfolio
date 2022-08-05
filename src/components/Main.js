import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

const Main = () => {
  const location = useLocation();

  return (
    <main>
        <div className="content">
          <section className="section" id="portfolio">
            <Home />
          </section>
          <section className="section" id="about">
            <About />
          </section>
          <section className="section" id="projects">
            <Projects />
          </section>
          <section className="section" id="contact">
            <Contact />
          </section>
        </div>
    </main>
  );
};

export default Main;
