<div align="center">

# React Tesla Clone

**A responsive clone of the Tesla website UI.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## Overview

React Tesla Clone is a Tesla-inspired product site built as a front-end practice project. It recreates Tesla's full-screen product sections, navigation, and vehicle pages, with all media served locally.

> This is an educational UI clone and is not affiliated with Tesla, Inc.

## Features

- **Full-screen home page** with vehicle sections and calls to action.
- **Vehicle and Cybertruck pages** using React Router.
- **Responsive navbar** with a slide-out menu.
- **Interactive map** built with Leaflet.
- **Typed static data** for products and navigation.
- **Media verification:** a build-time script confirms all local media exists.

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 18, React Router 6 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Maps | Leaflet |
| Tooling | Create React App, ESLint, Prettier, Testing Library |

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
git clone https://github.com/RithyBondeth/React-Tesla-Clone.git
cd React-Tesla-Clone
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Verify media and create a production build |
| `npm run typecheck` | Type-check with `tsc --noEmit` |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm test` | Run tests |

## Project Structure

```text
React-Tesla-Clone/
├── src/
│   ├── app/            # Route pages: home, vehicles, cybertruck
│   ├── components/     # Home sections and navbar
│   ├── data/           # Typed product and navigation data
│   └── utils/types/    # Shared TypeScript models
└── public/assets/      # Local images and media
```

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details. The license covers the source code only; Tesla names, logos, and images belong to their respective owners.
