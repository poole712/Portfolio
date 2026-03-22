import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts/Layout.tsx";
import GamePage from "./pages/GamePage.tsx";
import WebAppsPage from "./pages/WebAppsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
          <Route path="/Pages/GamePage" element={<GamePage />} />
          <Route path="/Pages/WebAppsPage" element={<WebAppsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
