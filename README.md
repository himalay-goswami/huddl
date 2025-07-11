# Huddl

Huddl is a full-stack web application platform for building scalable dashboards and internal tools. The project is organized into modular frontend and backend components, designed for rapid development, maintainability, and a great developer experience.

---

## 🏗️ Project Overview

- **Frontend:** Modern React app using TypeScript and Vite, with a custom UI library and reusable components.
- **Backend:** (Add details here if you have a backend, e.g., Node.js/Express, API server, etc. If not, mention that this is currently a frontend-only project.)
- **Monorepo Structure:** Organized for clear separation of concerns and easy extensibility.

---

## 📁 Directory Structure

```
/ (root)
├── frontend/         # Frontend React app (see below)
├── backend/          # Backend API server (add details if present)
├── public/           # Static assets
├── src/              # Main source code (if not in frontend/)
├── package.json      # Project metadata and scripts
├── tsconfig*.json    # TypeScript configuration
├── vite.config.ts    # Vite configuration (frontend)
├── README.md         # Project documentation (this file)
└── ...
```

---

## 🌐 Frontend (React + Vite)

- Located in the `frontend/` directory (or `src/` if not separated).
- Features modular components, custom UI, and strict linting.
- See the [Frontend README](frontend/README.md) for more details and usage examples.

### Key Features
- ⚡️ Fast development with Vite and HMR
- 🧩 Modular React components
- 🎨 Custom UI library
- 📦 TypeScript for type safety
- 🧹 ESLint for code quality

---

## 🖥️ Backend (API Server)

(Add a summary of your backend here. Example:)
- Located in the `backend/` directory.
- Built with Node.js, Express, and TypeScript.
- Handles authentication, data APIs, and business logic.

> _If you do not have a backend yet, you can remove or update this section._

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/himalay-goswami/huddl.git
   cd huddl
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or, if using separate frontend/backend:
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. **Start the development servers:**
   - Frontend:
     ```sh
     cd frontend
     npm run dev
     ```
   - Backend (if present):
     ```sh
     cd backend
     npm run dev
     ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) for the frontend app.

---

## 🤝 Contributing

1. Fork the repo and create a new branch.
2. Make your changes and add tests if needed.
3. Run lint and build checks to ensure code quality.
4. Submit a pull request.

---

## 📄 License

MIT
