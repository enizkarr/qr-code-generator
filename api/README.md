SERVER
This is the readme file for the server-side backend of your application, which utilizes Node.js, Express, and MongoDB Atlas. The backend server handles the logic and API endpoints for your web application. This document provides an overview of the backend server, installation instructions, and other relevant information.

Technology Stack
The backend server is built using the following technologies:

Node.js: A JavaScript runtime environment that allows you to execute JavaScript code outside of a web browser.
Express: A fast and minimalist web application framework for Node.js that simplifies the process of building robust APIs.
MongoDB Atlas: A cloud version of MongoDB that doesn't require installation which is simple and easy to use.

Project Structure
The backend server follows a typical project structure to ensure modularity and maintainability. Here's an overview of the main directories and files:

.babel, .env, nodemon.json which contain necessary configurations. 
index.js: The entry point of the server application, which initializes and starts the server.
app.js: The main application file that sets up the Express server, middleware, and routes.
routes/: This directory contains route files that define the API endpoints and their corresponding handlers.
controllers/: This directory contains controller files that handle the business logic for each API endpoint.
models/: This directory houses the database models or schemas defined using a library like Mongoose.
config/: This directory includes configuration files for managing environment variables, database connections, etc.
Feel free to modify the project structure as per your needs and preferences.

API Endpoints
Each route follows RESTful principles and perform appropriate CRUD operations on the MongoDB database using the models defined in the models/ directory. It uses simple routes like: /, /qrcode and /qrcode:id

Libraries:
The app uses some libraries like: CORS, bodyparser, helmet, express, dotenv, lodash, mongoose, qrcode.