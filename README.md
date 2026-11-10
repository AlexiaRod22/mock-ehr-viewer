# OH EHR Viewer

A full-stack healthcare application that simulates an Ontario Health style Electronic Health Record (EHR) viewer.

The application allows authenticated users to:

- Search patients
- View laboratory results (OLIS)
- View diagnostic imaging studies (DICS)
- View pateint demographics (PCR)
- Navigate a clinical dashboard

The system is built using React, HAPI FHIR, PostgreSQL, Docker, and Docker Compose.

---

## Architecture

Detailed architecture documentation can be found in:

- ARCHITECTURE.md

---

## Technologies

Frontend

- React
- Vite
- React Router
- Bootstrap
- Okta Authentication

Backend

- HAPI FHIR
- FHIR R4
- Spring Boot

Database

- PostgreSQL

Infrastructure

- Docker
- Docker Compose
- nginx

---

## Application Architecture

Browser --> React UI --> HAPI FHIR API --> PostgreSQL --> Docker Volume

---

## Development Startup

### Local Development
Frontend Development Server

```bash
npm install
npm run dev
```
Frontend URL: http://localhost:5173


### Full Application Startup

From the OH_EHR root folder:

```bash
docker compose up --build

```
Frontend: http://localhost:3000

FHIR Metadata Endpoint: http://localhost:8080/fhir/metadata

Project Structure
```text
OH_EHR
|
│─ docker-compose.yml
│
├── mock-ehr-viewer
│ ├── src
│ ├── Dockerfile
│ ├── nginx.conf
│ └── package.json
│
└── hapi-fhir-jpaserver-starter
```