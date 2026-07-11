# Online Code Collaboration and Execution Platform

A real-time collaborative coding platform built with the MERN Stack, Socket.IO, and MongoDB.

## 📖 Project Description

The Online Code Collaboration and Execution Platform is a MERN stack web application that allows multiple users to collaborate on coding projects in real time. The platform aims to provide a shared coding environment where users can write code together, communicate efficiently, and execute programs from a single interface.

This project is being developed as part of a software development internship to demonstrate full-stack web development practices and real-time collaboration using the MERN Stack. Currently, the initial project setup and development environment have been completed, while the core application features will be implemented in upcoming phases.

## ❓ Problem Statement

Developers, students, and instructors often need to collaborate on coding tasks remotely. Existing methods such as screen sharing or exchanging code files are inefficient for real-time collaboration. This project aims to solve that problem by providing a single platform where users can write, edit, and execute code together in real time.

## 🎯 Target Users

- Students
- Software Developers
- Coding Interview Candidates
- Recruiters
- Instructors and Mentors
- Development Teams

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React.js (Vite), Tailwind CSS, React Router DOM, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Real-time | Socket.IO |
| Authentication | Planned (JWT, bcrypt) |
| Dev Tooling | nodemon, concurrently, dotenv, cors |

---

## 📂 Project Structure

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


## 📋 Prerequisites

- Node.js v18+ and npm
- MongoDB running locally, or a MongoDB Atlas connection string
- Git

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/r75605997-droid/Online-Code-Collaboration-and-Execution-Platform.git
cd Online-Code-Collaboration-and-Execution-Platform
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

- Visit http://localhost:5173 — you should see the responsive landing page with Login and Register screens.

- Visit `http://localhost:5000/api/health` — you should get:

```json
{
  "success": true,
  "message": "Server is up and running",
  "timestamp": "..."
}
```

---

## 📡 API Endpoint

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health | Returns the server health status |

## 📝 Design Decisions

- **Monorepo with two independent `package.json` files** (`backend/`, `frontend/`) plus a thin root `package.json` that only holds `concurrently` — keeps each app's dependency tree isolated while allowing single-command startup.
- **Socket.IO is attached to the raw `http.Server`**, not directly to the Express app, so both HTTP routes and WebSocket connections can share port 5000.
- **The project structure is designed for scalability**, making it easier to integrate authentication, user management, and additional features in future development phases.
- **Tailwind v4** uses the `@tailwindcss/postcss` PostCSS plugin (no `tailwind.config.js` needed for basic setup) — styling is driven by a single `@import "tailwindcss";` in `index.css`.
- **Centralized Axios instance and Socket.IO client** in `services/` mean components never instantiate their own HTTP/socket connections.

---

## ✨ Current Features

- MERN project setup
- MongoDB integration
- Socket.IO setup
- Health Check API
- Organized folder structure
- Git & GitHub integration
- Environment variable configuration
Responsive Landing Page
Login Page UI
Registration Page UI
React Router Navigation
Vercel Deployment

---

## 🚀 Planned Features

- User Authentication
- Landing Page
- Dashboard
- Real-time Code Editor
- Code Execution
- Chat System
- Collaboration Rooms
- User Profile
- Judge0 API Integration
- Docker Support

---

## 🚧 Project Status

**Current Status:** Development Phase (Initial Setup Completed)

### Completed
- MERN project setup
- MongoDB connection
- Socket.IO integration
- Project folder structure
- Git & GitHub setup
- Development environment configuration

### Upcoming
- User Authentication
- Landing Page
- Dashboard
- Real-time Code Editor
- Code Execution
- Chat System

---

## 📌 Next Development Phases

1. Authentication (register/login, protected routes, JWT issuing)
2. Room creation and real-time collaborative editing (Socket.IO events, operational transforms or CRDT)
3. Code execution engine (sandboxed runner, language support)
4. Persistence of code sessions/history to MongoDB
5. Deployment configuration (CI/CD, environment separation)

---


## 🔄 Workflow

1. User signs up or logs in.
2. User accesses the dashboard.
3. Creates or joins a coding room.
4. Selects a programming language.
5. Writes code collaboratively.
6. Executes code.
7. Views output or errors.
8. Chats with team members.
9. Saves the project.
10. Logs out.

---

## 🗄 Database Entities

- Users
- Roles
- Profiles
- Rooms
- Participants
- Projects
- Files
- Executions
- Languages
- Chat Messages
- Invitations
- Permissions
- Session History
- Notifications
- Audit Logs

---
## 🔒 Planned Security Features

- JWT Authentication
- Password Encryption (bcrypt)
- OAuth Login
- Docker-based Sandbox Execution
- Role-Based Authorization
- Secure API Endpoints
- Protected Routes

---

## 💡 Applications

This platform can be used for:

- Online Coding Interviews
- Coding Bootcamps
- Programming Classes
- Team Projects
- Hackathons
- Competitive Programming Practice
- Remote Software Development

---

## 📈 Future Scope

The platform can be expanded by integrating AI-powered coding assistance, cloud-based project storage, collaborative whiteboards, advanced analytics, interview recording, GitHub synchronization, and mobile application support.

---

## 👩‍💻 Developer

**Rashi**

GitHub Profile: [r75605997-droid](https://github.com/r75605997-droid)

Project Repository: [Online Code Collaboration and Execution Platform](https://github.com/r75605997-droid/Online-Code-Collaboration-and-Execution-Platform)

---

## 📄 License

This project is developed for educational purposes. It can be modified and extended for learning and research.

---

## ⭐ Project Goal

The goal of this project is to build a secure, scalable, and user-friendly online platform where users can collaborate on code in real time, execute programs safely, and improve teamwork through an integrated coding environment.

