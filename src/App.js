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
            <img src="https://i.imgur.com/aRtThMr.png" className="logo" />
        </Link>
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
