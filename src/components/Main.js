import { Route } from "react-router-dom";

// pages
import Home from "../pages/Home"
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

const Main = () => {
  return (
    <main>
      <Route exact path="/portfolio">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
    </main>
  );
};

export default Main;
