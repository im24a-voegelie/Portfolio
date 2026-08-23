export const projects = [
  {
    id: 1,
    title: "IMS Grades – Notenrechnungs- und Anzeige-Webseite",
    type: "Hackathon-Projekt",
    description:
      "Webapplikation zur Berechnung und Darstellung von Schulnoten",
    fullDescription:
      "Gemeinsam mit zwei Mitschülern habe ich im Rahmen eines Hackathons eine Webapplikation entwickelt, mit der Schulnoten berechnet und übersichtlich visualisiert werden können. Die Anwendung ermöglicht es Schülern, ihre verschiedenen Noten einzugeben und sofort den Durchschnitt sowie detaillierte Statistiken zu sehen. Das Interface ist benutzerfreundlich und wurde mit modernen Web-Technologien entwickelt.",
    learnings: [
      "Effektive Kommunikation und Abstimmung im Team",
      "Planung und Umsetzung einer vollständigen Webapplikation vom Konzept bis zum Prototypen",
      "Zusammenarbeit unter Zeitdruck während des Hackathons",
      "Anwendung und Vertiefung meiner technischen Kenntnisse in einem praxisnahen Projekt",
      "Responsive Design für verschiedene Geräte",
      "State Management und Component Architecture in React",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    links: {
      demo: null,
      github: null, // TODO: Replace with your GitHub repository URL
    },
  },
  {
    id: 2,
    title: "Trackworks – Multiplayer Renn-Baustellenspiel",
    type: "Hackathon-Projekt",
    description:
      "Kompetitives Online-Multiplayer-Rennspiel mit gemeinsamem Streckenbau",
    fullDescription:
      "Bei einem weiteren Hackathon habe ich an Trackworks mitgewirkt, einem kompetitiven Online-Multiplayer-Rennspiel für bis zu vier Spieler. Das Spiel wechselt zwischen Bau- und Rennphasen: Die Spieler bauen gemeinsam eine sich stetig erweiternde Rennstrecke, indem sie Streckenteile und Hindernisse platzieren, und fahren anschließend direkt auf der eben gebauten Strecke. Wer zuerst 20 Punkte erreicht, gewinnt. Der Server basiert auf Colyseus und Express, das Frontend auf Phaser 3 für die Darstellung und React mit Zustand für die UI und das State Management, alles in TypeScript und als npm-Workspace mit den Modulen shared, server und client organisiert.",
    learnings: [
      "Echtzeit-Multiplayer-Architektur mit einem autoritativen Game-Server (Colyseus)",
      "Trennung von Spiellogik und Rendering durch ein engine-unabhängiges shared-Modul",
      "Deterministische Physiksimulation und clientseitige Vorhersage synchron zum Server halten",
      "Arbeiten mit Phaser 3 für 2D-Rendering in Kombination mit React für die UI",
      "Organisation eines TypeScript-Projekts als npm-Workspace mit mehreren Paketen",
      "Testgetriebene Entwicklung unter Zeitdruck mit Vitest und einer Headless-Integrationstestsuite",
    ],
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
    title: "Schiffeversenken – Fullstack-Webanwendung",
    type: "Schulprojekt",
    description:
      "Fullstack-Umsetzung des Klassikers Schiffeversenken mit React-Frontend und Spring-Boot-Backend",
    fullDescription:
      "Im Rahmen des Unterrichts habe ich das klassische Spiel Schiffeversenken als vollständige Fullstack-Webanwendung umgesetzt, bestehend aus zwei getrennten Repositories für Frontend und Backend. Das Frontend wurde mit React, TypeScript und Vite gebaut und kommuniziert über Axios mit dem Backend, inklusive Login- und Registrierungs-Flows, geschützten Routen für angemeldete Nutzer und einem rollenbasierten Dashboard. Das Backend basiert auf Java und Spring Boot mit Datenbankanbindung sowie Spring Security für Authentifizierung und Autorisierung. Die API wurde mit Postman getestet und dokumentiert.",
    learnings: [
      "Aufbau einer Fullstack-Architektur mit getrenntem Frontend- und Backend-Repository",
      "Authentifizierung und rollenbasierte Zugriffskontrolle mit Spring Security",
      "Kommunikation zwischen React-Frontend und Spring-Boot-Backend über eine REST-API",
      "Geschützte Routen und Cookie-basiertes Session-Handling im Frontend",
      "API-Testing und Dokumentation mit Postman",
      "Arbeiten mit TypeScript und Vite in einem produktionsnahen Frontend-Setup",
    ],
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
    title: "Shelfle – Steam-Ratespiel",
    type: "Schulprojekt",
    description:
      "Steam-integriertes Ratespiel, bei dem Spiele aus der eigenen oder einer fremden Bibliothek erraten werden",
    fullDescription:
      "Shelfle ist eine Webanwendung, die sich mit der Steam-API verbindet und daraus ein Ratespiel macht: Spieler melden sich mit ihrem Steam-Konto an, synchronisieren ihre Spielebibliothek und versuchen dann, Spiele aus ihrer eigenen oder der Bibliothek eines Freundes zu erraten. Dabei stehen mehrere Spielmodi zur Verfügung, unter anderem Classic, Zoom, Higher/Lower und ein Achievement-Modus. Die Spieledaten werden zusätzlich mit Metadaten wie Tags, Erscheinungsjahr, Reviews und Preisinformationen angereichert. Das Projekt ist mit Next.js, React und TypeScript umgesetzt, nutzt PostgreSQL mit Prisma als Datenbank und NextAuth für den Steam-Login.",
    learnings: [
      "Integration einer externen API (Steam) inklusive OAuth-Login über NextAuth",
      "Datenmodellierung und Datenbankzugriff mit PostgreSQL und Prisma ORM",
      "Entwicklung mehrerer unterschiedlicher Spielmodi mit gemeinsamer Datenbasis",
      "Arbeiten mit Next.js App Router und API-Routen für Backend-Logik",
      "Strukturierung eines wachsenden Codebases für mehrere Mitwirkende",
      "Anreicherung und Aufbereitung von externen Daten für die Anzeige im Frontend",
    ],
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
];
