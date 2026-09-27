# Legacy React Portfolio

> [!NOTE]
> **Archived and superseded.** This earlier React/Vite portfolio is retained as a code snapshot. View the active portfolio at [cod4nitish.github.io/portfolio](https://cod4nitish.github.io/portfolio/) or its [source repository](https://github.com/Cod4Nitish/portfolio).

## Snapshot

This is a preserved React portfolio implementation with reusable sections for a hero, header, about, projects, and contact. It shows an earlier component-based approach before the current portfolio.

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
