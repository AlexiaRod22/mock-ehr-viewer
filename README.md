# OH EHR Viewer

A full-stack healthcare application that simulates an Ontario Health style Electronic Health Record (EHR) viewer using FHIR standards, modern web technologies, containerized infrastructure, and automated CI pipelines.


## Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Development Setup](#development-setup)
  - [Full Application Startup](#full-application-startup)
- [Application Flow](#-application-flow)
- [CI Pipeline](#-ci-pipeline)
- [Project Structure](#-project-structure)

## Features

### Authentication

- Secure user authentication using Okta
- Protected application routes
- Login callback handling

### Patient Search

- Search patients using Health Card Numbers
- Fetch patient demographics through FHIR APIs
- Display patient information in a clinical dashboard layout

### OLIS Integration

- Display laboratory test results

### DICS Integration

- Display diagnostic imaging studies information

### PCR View

- Display patient demographic information

### Containerized Deployment

- Frontend containerized using Docker and nginx
- Backend containerized using HAPI FHIR
- PostgreSQL database container
- Single-command application startup using Docker Compose

### Continuous Integration

- Automatic ESLint validation
- Automatic React build verification
- Automatic Docker image build verification
- Automatic artifact generation through GitHub Actions



## Architecture

Detailed architecture documentation can be found in:

- `ARCHITECTURE.md`

### High Level Architecture

```text
Browser
   │
   ▼
nginx
   │
   ▼
React UI
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



## Tech Stack

### Frontend

- React
- Vite
- React Router
- Bootstrap
- Okta Authentication

### Backend

- HAPI FHIR
- FHIR R4
- Spring Boot

### Database

- PostgreSQL

### Infrastructure

- Docker
- Docker Compose
- nginx

### DevOps

- Git
- GitHub
- GitHub Actions



## Getting Started

### Prerequisites

Install the following software:

- Node.js (v22+ recommended)
- npm
- Docker Desktop
- Git


### Development Setup

Clone the repository:

```bash
git clone https://github.com/AlexiaRod22/mock-ehr-viewer.git
```

Navigate into the project:

```bash
cd mock-ehr-viewer
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

Application URL:

```text
http://localhost:5173
```


### Full Application Startup

The complete application stack is started from the OH_EHR root directory.

```bash
docker compose up --build
```

This starts:
- React Frontend Container
- HAPI FHIR Server Container
- PostgreSQL Container

Frontend URL:

```text
http://localhost:3000
```

FHIR Metadata Endpoint:

```text
http://localhost:8080/fhir/metadata
```

Stop all services:

```bash
docker compose down
```



## Application Flow

### Patient Search Example

```text
User enters Health Card Number
                │
                ▼
React sends FHIR request
                │
                ▼
HAPI FHIR validates request
                │
                ▼
PostgreSQL retrieves data
                │
                ▼
FHIR response returned
                │
                ▼
Patient information displayed
```

### Data Persistence

Patient data is persisted using PostgreSQL and Docker Volumes.

```text
HAPI FHIR
     │
     ▼
PostgreSQL
     │
     ▼
Docker Volume
```

Because data is stored inside a Docker Volume, patient records remain available even after containers are stopped and recreated.



## CI Pipeline

GitHub Actions automatically validates the application on every push to the `main` branch.

### Current Pipeline

```text
ESLint Validation
        │
        ▼
React Build Verification
        │
        ▼
Docker Image Build Verification
        │
        ▼
React Build Artifact Upload
```

### Validations Performed

#### ESLint

Verifies:

```bash
npm run lint
```

results in no errors, and if there are any warnings, to display them in github but proceed with the other jobs.

#### React Build

Verifies:

```bash
npm run build
```

completes successfully.

#### Docker Build

Verifies:

```bash
docker build .
```

creates a valid Docker image.

#### Artifact Upload

Stores the generated:

```text
dist/
```

build output as a downloadable GitHub Actions artifact.



## Project Structure

```text
OH_EHR
│
├── docker-compose.yml
│
├── mock-ehr-viewer
|   ├── .github
│   ├── src
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
│
└── hapi-fhir-jpaserver-starter
```