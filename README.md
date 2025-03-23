# TEKO MERN Project

Ein Fullstack-Projekt basierend auf dem **MERN-Stack** (MongoDB, Express, React, Node.js) mit Authentifizierung, Task-Management, Filterung, Rollenberechtigungen und moderner UI.

---

## 📁 Ordnerstruktur

- Server: Root Verzeichnis
- React App: /client

## 🚀 Features

### Frontend (React)

- ⚛️ React mit functional components & Hooks
- 📦 Zustand über React Context + React Query
- 🔐 Login, Registrierung und Rollensteuerung (z. B. Admin)
- 📄 Task-Management:
  - Erstellen, Bearbeiten, Löschen
  - Als **erledigt markieren** ("done")
  - Filterung nach Status, Typ, Datum, Suche
- 🌍 Routing mit React Router v6 (loader/actions, nested layouts)
- 🎨 Icons via `react-icons`, Datum via `dayjs`
- ☁️ File Upload mit Cloudinary möglich (wenn aktiviert)

### Backend (Node.js + Express)

- 🌐 RESTful API mit Express
- 🔒 Authentifizierung mit JWT (Login, Register, Protected Routes)
- 💾 MongoDB mit Mongoose
- 📂 File Upload mit Cloudinary (Image Hosting)
- 🛡 Validierung & Error Handling
- ⚙ Pagination, Filtering, Sorting

---

## 🛠 .env-Konfiguration

Erstelle eine `.env`-Datei im `/server`-Verzeichnis mit folgendem Inhalt:

```env
NODE_ENV=development
PORT=5000
MONGO_URL=your-mongo-connection-string
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=1d

# Optional: Cloudinary API Keys
CLOUD_NAME=your-cloudinary-cloud-name
CLOUD_API_KEY=your-api-key
CLOUD_API_SECRET=your-api-secret
```

### 🔧 Backend

| Paket                    | Beschreibung                                    |
| ------------------------ | ----------------------------------------------- |
| `bcryptjs`               | Zum sicheren Hashen von Passwörtern             |
| `cloudinary`             | Integration für Bild-/Dateiuploads in die Cloud |
| `concurrently`           | Startet Client und Server gleichzeitig          |
| `cookie-parser`          | Liest Cookies (z. B. für Authentifizierung)     |
| `datauri`                | Konvertiert Dateien in Data-URIs für Uploads    |
| `dotenv`                 | Liest `.env`-Dateien mit Umgebungsvariablen     |
| `express-async-errors`   | Fehlerhandling bei async-Funktionen             |
| `express-mongo-sanitize` | Schutz vor NoSQL-Injection                      |
| `express-rate-limit`     | Limitiert Anfragen zur API                      |
| `express-validator`      | Validiert Daten in Requests                     |
| `helmet`                 | Fügt Sicherheitsheader hinzu                    |
| `http-status-codes`      | Standardisierte HTTP-Status-Codes               |
| `jsonwebtoken`           | JWT-basierte Authentifizierung                  |
| `mongoose`               | MongoDB ODM für Models                          |
| `morgan`                 | HTTP-Logger für Requests                        |
| `multer`                 | Middleware für Datei-Uploads                    |
| `nanoid`                 | Erzeugt kurze, eindeutige IDs                   |
| `nodemon`                | Watcher für Backend-Entwicklung                 |

### 🎨 Frontend

| Paket                            | Beschreibung                                      |
| -------------------------------- | ------------------------------------------------- |
| `@tanstack/react-query`          | Server State Management und Caching               |
| `@tanstack/react-query-devtools` | DevTools zur Visualisierung von React Query       |
| `axios`                          | HTTP-Client für API-Requests                      |
| `dayjs`                          | Leichtgewichtige Date Library                     |
| `react-icons`                    | Sammlung beliebter Icon-Sets                      |
| `react-router-dom`               | Routing inkl. Loaders und Actions (v6.4+)         |
| `react-toastify`                 | Toaster für Erfolg-/Fehlermeldungen               |
| `recharts`                       | Reaktive Charts für Statistiken                   |
| `styled-components`              | CSS-in-JS Lösung für komponentenbasiertes Styling |
