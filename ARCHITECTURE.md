# OH EHR Viewer Architecture

## Overview

OH EHR Viewer is a proof-of-concept healthcare application developed during a co-op placement at Ontario Health.

The application simulates an Electronic Health Record (EHR) viewer and demonstrates:

- FHIR interoperability
- Okta authentication
- React-based healthcare user interfaces
- PostgreSQL persistence through HAPI FHIR
- Containerized deployment using Docker
- Continuous Integration using GitHub Actions

This repository represents a development snapshot of the application prior to enterprise deployment and cloud integration activities.

---

## High-Level Architecture

```text
Browser
   │
   ▼
nginx
   │
   ▼
React Application
   │
   ▼
HAPI FHIR Server
   │
   ▼
PostgreSQL
   │
   ▼
Docker Volume
```

---

## Request Flow

```text
User
 │
 ▼
Okta Authentication
 │
 ▼
Patient Search
 │
 ▼
FHIR API Request
 │
 ▼
HAPI FHIR Server
 │
 ▼
PostgreSQL
 │
 ▼
FHIR Response
 │
 ▼
React UI
```

---

## Project Structure

```text
mock-ehr-viewer
│
├── .github/
│   └── workflows/
│
├── src/
│   ├── components/
│   ├── mockData/
│   ├── services/
│   ├── styles/
│   └── utils/
│
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── README.md
├── ARCHITECTURE.md
├── oktaAuth.js
└── oktaConfig.js
```

---

## Core Components

### React Frontend

Responsible for:

- User authentication
- Clinical dashboard rendering
- Patient search
- OLIS data presentation
- DICS data presentation
- PCR data presentation

Technologies:

- React
- React Router
- Bootstrap
- Vite

---

### Okta Authentication

Provides:

- User authentication
- Protected routes
- Login callback handling
- Session management

Current implementation uses a personal Okta Developer tenant for demonstration purposes.

---

### HAPI FHIR Server

Provides the backend FHIR API.

Responsibilities:

- Patient resource management
- Observation resource management
- Diagnostic report storage
- Imaging study storage
- FHIR search operations
- Resource validation

Technologies:

- HAPI FHIR
- Spring Boot
- FHIR R4

---

### PostgreSQL

Provides persistent storage for:

- Patient resources
- Observation resources
- Diagnostic reports
- Imaging studies

Data is retained using Docker-managed volumes.

---

## Frontend Architecture

### Components

Contains page and UI components including:

- Dashboard
- Login
- Sidebar navigation
- OLIS views
- DICS views
- PCR views
- Patient cards

### Services

Provides API abstraction for:

- FHIR requests
- Patient retrieval
- OLIS retrieval
- DICS retrieval

### Mock Data

Contains sample development data used during UI development and testing.

### Utilities

Contains reusable frontend helper functions.

---

## Infrastructure

### Docker Compose

Coordinates:

- React Frontend Container
- HAPI FHIR Container
- PostgreSQL Container

### nginx

Serves the React production build and supports client-side routing.

### Docker Volume

Persists PostgreSQL data across container restarts.

---

## CI Pipeline

GitHub Actions validates all pushes to the main branch.

```text
ESLint
  │
  ▼
React Build
  │
  ▼
Docker Build
  │
  ▼
Artifact Upload
```

Checks include:

- Lint validation
- Production build validation
- Docker image validation

---

## External Dependencies

### HAPI FHIR JPA Starter

Backend FHIR implementation.

Repository:

https://github.com/hapifhir/hapi-fhir-jpaserver-starter

### Okta

Identity and authentication provider used for secure login.

### PostgreSQL

Persistent relational database used by HAPI FHIR.

---

## Project Scope

This repository is intended to demonstrate healthcare application architecture, FHIR integration, authentication, containerization, and CI practices.

It intentionally represents the application before enterprise deployment, cloud infrastructure integration, monitoring, and operational enhancements.