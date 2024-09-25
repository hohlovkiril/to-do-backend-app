# To-Do Backend App

This project is a simple **To-Do Backend App** built using the [NestJS](https://nestjs.com/) framework. The API allows users to manage their tasks by creating, reading, updating, and deleting (CRUD) to-do items.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)

## Features

- **Create a task**: Add a new to-do item to your list.
- **Retrieve tasks**: Get the list of all tasks.
- **Update tasks**: Edit the details of an existing task (e.g., description, status).
- **Delete tasks**: Remove a task from the list.
- **Mark tasks as completed**: Set the status of a task to completed.
- **Error handling**: Basic validation and error messages for invalid requests.

## Technologies

- [NestJS](https://nestjs.com/) - Node.js framework for building efficient and scalable server-side applications.
- [TypeORM](https://typeorm.io/) - ORM for managing database interactions.
- [PostgreSQL](https://www.postgresql.org/) - Relational database.
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed JavaScript.
- [Swagger](https://swagger.io/) - OpenAPI documentation.

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- PostgreSQL database

### Steps

1. Clone the repository:

```bash
git clone https://github.com/hohlovkiril/to-do-backend-app
cd to-do-backend-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Rename `.env.example` to `.env` and configure the database and other required environment variables.

```bash
NEST_HOST="localhost"
NEST_PORT=3000
POSTGRES_HOST="localhost"
POSTGRES_PORT=5432
POSTGRES_USER="your_username"
POSTGRES_PASS="your_password"
POSTGRES_NAME="todo_db"
```

4. Run the database migrations (if using TypeORM migrations):

```bash
npm run typeorm migration:run
```

## Running the Application

### Development

To run the app in development mode with hot-reloading, use the following command:

```bash
npm run start:dev
```

### Production

To build and run the application in production mode:

```bash
npm run build
npm run start:prod
```

### Example Task object

```js
{
  id: 1,
  content: "Base task content",
  status: 0,
  list: 1
}
```