# Web Server Layer TS App

A simple layered Node.js + TypeScript application using **Express**, **Sequelize**, and **SQLite**.  
This project demonstrates a clean architecture with separation of concerns across **Controller**, **Service**, **Repository**, and **Model** layers.

---

## Features

- RESTful API built with Express
- TypeScript with decorators (`sequelize-typescript`)
- SQLite for local persistence
- Layered architecture:
  - `controllers/` — API endpoints
  - `services/` — business logic
  - `repositories/` — database interaction
  - `models/` — ORM entities
  - `dtos/` — data transfer objects
- Auto-sync database schema with Sequelize

---

## ⚙️ Installation & Setup

### 1. Clone the repository
`git clone https://github.com/<your-username>/web-server-layer-ts-app.git `  
`cd web-server-layer-ts-app`

### 2. Install dependencies
  - `npm install`

### 3. Install dependencies
  - `npm run dev`
