import { Carousel } from "./Carousel";
import type { WebApp } from "../types/webappsType";

export default function WebAppComponent({ app }: { app: WebApp }) {
  return (
    <div className="container game-block">
      <div className="d-flex flex-row align-items-start">
        <div className="card description-box">
          {/*<img src={app.logo} className="game-logo" alt="..." />`*/}
          <div className="card-body">
            <h4 className="card-title mb-1">{app.name}</h4>
            <p className="card-text">{app.description}</p>
            <div className="table-group-divider mb-2"/>
            {/*<p className="card-text mb-0 text-center text-decoration-underline table-group-divider">
              Stack
            </p>*/}
            <table className="table stack-table table-striped-columns mb-0">
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
          <div className="table-group-divider m-2 "/>
          {app.warning && <p className="text-danger warning-text mx-3 mb-0">Warning: {app.warning}</p>}
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
