# OH EHR Viewer

A full-stack healthcare application that simulates an Ontario Health style Electronic Health Record (EHR) viewer using FHIR standards, modern web technologies, containerized infrastructure, persistent PostgreSQL storage, and automated CI pipelines.

Note: No real patient information is included in this repository.


## Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Backend Dependency](#-backend-dependency)
- [Project Context](#-project-context)
- [Authentication](#-authentication)
- [Sample Data](#-sample-data)
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

## Backend Dependency

This project integrates with the HAPI FHIR JPA Starter project as the backend FHIR server implementation.

The HAPI FHIR backend is maintained separately and must be cloned alongside this repository:

```bash
git clone https://github.com/hapifhir/hapi-fhir-jpaserver-starter.git
```

Expected directory structure:

```text
OH_EHR
├── mock-ehr-viewer (this repo)
└── hapi-fhir-jpaserver-starter (backend dependency)
```

The provided Docker Compose configuration will:

- Build the React frontend
- Build the HAPI FHIR backend
- Start PostgreSQL
- Configure persistent storage using Docker volumes

## Project Context

This project was developed as a proof-of-concept during a co-op placement at Ontario Health.

The objective of the project was to explore healthcare interoperability, FHIR-based data exchange, containerized application deployment, persistent data storage, CI/CD automation, and cloud deployment concepts.

This repository represents a development snapshot of the application prior to enterprise deployment and cloud/operational integration activities.

Permission was granted to publicly maintain and display this repository for educational, portfolio, and professional development purposes.

## Authentication

Authentication is implemented using Okta and was configured using a personal Okta developer tenant during development.

Developers wishing to run the application with authentication enabled will need to configure their own Okta developer tenant and update the application configuration accordingly.

## Sample Data

This project does not contain real patient information.

Patient resources, laboratory results, diagnostic imaging studies, and demographic records are intended to be loaded through the HAPI FHIR server using standard FHIR resources and APIs.

For demonstration purposes, users may populate the backend with sample FHIR resources such as:

- Patient
- Observation
- DiagnosticReport
- ImagingStudy

The application was designed to demonstrate retrieval and visualization of healthcare data rather than provide a production-ready patient management platform.

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

Ensure both repositories are present:

```text
OH_EHR
├── mock-ehr-viewer (this repo)
└── hapi-fhir-jpaserver-starter (backend dependency)
```

From the `mock-ehr-viewer` root folder:

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
├── mock-ehr-viewer
|   ├── .github
│   ├── src
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── nginx.conf
│   └── package.json
│
└── hapi-fhir-jpaserver-starter
```