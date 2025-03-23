# TEKO MERN Project

Ein Fullstack-Projekt basierend auf dem **MERN-Stack** (MongoDB, Express, React, Node.js) mit Authentifizierung, Task-Management, Filterung, Rollenberechtigungen und moderner UI.

## 📁 Ordnerstruktur

---

## 🚀 Features

### Frontend (React)

- ⚛️ React mit functional components & Hooks
- 📦 Zustand über React Context + React Query
- 🔐 Login, Registrierung und Rollensteuerung (z. B. Admin)
- 📄 Task-Management:
  - Erstellen, Bearbeiten, Löschen
  - Als **erledigt markieren** ("done")
  - Filterung nach Status, Typ, Datum, Suche
- 🌍 Routing mit React Router v6 (nested layouts, loader, actions)
- 🎨 Icons via `react-icons`, Datum via `dayjs`
- ☁️ File Upload mit Cloudinary möglich (wenn integriert)

### Backend (Node.js + Express)

- 🌐 RESTful API mit Express
- 🔒 Authentifizierung mit JWT (Login, Register, Protected Routes)
- 💾 MongoDB mit Mongoose
- 📂 File Upload mit Cloudinary (Image Hosting)
- 🛡 Validierung & Error Handling
- ⚙ Pagination, Filtering, Sorting

---

## 🛠 .env-Konfiguration

Erstelle eine `.env`-Datei im **`/server`-Verzeichnis**:

```env
NODE_ENV=development
PORT=5000
MONGO_URL=your-mongo-connection-string
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=1d

# Optional: Cloudinary API Keys (falls Image-Upload verwendet wird)
CLOUD_NAME=your-cloudinary-cloud-name
CLOUD_API_KEY=your-api-key
CLOUD_API_SECRET=your-api-secret
```
