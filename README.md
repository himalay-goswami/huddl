# Huddl

Huddl is a modern web application built with React, TypeScript, and Vite. It provides a clean, modular architecture for building scalable dashboards and internal tools. The project features a component-driven design, reusable UI elements, and a focus on developer experience.

## Features

- ⚡️ Fast development with Vite and HMR
- 🧩 Modular React components (sidebar, header, charts, tables, etc.)
- 🎨 Custom UI library for consistent design
- 📦 TypeScript for type safety
- 🧹 ESLint and strict linting for code quality
- 📁 Organized folder structure for scalability

## Project Structure

```
/ (root)
├── public/           # Static assets
├── src/
│   ├── app/          # App-specific modules (e.g., dashboard)
│   ├── assets/       # Images and SVGs
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions
│   └── pages/        # Top-level pages (Dashboard, Login, etc.)
├── package.json      # Project metadata and scripts
├── tsconfig*.json    # TypeScript configuration
├── vite.config.ts    # Vite configuration
└── ...
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Linting & Code Quality

- ESLint is configured for strict type-aware linting.
- To run lint checks:
  ```sh
  npm run lint
  ```
- See `eslint.config.js` for custom rules and recommended plugins.

## Contributing

1. Fork the repo and create a new branch.
2. Make your changes and add tests if needed.
3. Run `npm run lint` and `npm run build` to ensure code quality.
4. Submit a pull request.

## License

MIT
