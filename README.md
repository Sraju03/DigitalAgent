# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

#Digital Agent Ai ReadMe.

<!-- Frontend project to work with random password generator api.
This project is built using **React + Vite + TypeScript**. -->

#**NPM 11.12.1** → Installs packages and runs scripts

# Tech Stack

- **React 19** → Builds the UI using components
- **TypeScript 6** → Adds type safety and reduces errors
- **Vite 8** → Runs the dev server and builds the project
- **ESLint 9** → Checks code quality and coding standards

---

# Dependencies

## Production Dependencies

json id="pkg003"
"dependencies": {
"react": "^19.2.5",
"react-dom": "^19.2.5",
"react-router-dom": "^7.14.1"
}

### Used For

- `react` → UI development
- `react-dom` → Rendering React components to browser DOM
- `react-router-dom` → To define router path and corresponding components

---

## Development Dependencies

json id="pkg004"
"devDependencies": {
"@types/node": "^24.12.2",
"@types/react": "^19.2.14",
"@types/react-dom": "^19.2.3",
"@typescript-eslint/eslint-plugin": "^8.58.2",
"@typescript-eslint/parser": "^8.58.2",
"@eslint/js": "^9.39.4",
"eslint": "^9.39.4",
"eslint-plugin-react-hooks": "^7.1.1",
"eslint-plugin-react-refresh": "^0.5.2",
"@vitejs/plugin-react": "^6.0.1",
"globals": "^17.5.0",
"typescript": "~6.0.2",
"typescript-eslint": "^8.58.2",
"vite": "^8.0.9"
}

### Used For

- TypeScript support
- TypeScript and ESLint communication
- ESLint code checking
- React fast refresh
- React plugin support
- Vite bundling

---

# Setup Instructions

## Install Dependencies

bash id="cmd001"
npm install

This installs all packages from `package.json`.

## Run Project in Development Mode

npm run dev
