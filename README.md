# Online Code Collaboration and Execution Platform

A MERN-stack web application for real-time collaborative coding, with Socket.IO wired in for future live-editing features.

> **Status:** Project Setup phase only. No feature logic (auth, editor, code execution) has been implemented yet — this repository establishes the architecture, tooling, and conventions the rest of the project will build on.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js (Vite), Tailwind CSS, React Router DOM, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Real-time | Socket.IO |
| Auth (scaffolded) | bcrypt, jsonwebtoken |
| Dev Tooling | nodemon, concurrently, dotenv, cors |

---

## Project Structure

```
online-code-collab-platform/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js               # MongoDB connection logic
│   │   ├── controllers/            # Route handler logic (empty — future phases)
│   │   ├── middleware/
│   │   │   ├── auth.js             # JWT verification middleware
│   │   │   └── errorHandler.js     # Centralized 404 + error handler
│   │   ├── models/
│   │   │   └── User.model.js       # Mongoose User schema (scaffolded)
│   │   ├── routes/
│   │   │   └── health.routes.js    # GET /api/health
│   │   ├── sockets/
│   │   │   └── index.js            # Socket.IO connection handler
│   │   └── app.js                  # Express app config (middleware, routes)
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js                   # Entry point: HTTP server + Socket.IO + Express
│
├── frontend/
│   ├── src/
│   │   ├── components/             # Reusable UI components (empty — future phases)
│   │   ├── context/                # React context providers (empty — future phases)
│   │   ├── hooks/                  # Custom hooks (empty — future phases)
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx       # Centralized React Router routes
│   │   ├── services/
│   │   │   ├── api.js              # Axios instance with interceptors
│   │   │   └── socket.js           # Socket.IO client singleton
│   │   ├── utils/                  # Helper functions (empty — future phases)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css               # Tailwind entry point
│   ├── .env.example
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   └── vite.config.js
│
├── .gitignore
├── package.json                    # Root scripts (concurrently runner)
└── README.md
```

---

## Prerequisites

- Node.js v18+ and npm
- MongoDB running locally, or a MongoDB Atlas connection string
- Git

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd online-code-collab-platform
```

### 2. Install dependencies (root, backend, and frontend)

```bash
npm run install:all
```

### 3. Configure environment variables

**Backend** — copy the example file and fill in real values:

```bash
cp backend/.env.example backend/.env
```

```
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/code-collab-platform
JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
```

**Frontend** — copy the example file:

```bash
cp frontend/.env.example frontend/.env
```

```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

### 4. Run the app in development

From the project root, this starts **both** backend and frontend concurrently:

```bash
npm run dev
```

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:5173`

Or run them individually:

```bash
npm run backend   # nodemon server on :5000
npm run frontend  # Vite dev server on :5173
```

### 5. Verify the setup

- Visit `http://localhost:5173` — you should see the placeholder Home page styled with Tailwind.
- Visit `http://localhost:5000/api/health` — you should get:

```json
{
  "success": true,
  "message": "Server is up and running",
  "timestamp": "..."
}
```

---

## Notes on Design Decisions

- **Monorepo with two independent `package.json` files** (`backend/`, `frontend/`) plus a thin root `package.json` that only holds `concurrently` — keeps each app's dependency tree isolated while allowing single-command startup.
- **Socket.IO is attached to the raw `http.Server`**, not directly to the Express app, so both HTTP routes and WebSocket connections can share port 5000.
- **`User.model.js` and `auth.js` middleware are scaffolded but unused** — they exist so the next phase (Authentication) can plug in without restructuring folders.
- **Tailwind v4** uses the `@tailwindcss/postcss` PostCSS plugin (no `tailwind.config.js` needed for basic setup) — styling is driven by a single `@import "tailwindcss";` in `index.css`.
- **Centralized Axios instance and Socket.IO client** in `services/` mean components never instantiate their own HTTP/socket connections.

---

## Next Phases (not part of this setup)

1. Authentication (register/login, protected routes, JWT issuing)
2. Room creation and real-time collaborative editing (Socket.IO events, operational transforms or CRDT)
3. Code execution engine (sandboxed runner, language support)
4. Persistence of code sessions/history to MongoDB
5. Deployment configuration (CI/CD, environment separation)

---

## Version Control

```bash
git init
git add .
git commit -m "chore: initial project setup (MERN + Socket.IO scaffold)"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```
