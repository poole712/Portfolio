import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <Outlet />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
