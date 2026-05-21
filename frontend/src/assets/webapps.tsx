export const WebApps = [
  {
    id: 1,
    name: "KauriBoard",
    releaseDate: "15/03/2026",
    logo: "/WebAppLogos/KauriBoardLogo.png",
    galleryLinks: [
      "/WebAppScreens/KauriBoard/KauriBoard1.png",
      "/WebAppScreens/KauriBoard/KauriBoard2.png",
    ],
    description:
      "KauriBoard is a project planning tool. KauriBoard fulfills all project teams needs by offering them a place for planning and collaboration with live updates and interactions.",
    frontendStack: [
        "React (Vite)",
        "Typescript",
        "React Router",
        "Bootstrap",
    ],
    backendStack: [
        ".NET 8 Web API",
        "Entity Framework Core",
        "PostgresSQL",
        "JWT Authentication",
        "SignalR"
    ],
    infrastructure: [
        "Render (Backend)",
        "Vercel (Frontend)",
        "Supabase (Postgres Database)",
        "Google OAuth (Login)",
    ],
    webLink: "https://kauriboard.vercel.app/",
    gitHubLink: "https://github.com/poole712/Kauriboard",
    warning: "Loading can take some time (up to a 2 minutes on first load)."
  },
  {
    id: 2,
    name: "Scapes and That",
    releaseDate: "15/03/2026",
    logo: "/WebAppLogos/ScapesAndThatLogo.jpg",
    galleryLinks: [
      "/WebAppScreens/ScapesAndThat/ScapesAndThat1.png",
    ],
    description:
      "Scapes and that is a landscaping company based in Brisbane, Australia. My Step Brother co-owns the company and I built this website for him to promote his business and allow customers to look at their work and contact them for quotes.",
    frontendStack: [
        "React (Vite)",
        "Typescript",
        "React Router",
        "Bootstrap",
    ],
    backendStack: [
        "",
        "",
        "",
        ""
    ],
    infrastructure: [
        "Render (Backend)",
        "Vercel (Frontend)",
        "Supabase (Postgres Database)",
        "Google OAuth (Login)",
    ],
    webLink: "https://scapes-and-that.vercel.app/",
    gitHubLink: "",
    warning: ""
  }
];
