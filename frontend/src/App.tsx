import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <div className="p-5 text-center rounded-3 home">
        <img
          src="/Me2.png"
          alt="Bootstrap Logo"
          width="250"
          height="250"
          className="rounded rounded-3"
        />

        <p className="about-me-box">
          Hi Im Fletcher/Fletch! I am a web developer who is currently studying
          to become a full stack engineer. In my free time I love to work on
          games.
        </p>

        <ul className="socials">
          <li className="social-link">
            <Link className="btn btn-primary" to={"/pages/GamePage"}>
              Games
              <i className="bi bi-joystick ms-1"></i>
            </Link>
          </li>
          <li className="social-link">
            <Link className="btn btn-primary" to={"/pages/WebAppsPage"}>
              Web Apps
              <i className="bi bi-globe ms-1"></i>
            </Link>
          </li>
        </ul>

        <ul className="socials  mt-3 mb-0">
          <li className="social-link">
            <a
              className="btn btn-primary"
              href="https://github.com/poole712?tab=repositories"
            >
              GitHub
              <i className="bi bi-github ms-1"></i>
            </a>
          </li>
          <li className="social-link">
            <a
              className="btn btn-primary"
              href="https://www.linkedin.com/in/fletcher-poole-76801b185/"
            >
              LinkedIn
              <i className="bi bi-linkedin ms-1"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
