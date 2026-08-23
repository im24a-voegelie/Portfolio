export const projects = [
  {
    id: 1,
    title: {
      de: "IMS Grades – Notenrechnungs- und Anzeige-Webseite",
      en: "IMS Grades – Grade Calculation & Display Website",
    },
    type: {
      de: "Hackathon-Projekt",
      en: "Hackathon Project",
    },
    description: {
      de: "Webapplikation zur Berechnung und Darstellung von Schulnoten",
      en: "Web application for calculating and displaying school grades",
    },
    fullDescription: {
      de: "Gemeinsam mit zwei Mitschülern habe ich im Rahmen eines Hackathons eine Webapplikation entwickelt, mit der Schulnoten berechnet und übersichtlich visualisiert werden können. Die Anwendung ermöglicht es Schülern, ihre verschiedenen Noten einzugeben und sofort den Durchschnitt sowie detaillierte Statistiken zu sehen. Das Interface ist benutzerfreundlich und wurde mit modernen Web-Technologien entwickelt.",
      en: "Together with two classmates, I developed a web application during a hackathon that calculates and clearly visualizes school grades. The application lets students enter their various grades and immediately see the average as well as detailed statistics. The interface is user-friendly and was built with modern web technologies.",
    },
    learnings: {
      de: [
        "Effektive Kommunikation und Abstimmung im Team",
        "Planung und Umsetzung einer vollständigen Webapplikation vom Konzept bis zum Prototypen",
        "Zusammenarbeit unter Zeitdruck während des Hackathons",
        "Anwendung und Vertiefung meiner technischen Kenntnisse in einem praxisnahen Projekt",
        "Responsive Design für verschiedene Geräte",
        "State Management und Component Architecture in React",
      ],
      en: [
        "Effective communication and coordination within the team",
        "Planning and building a complete web application from concept to prototype",
        "Collaborating under time pressure during the hackathon",
        "Applying and deepening my technical skills in a practical project",
        "Responsive design for different devices",
        "State management and component architecture in React",
      ],
    },
    technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    links: {
      demo: null,
      github: null, // TODO: Replace with your GitHub repository URL
    },
  },
  {
    id: 2,
    title: {
      de: "Trackworks – Multiplayer Renn-Baustellenspiel",
      en: "Trackworks – Multiplayer Racing Builder",
    },
    type: {
      de: "Hackathon-Projekt",
      en: "Hackathon Project",
    },
    description: {
      de: "Kompetitives Online-Multiplayer-Rennspiel mit gemeinsamem Streckenbau",
      en: "Competitive online multiplayer racing game with collaborative track building",
    },
    fullDescription: {
      de: "Bei einem weiteren Hackathon habe ich an Trackworks mitgewirkt, einem kompetitiven Online-Multiplayer-Rennspiel für bis zu vier Spieler. Das Spiel wechselt zwischen Bau- und Rennphasen: Die Spieler bauen gemeinsam eine sich stetig erweiternde Rennstrecke, indem sie Streckenteile und Hindernisse platzieren, und fahren anschließend direkt auf der eben gebauten Strecke. Wer zuerst 20 Punkte erreicht, gewinnt. Der Server basiert auf Colyseus und Express, das Frontend auf Phaser 3 für die Darstellung und React mit Zustand für die UI und das State Management, alles in TypeScript und als npm-Workspace mit den Modulen shared, server und client organisiert.",
      en: "At another hackathon, I worked on Trackworks, a competitive online multiplayer racing game for up to four players. The game alternates between building and racing phases: players collaboratively construct an ever-expanding race track by placing track segments and obstacles, then immediately race on the track they just built. The first player to reach 20 points wins. The server is built with Colyseus and Express, the frontend uses Phaser 3 for rendering and React with Zustand for the UI and state management, all in TypeScript and organized as an npm workspace with shared, server, and client modules.",
    },
    learnings: {
      de: [
        "Echtzeit-Multiplayer-Architektur mit einem autoritativen Game-Server (Colyseus)",
        "Trennung von Spiellogik und Rendering durch ein engine-unabhängiges shared-Modul",
        "Deterministische Physiksimulation und clientseitige Vorhersage synchron zum Server halten",
        "Arbeiten mit Phaser 3 für 2D-Rendering in Kombination mit React für die UI",
        "Organisation eines TypeScript-Projekts als npm-Workspace mit mehreren Paketen",
        "Testgetriebene Entwicklung unter Zeitdruck mit Vitest und einer Headless-Integrationstestsuite",
      ],
      en: [
        "Real-time multiplayer architecture with an authoritative game server (Colyseus)",
        "Separating game logic from rendering through an engine-independent shared module",
        "Keeping deterministic physics simulation and client-side prediction in sync with the server",
        "Working with Phaser 3 for 2D rendering combined with React for the UI",
        "Organizing a TypeScript project as an npm workspace with multiple packages",
        "Test-driven development under time pressure with Vitest and a headless integration test suite",
      ],
    },
    technologies: [
      "TypeScript",
      "React",
      "Phaser 3",
      "Colyseus",
      "Express",
      "Zustand",
    ],
    links: {
      demo: null,
      github: "https://github.com/im24a-mendolag/hackathon-2026",
    },
  },
  {
    id: 3,
    title: {
      de: "Schiffeversenken – Fullstack-Webanwendung",
      en: "Battleship – Fullstack Web Application",
    },
    type: {
      de: "Schulprojekt",
      en: "School Project",
    },
    description: {
      de: "Fullstack-Umsetzung des Klassikers Schiffeversenken mit React-Frontend und Spring-Boot-Backend",
      en: "Fullstack implementation of the classic game Battleship with a React frontend and Spring Boot backend",
    },
    fullDescription: {
      de: "Im Rahmen des Unterrichts habe ich das klassische Spiel Schiffeversenken als vollständige Fullstack-Webanwendung umgesetzt, bestehend aus zwei getrennten Repositories für Frontend und Backend. Das Frontend wurde mit React, TypeScript und Vite gebaut und kommuniziert über Axios mit dem Backend, inklusive Login- und Registrierungs-Flows, geschützten Routen für angemeldete Nutzer und einem rollenbasierten Dashboard. Das Backend basiert auf Java und Spring Boot mit Datenbankanbindung sowie Spring Security für Authentifizierung und Autorisierung. Die API wurde mit Postman getestet und dokumentiert.",
      en: "As part of my coursework, I implemented the classic game Battleship as a complete fullstack web application, consisting of two separate repositories for frontend and backend. The frontend was built with React, TypeScript, and Vite and communicates with the backend via Axios, including login and registration flows, protected routes for authenticated users, and a role-based dashboard. The backend is built on Java and Spring Boot with a database connection as well as Spring Security for authentication and authorization. The API was tested and documented with Postman.",
    },
    learnings: {
      de: [
        "Aufbau einer Fullstack-Architektur mit getrenntem Frontend- und Backend-Repository",
        "Authentifizierung und rollenbasierte Zugriffskontrolle mit Spring Security",
        "Kommunikation zwischen React-Frontend und Spring-Boot-Backend über eine REST-API",
        "Geschützte Routen und Cookie-basiertes Session-Handling im Frontend",
        "API-Testing und Dokumentation mit Postman",
        "Arbeiten mit TypeScript und Vite in einem produktionsnahen Frontend-Setup",
      ],
      en: [
        "Building a fullstack architecture with separate frontend and backend repositories",
        "Authentication and role-based access control with Spring Security",
        "Communication between a React frontend and Spring Boot backend via a REST API",
        "Protected routes and cookie-based session handling in the frontend",
        "API testing and documentation with Postman",
        "Working with TypeScript and Vite in a production-like frontend setup",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Axios",
      "Java",
      "Spring Boot",
      "Spring Security",
    ],
    links: {
      demo: null,
      github: "https://github.com/im24a-voegelie/Schiffeversenken-Frontend",
      githubBackend: "https://github.com/im24a-voegelie/Schiffeversenken-Backend",
    },
  },
  {
    id: 4,
    title: {
      de: "Shelfle – Steam-Ratespiel",
      en: "Shelfle – Steam Guessing Game",
    },
    type: {
      de: "Schulprojekt",
      en: "School Project",
    },
    description: {
      de: "Steam-integriertes Ratespiel, bei dem Spiele aus der eigenen oder einer fremden Bibliothek erraten werden",
      en: "Steam-integrated guessing game where players identify games from their own or a friend's library",
    },
    fullDescription: {
      de: "Shelfle ist eine Webanwendung, die sich mit der Steam-API verbindet und daraus ein Ratespiel macht: Spieler melden sich mit ihrem Steam-Konto an, synchronisieren ihre Spielebibliothek und versuchen dann, Spiele aus ihrer eigenen oder der Bibliothek eines Freundes zu erraten. Dabei stehen mehrere Spielmodi zur Verfügung, unter anderem Classic, Zoom, Higher/Lower und ein Achievement-Modus. Die Spieledaten werden zusätzlich mit Metadaten wie Tags, Erscheinungsjahr, Reviews und Preisinformationen angereichert. Das Projekt ist mit Next.js, React und TypeScript umgesetzt, nutzt PostgreSQL mit Prisma als Datenbank und NextAuth für den Steam-Login.",
      en: "Shelfle is a web application that connects to the Steam API and turns it into a guessing game: players sign in with their Steam account, sync their game library, and then try to guess games from their own or a friend's library. Several game modes are available, including Classic, Zoom, Higher/Lower, and an Achievement mode. The game data is further enriched with metadata such as tags, release year, reviews, and pricing information. The project is built with Next.js, React, and TypeScript, uses PostgreSQL with Prisma as the database, and NextAuth for Steam login.",
    },
    learnings: {
      de: [
        "Integration einer externen API (Steam) inklusive OAuth-Login über NextAuth",
        "Datenmodellierung und Datenbankzugriff mit PostgreSQL und Prisma ORM",
        "Entwicklung mehrerer unterschiedlicher Spielmodi mit gemeinsamer Datenbasis",
        "Arbeiten mit Next.js App Router und API-Routen für Backend-Logik",
        "Strukturierung eines wachsenden Codebases für mehrere Mitwirkende",
        "Anreicherung und Aufbereitung von externen Daten für die Anzeige im Frontend",
      ],
      en: [
        "Integrating an external API (Steam) including OAuth login via NextAuth",
        "Data modeling and database access with PostgreSQL and Prisma ORM",
        "Developing several different game modes sharing a common data foundation",
        "Working with the Next.js App Router and API routes for backend logic",
        "Structuring a growing codebase for multiple contributors",
        "Enriching and preparing external data for display in the frontend",
      ],
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
    ],
    links: {
      demo: null,
      github: "https://github.com/im24a-mendolag/shelfle",
    },
  },
  {
    id: 5,
    wip: true,
    title: {
      de: "UNO – Browser-Kartenspiel",
      en: "UNO – Browser Card Game",
    },
    type: {
      de: "Persönliches Projekt",
      en: "Personal Project",
    },
    description: {
      de: "Browserbasiertes Multiplayer-UNO gegen Freunde oder CPU-Gegner",
      en: "Browser-based multiplayer UNO against friends or CPU opponents",
    },
    fullDescription: {
      de: "UNO ist ein browserbasiertes Kartenspiel, das ich in meiner Freizeit entwickle. Spieler können solo gegen drei CPU-Gegner antreten oder über einen Raumcode gemeinsam mit Freunden in einem Multiplayer-Raum mit 2 bis 4 Spielern spielen. Unbesetzte Plätze werden beim Spielstart automatisch mit KI-Gegnern aufgefüllt, gespielt wird über mehrere Runden bis 500 Punkte. Das Backend basiert auf Node.js mit einem WebSocket-Server, der als alleinige Quelle der Wahrheit für die Spielregeln dient – die Clients übernehmen nur Anzeige und Eingabe, was Cheating verhindert. Das Frontend ist in reinem Vanilla JavaScript ohne Build-Tools umgesetzt.",
      en: "UNO is a browser-based card game I'm building in my spare time. Players can go solo against three CPU opponents or share a room code to play with friends in a multiplayer room of 2 to 4 players. Empty seats are automatically filled with AI opponents when a game starts, and play continues across multiple rounds up to 500 points. The backend is built on Node.js with a WebSocket server that acts as the single source of truth for the game rules — clients only handle display and input, which prevents cheating. The frontend is plain vanilla JavaScript with no build tools.",
    },
    learnings: {
      de: [
        "Aufbau eines autoritativen Game-Servers mit WebSockets ohne externes Framework",
        "Trennung von Spiellogik (Server) und Darstellung (Client) zur Vermeidung von Cheating",
        "Implementierung einer einfachen KI für CPU-Gegner",
        "Verwaltung von Multiplayer-Räumen mit Raumcodes und dynamischem Auffüllen freier Plätze",
        "Arbeiten mit reinem Vanilla JavaScript ohne Build-Tools oder Bundler",
      ],
      en: [
        "Building an authoritative game server with WebSockets without an external framework",
        "Separating game logic (server) from rendering (client) to prevent cheating",
        "Implementing a simple AI for CPU opponents",
        "Managing multiplayer rooms with room codes and dynamically filling empty seats",
        "Working with plain vanilla JavaScript without build tools or a bundler",
      ],
    },
    technologies: ["Node.js", "WebSocket", "JavaScript"],
    links: {
      demo: null,
      github: "https://github.com/im24a-voegelie/UNO",
    },
  },
];
