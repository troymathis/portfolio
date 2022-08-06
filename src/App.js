import Nav from "./components/Nav";
import Main from "./components/Main";
import "./styles.scss";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
      <div className="prof">
        <Link
          to="portfolio"
          className="logo"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
            <img src="https://i.imgur.com/E7UHhml.png" className="logo" />
        </Link>
        <div className="hub">
          <a href="https://github.com/troymathis"><img src="https://i.imgur.com/MM95rZT.png" /></a>
          <a href="https://www.linkedin.com/in/troy-mathis-dev/"><img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png" /></a>
          <a id='res' href="/resume/Troy-Mathis-Resume.docx" download><div id='res-text'>Resume</div><img src="https://i.imgur.com/6pHPScy.png" /></a>
        </div>
      </div>
      <div className="play">
        <div className="navbar">
          <Nav />
        </div>
        <Main />
      </div>
    </div>
  );
}

export default App;
