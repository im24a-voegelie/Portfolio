# Portfolio

Persönliches Portfolio von Ennio Vögeli – Schüler der Informatik Mittelschule an der Kantonsschule Hottingen. Die Seite stellt mich, meine Fähigkeiten und meine Schul- und Hackathon-Projekte vor.

Live-Site: [www.evoegeli.ch](https://www.evoegeli.ch/)

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
