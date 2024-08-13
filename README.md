# 📊 Presentation Platform

**Presentation Platform** is a web-based application designed to manage and organize presentations, including the creation, modification, and deletion of slides. The platform leverages a RESTful API built with Node.js, Express.js, and MongoDB to provide a robust and scalable solution for handling presentation data.

## 🚀 Features

- **Create Presentations**: Easily create new presentations by specifying a title, list of authors, and an array of slides.
- **Manage Slides**: Add, update, or delete slides within a presentation to ensure your content is always up-to-date.
- **View Presentations**: Retrieve presentations by title or list all available presentations in the database.
- **Update Authors**: Modify the list of authors associated with a presentation.
- **Cross-Origin Resource Sharing (CORS)**: Enables secure requests from different origins, making the platform accessible from multiple web clients.

## 🛠️ Tech Stack

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building the backend server.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MongoDB**: A NoSQL database program that uses JSON-like documents with optional schemas, used for storing presentation data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, used to interact with the MongoDB database in a more structured way.

## 🚀 Getting Started

### Prerequisites

- **Node.js** and **npm**: Ensure you have Node.js and npm installed on your machine.
- **MongoDB Atlas Account**: You will need a MongoDB Atlas account or a locally running MongoDB instance.
- **Postman**: For testing API endpoints.

### Installation and Setup

To run this project:

1. **Download the project files**: Clone the repository or download the project as a ZIP file.
2. **Import project files into a code editor**: Open the project folder in your preferred code editor (e.g., VS Code).
3. **Import the Postman collection**: Import the `Presentation Platform.postman_collection.json` file into Postman to easily test the API endpoints.
4. **Install dependencies**: In the terminal, navigate to the project directory and run:
   ```bash
   npm install
   ```
5. **Start the server**: Run the following command in the terminal:
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000`.

## 🌐 API Endpoints

- **GET /presentations**: Retrieve all presentations.
- **GET /presentations/:title**: Retrieve a specific presentation by title.
- **POST /presentations**: Create a new presentation.
- **PUT /presentations/slides/:title**: Add a new slide to a presentation.
- **PATCH /presentations/slides/**: Update an existing slide.
- **PATCH /presentations/:title/authors**: Update the authors list of a presentation.
- **DELETE /presentations/slides/:slideId**: Delete a specific slide from a presentation.
- **DELETE /presentations/:title**: Delete a specific presentation by title.
