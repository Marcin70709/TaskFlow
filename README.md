askFlow — Task Management Application

A web application for managing tasks, built with JavaScript, Node.js, and Express.js.

Features

Display a list of tasks

Add new tasks

Update existing tasks

Delete tasks

REST API for communication between frontend and backend

Client-side routing using window.location.hash

Automated API tests using Jest and Supertest

Technologies

JavaScript

Node.js

Express.js

HTML5 and CSS3

REST API

Jest

Supertest

Project Structure

TaskFlow/
├── Backend/
│   ├── controllers/
│   ├── routes/
│   ├── tests/
│   ├── app.js
│   ├── server.js
│   └── package.json
├── Frontend/
│   ├── app.js
│   ├── index.html
│   ├── router.js
│   └── style.css
├── .gitignore
└── README.md

REST API

Method

Endpoint

Description

GET

/api/tasks

Retrieve tasks

POST

/api/tasks

Create a task

PUT

/api/tasks/:id

Update a task

DELETE

/api/tasks/:id

Delete a task

Automated Tests

The backend uses Jest and Supertest to test REST API endpoints.

Run the tests from the Backend directory:

npm test

Getting Started

Requirements

Node.js and npm

Installation

Open a terminal in the Backend directory and run:

npm install
npm start

Open the application in your browser at:

http://localhost:3000

The frontend is served by the Express.js server.

Purpose

This project demonstrates REST API development, frontend–backend communication, basic task management operations, and automated testing.