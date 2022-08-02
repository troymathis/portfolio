import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

const Main = () => {
    const location = useLocation()

  return (
    <main>
      <TransitionGroup>
        <CSSTransition
        timeout={250}
        classNames='fade'
        key={location.key}
        >
          <Switch location={location}>
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
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
};

export default Main;
