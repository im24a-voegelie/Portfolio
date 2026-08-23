# Portfolio

Persönliches Portfolio von Ennio Vögeli – Schüler der Informatik Mittelschule an der Kantonsschule Hottingen. Die Seite stellt mich, meine Fähigkeiten und meine Schul- und Hackathon-Projekte vor.

Live-Site: _(Deployment-Link hier ergänzen, falls vorhanden)_

## Tech-Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) für Scroll- und Stagger-Animationen
- [React Icons](https://react-icons.github.io/react-icons/)

## Projektstruktur

```
app/
  page.js              Startseite (Hero, Skills-Vorschau, Projekt-Vorschau)
  about/page.js         Über-mich-Seite
  Projects/page.js       Übersicht aller Projekte
  Projects/[id]/page.js   Detailseite eines einzelnen Projekts
components/
  ui/                   Wiederverwendbare UI-Bausteine (Card, Badge, Button, Modal, ...)
  animations/           Scroll-/Stagger-Animationskomponenten
  games/                Kleine Spielereien (z. B. Snake) auf der Startseite
data/
  projects.js           Zentrale Datenquelle für alle angezeigten Projekte
```

Neue Projekte werden ausschliesslich in [`data/projects.js`](data/projects.js) gepflegt und erscheinen danach automatisch sowohl in der Projektübersicht als auch auf der jeweiligen Detailseite.

## Erste Schritte

Voraussetzung: Node.js (siehe `package.json` für kompatible Next.js-Version).

```bash
npm install
npm run dev
```

Die Seite ist danach unter [http://localhost:3000](http://localhost:3000) erreichbar. Änderungen an den Dateien im `app`-Verzeichnis werden automatisch neu geladen.

## Verfügbare Skripte

| Befehl          | Beschreibung                          |
| ---------------- | -------------------------------------- |
| `npm run dev`     | Startet den Entwicklungsserver         |
| `npm run build`   | Erstellt einen Production-Build        |
| `npm run start`   | Startet den Production-Build           |
| `npm run lint`    | Führt ESLint über das Projekt aus      |

## Deployment

Das Projekt lässt sich, wie jede Next.js-App, am einfachsten über [Vercel](https://vercel.com/new) deployen. Details dazu in der [Next.js Deployment-Dokumentation](https://nextjs.org/docs/app/building-your-application/deploying).
