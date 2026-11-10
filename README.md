# React Tesla Clone

A Tesla-inspired product site built with React, TypeScript, React Router, and
Tailwind CSS.

<!-- product-images:start -->

## Product preview

<p align="center">
  <img src="docs/product-images/hero.png" alt="Tesla Clone — A front-end practice build exploring Tesla-inspired product pages." width="100%">
</p>

<table>
<tr>
  <td width="33%"><img src="docs/product-images/feature-01.png" alt="One screen. One strong idea. — Full-screen vehicle sections anchor a Tesla-inspired UI practice project." width="100%"></td>
  <td width="33%"><img src="docs/product-images/feature-02.png" alt="Explore the page patterns. — Move between home, vehicle, and Cybertruck pages with React Router." width="100%"></td>
  <td width="33%"><img src="docs/product-images/feature-03.png" alt="Small details. A complete page. — Responsive navigation, typed product data, and local media support the build." width="100%"></td>
</tr>
</table>

<!-- product-images:end -->

## Development

```bash
npm install
npm start
```

The development server uses port `3000` when it is available.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

Use `npm run format` to apply Prettier formatting.

## Project structure

The source layout follows the feature-oriented conventions used by
`apsaratalent-web` while remaining compatible with Create React App:

```text
src/
├── app/                 # Route-level pages and router composition
│   ├── cybertruck/
│   ├── home/
│   └── vehicles/
├── components/          # Reusable components grouped by feature
│   ├── home/
│   └── navbar/
├── data/                # Typed static product and navigation data
├── utils/
│   └── types/           # Shared TypeScript domain models
├── index.css
└── index.tsx            # Browser entry point
```

Component folders use kebab-case names and expose an `index.tsx`; reusable
component contracts live in adjacent `props.ts` files.
