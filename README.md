<div align="center">
  <h1>Legacy React Portfolio</h1>
  <p>An earlier component-based portfolio implementation</p>
  <img src="https://img.shields.io/badge/status-archived-6B7280?style=flat-square" alt="Status: archived" />
  <img src="https://img.shields.io/badge/stack-React%20%7C%20TypeScript%20%7C%20Vite-149ECA?style=flat-square" alt="React TypeScript Vite" />
</div>

> [!NOTE]
> **Archived and superseded.** This earlier React/Vite portfolio is retained as a code snapshot. View the active portfolio at [cod4nitish.github.io/portfolio](https://cod4nitish.github.io/portfolio/) or its [source repository](https://github.com/Cod4Nitish/portfolio).

## Snapshot

This is a preserved React portfolio implementation with reusable sections for a hero, header, about, projects, and contact. It shows an earlier component-based approach before the current portfolio.

## Component architecture

~~~mermaid
flowchart LR
    A[Browser] --> B[main.tsx]
    B --> C[App router]
    C --> D[Home component]
    D --> E[Header and navigation]
    D --> F[Hero, about and contact sections]
    D --> G[Sample project and blog content]
    F --> H[Reusable Radix-based UI components]
    G --> I[Framer Motion interactions]
~~~

## Source-backed review notes

| Area | What is in this snapshot |
| --- | --- |
| Routing | App.tsx serves one root route and conditionally exposes Tempo development routes. |
| Sections | The main Home component imports Header, AboutSection, and ContactSection. |
| Content | Project and blog entries are hard-coded sample content, so they should not be read as a verified client portfolio. |
| UI stack | React 18, TypeScript, Vite, Tailwind CSS, Radix UI, Lucide icons, and Framer Motion are declared in package.json. |
| Backend | Supabase is listed as a dependency, but no active Supabase client usage appears under src/. |

## Honest limitations

This is a UI prototype snapshot, not the maintained public portfolio. It intentionally remains archived because it contains seeded example content and early scaffolding alongside the reusable components.

## Stack

- React, TypeScript, and Vite
- Tailwind CSS, Radix UI, and Framer Motion
- Reusable UI components and Storybook stories

## Explore locally

```bash
npm install
npm run dev
```

The original Vite and ESLint setup notes are kept below for historical context.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
