# Health Tech Solutions - Backend API Assignment

Welcome to the backend submission for the Health Tech Solutions technical assignment. This project is a **RESTful API built with NestJS**, designed to manage operational tasks in a health-tech context (e.g., patient intake, equipment maintenance).

It demonstrates a modular architecture, strict input validation, and automated documentation.

##  Quick Start Guide

Follow these steps to get the application running on your local machine.

### 1. Prerequisites

Ensure you have the following installed:

* **Node.js** (v16 or higher)
* **npm** (Node Package Manager)
* **PostgreSQL** (Automatically Setup on Railway)

### 2. Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/DerrickNgigi/health-tech-backend.git
cd health-tech-backend

# Install NPM dependencies
npm install

```

### 3. Configuration (.env)

> **Note:** The application `.env` file is part of the repo. While strictly not advisable in a production environment, it has been made available here for ease of assessment.

### 4. Running the Application

Start the development server:

```bash
# Start in development mode (with hot-reload)
npm run start:dev

```

*You should see logs indicating the application has started and the database connection is initialized.*

---

## API Documentation (Swagger)

To make testing easy, I have integrated **Swagger UI**. You do not need Postman; you can test all endpoints directly in your browser.

1. Ensure the server is running.
2. Open your browser to: **[http://localhost:3333/api/docs](https://www.google.com/search?q=http://localhost:3333/api/docs)**

> **Online Demo:** An online version has been made available for ease of assessment here: [INSERT_LINK_HERE]

### Core Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/tasks` | List all health tasks. |
| `POST` | `/api/tasks` | Create a new task (requires Title & Description). |
| `PATCH` | `/api/tasks/{id}` | Update task status or details. |
| `DELETE` | `/api/tasks/{id}` | Remove a task. |

---

## Code Structure & Architecture

The project follows the standard **NestJS Modular Architecture**, ensuring separation of concerns and scalability.

```text
src/
├── app.module.ts           # Root Module: Configures Database & Env variables
├── main.ts                 # Entry Point: Sets up Swagger, CORS, & Global Validation
│
└── tasks/                  # THE CORE MODULE (Domain Logic)
    ├── tasks.module.ts     # Bundles the controller, service, and entity
    ├── tasks.controller.ts # API Layer: Handles HTTP requests & Swagger tags
    ├── tasks.service.ts    # Business Logic: Handles Database interactions
    │
    ├── entities/
    │   └── task.entity.ts  # Database Schema: Defines the 'Task' table structure
    │
    └── dto/                # Data Transfer Objects (Validation Layer)
        ├── create-task.dto.ts # Validates input for creating tasks (Rules: NotEmpty, String)
        └── update-task.dto.ts # Validates input for updating tasks

```

---

##  Key Design Decisions

* **TypeORM:** Used for database interactions to provide a strongly-typed schema and easy migration paths.
* **DTOs (Data Transfer Objects):** Used alongside `class-validator` to strictly enforce input correctness (e.g., ensuring a Title is provided) before data reaches the logic layer.
* **Dependency Injection:** Services are injected into Controllers, making the code testable and modular.
* **UUIDs:** The database uses UUIDs for the primary key (`id`) instead of integers for better security and scalability.

---

## Tech Stack

* **Framework:** NestJS (Node.js)
* **Language:** TypeScript
* **Database:** PostgreSQL
* **ORM:** TypeORM
* **Validation:** class-validator
* **Docs:** Swagger (OpenAPI)

---

##  Testing

To run the unit tests included with NestJS:

```bash
npm run test

```

---

*Submitted for the Health Tech Solutions Practical Assignment.*

---