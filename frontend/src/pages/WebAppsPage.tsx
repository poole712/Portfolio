import { WebApps } from "../assets/webapps";
import WebAppComponent from "../components/WebAppComponent";
import type { WebApp } from "../types/webappsType";

export default function WebAppsPage() {
  return (
    <>
      <div className="m-5">
        {WebApps.map((element : WebApp) => (
          <WebAppComponent app={element}/>
        ))}
      </div>
    </>
  );
}