import { Carousel } from "./Carousel";
import type { WebApp } from "../types/webappsType";

export default function WebAppComponent({ app }: { app: WebApp }) {
  return (
    <div className="container game-block">
      <div className="d-flex flex-row align-items-start">
        <div className="card description-box">
          {/*<img src={app.logo} className="game-logo" alt="..." />`*/}
          <div className="card-body">
            <h4 className="card-title">{app.name}</h4>
            <p className="card-text">{app.description}</p>
            <p className="card-text fs-5 mb-0">Stack:</p>
            <table className="table stack-table table-striped-columns table-group-divider">
              <thead>
                <th>Backend</th>
                <th>Frontend</th>
              </thead>
              <tbody>
                {app.backendStack.map((val, index) => (
                  <tr>
                    <td key={index}>{val}</td>
                    <td key={index}>{app.frontendStack[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {app.webLink && (
            <a
              href={app.webLink}
              target="_blank"
              className="download-button"
              rel="noopener noreferrer"
            >
              Open Web App
            </a>
          )}
          {app.gitHubLink && (
            <a
              href={app.gitHubLink}
              target="_blank"
              className="download-button"
              rel="noopener noreferrer"
            >
              Open GitHub Repository
            </a>
          )}
        </div>
        <Carousel game={null} app={app} />
      </div>
    </div>
  );
}
