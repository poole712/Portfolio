import "./App.css";

function App() {
  return (
    <>
      <div className="p-5 text-center rounded-3 shadow shadow-lg home">
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
          games. Below is are links to my GitHub and social medias
        </p>
        <ul className="list list-group list-group-horizontal align-self-center justify-content-center">
          <li className="list-group-item d-flex border-0 bg-light justify-content-between">
            <a
              className="btn btn-primary d-flex"
              href="https://github.com/poole712?tab=repositories"
            >
              GitHub
              <i className="bi bi-github ms-1"></i>
            </a>
          </li>
          <li className="list-group-item d-flex border-0 bg-light justify-content-between">
            <a
              className="btn btn-primary d-flex"
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
