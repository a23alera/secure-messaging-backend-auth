# Secure Messaging Backend + Auth

A backend-focused security project built with Node.js and Express.  
The project demonstrates API design, authentication with JWT, protected routes, and a clean backend structure.

## Purpose

The purpose of this project is to build a secure backend system that can be used as a foundation for a messaging application.  
The main focus is backend development, authentication, route protection, and security-related API design.

This project is also created as a portfolio project to show practical experience with backend development and security concepts.

## Tech Stack

- Node.js
- Express.js
- JavaScript
- JWT authentication
- dotenv
- Postman for API testing

## Features

- Express server setup
- Environment variable configuration
- Health check route
- User login route
- JWT token generation
- Protected routes using authentication middleware
- Basic error handling middleware
- Clean folder structure

## Project Structure

```
src/
│
├── app.js
├── server.js
│
├── routes/
│   ├── health.routes.js
│   ├── auth.routes.js
│   └── message.routes.js
│
├── controllers/
│   ├── auth.controller.js
│   └── message.controller.js
│
├── middleware/
│   ├── auth.middleware.js
│   └── error.middleware.js
│
└── config/
    └── env.js
```

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go into the project folder:

```bash
cd secure-messaging-backend-auth
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root folder:

```env
PORT=3000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_here
```

## Run the Project

Start the server:

```bash
npm run dev
```

or:

```bash
npm start
```

The server should run on:

```
http://localhost:3000
```

## API Endpoints

### Health Check

```
GET /api/health
```

Example response:

```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### Login

```
POST /api/auth/login
```

Example body:

```json
{
  "username": "alex",
  "password": "password123"
}
```

Example response:

```json
{
  "message": "Login successful",
  "token": "jwt-token-here"
}
```

### Protected Messages Route

```
GET /api/messages
```

Requires JWT token.

In Postman:

```
Authorization → Bearer Token
```

Example response:

```json
{
  "message": "This is a protected messages route"
}
```

## Authentication Flow

1. User logs in with username and password  
2. Server validates credentials  
3. JWT token is generated  
4. Client sends token in requests  
5. Middleware verifies token  
6. Access granted if valid  

## Security Concepts Used

- JWT-based authentication
- Protected API routes
- Environment variables for secrets
- Middleware-based validation
- Separation of concerns (routes/controllers/middleware)

## Future Improvements

- Add database
- Add user registration
- Hash passwords with bcrypt
- Add refresh tokens
- Add role-based authorization
- Add rate limiting
- Add validation
- Add Docker
- Add tests

## Author

Alex Ranhög  
Computer Science student focused on backend development and security