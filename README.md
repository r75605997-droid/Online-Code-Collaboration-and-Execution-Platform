# Online Code Collaboration and Execution Platform

<<<<<<< HEAD
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
=======
## 📖 Project Overview

The **Online Code Collaboration and Execution Platform** is a web-based application that allows multiple users to collaborate on coding projects in real time. Users can create or join coding rooms, write and edit code together, execute programs securely, and communicate through an integrated chat system.

The platform is designed to simplify collaborative programming by bringing code editing, execution, and communication into a single environment. It is useful for coding interviews, online programming classes, hackathons, team projects, and remote software development.

---

## 🎯 Project Objectives

The primary objectives of this project are:

- Provide real-time collaborative code editing.
- Execute code securely within the browser.
- Support multiple programming languages.
- Enable seamless communication between participants.
- Improve productivity by reducing dependency on multiple tools.
- Create a secure and scalable collaboration platform.

---

## 👥 Target Users

This platform is designed for:

- Students
- Faculty/Instructors
- Software Developers
- Recruiters
- Interview Candidates
- Organizations
- Team Leads
- Administrators

---

## ✨ Key Features

### User Authentication
- Secure registration and login
- Role-based access control
- JWT Authentication
- OAuth Login (Google/GitHub)

### Real-Time Code Collaboration
- Multiple users can edit code simultaneously.
- Instant synchronization of changes.
- Live cursor updates.

### Online Code Execution
- Execute code directly from the browser.
- Support for multiple programming languages.
- Secure execution using Docker containers.

### Collaboration Rooms
- Create public or private coding rooms.
- Invite users via room link or code.
- Manage participant permissions.

### Chat System
- Real-time messaging.
- Team discussion during coding sessions.

### Dashboard
- View recent sessions.
- Access saved projects.
- Join active rooms.

### Save & Resume
- Save projects.
- Resume coding later.

---

## 🚀 Future Enhancements

- Voice Calling
- Video Conferencing
- Screen Sharing
- Whiteboard
- AI Code Suggestions
- AI Debugging Assistant
- Version History
- Code Playback
- GitHub Integration
- Progress Tracking
- Interview Recording
- Leaderboard
- Plagiarism Detection
- Notifications
- Multi-file Project Support

---

## 🛠 Technology Stack

### Frontend
- React.js
- Tailwind CSS
- Monaco Editor

### Backend
- Node.js
- Express.js
- Socket.IO

### Database
- MongoDB
or
- PostgreSQL

### Authentication
- JWT
- OAuth
- bcrypt

### Code Execution
- Docker
- Judge0 API

### Deployment
- Vercel
- Render
- MongoDB Atlas

---

## 📂 Project Structure

```
Online-Code-Collaboration-Execution-Platform
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── assets/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── sockets/
│   ├── config/
│   └── utils/
│
├── docker/
│
├── docs/
│
├── README.md
├── package.json
└── .env
>>>>>>> 0edff30980a252e33288f6db26441f1c800d3258
```

---

<<<<<<< HEAD
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
=======
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

## 🔒 Security Features

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

## 🤝 Contributors

- Project Developer: *Your Name*
- Guide/Mentor: *Faculty Name*

---

## 📄 License

This project is developed for educational purposes. It can be modified and extended for learning and research.

---

## ⭐ Project Goal

The goal of this project is to build a secure, scalable, and user-friendly online platform where users can collaborate on code in real time, execute programs safely, and improve teamwork through an integrated coding environment.
>>>>>>> 0edff30980a252e33288f6db26441f1c800d3258
