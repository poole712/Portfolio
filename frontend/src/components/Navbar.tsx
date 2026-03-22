import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <div className="navbar my-nav-bar">
        <div className="container d-flex align-items-center justify-content-between">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <p className="m-0">Fletcher Poole -</p>
            <p className="m-0 mx-2 fst-italic">Portfolio</p>
          </Link>
          <div className="d-flex align-items-center gap-4">
            <Link className="nav-link my-nav-link" to="/pages/GamePage">
              Games
            </Link>
            <Link className="nav-link my-nav-link" to="/pages/WebAppsPage">
              Web Apps
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
