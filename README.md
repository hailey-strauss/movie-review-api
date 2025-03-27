# Movie Review API

A secure RESTful API for managing movies and user authentication, built with **Express.js**, **MongoDB**, and **JWT authentication**.

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## About

This Movie Review API allows users to:

- Add new movie reviews
- View a list of all movie reviews
- Update existing movie reviews
- Delete movie reviews

The API uses **MongoDB** as the database to store movie details such as the title, genre, release date, director, and review text. It provides a simple way to manage movie reviews using **Express.js**.

## Installation

git clone <your-repo-url>
cd movie-review-api

### Prerequisites

Before you begin, ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (for a cloud-based database)
- [Postman](https://www.postman.com/) (for testing the API)

### Step-by-Step Installation

1. **Clone the Repository**

   - Open your terminal/command prompt and navigate to the folder where you want to store the project.
   - Clone the repository:
     ```bash
     git clone https://github.com/hailey-strauss/movie-review-api.git
     ```
   - Navigate into the project folder:
     ```bash
     cd movie-review-api
     ```

2. **Install Dependencies**

   - Install the necessary packages using `npm`:

     ```bash
     npm install express mongoose dotenv bcrypt jsonwebtoken cors body-parser nodemon

     ```

3. **Set Up Environment Variables**

   - Create a `.env` file in the root directory of your project (same level as `server.js`).
   - Add the following content to your `.env` file:
     ```
     MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/moviereviews?retryWrites=true&w=majority
     JWT_SECRET=your-jwt-secret
     PORT=3000
     ```
   - Replace `<username>`, `<password>`, and `<cluster-url>` with your actual MongoDB Atlas credentials.

4. **Start the Server**
   - Run the following command to start the server:
     ```bash
     npm run dev
     ```
   - The server should now be running on `http://localhost:3000`.

## Usage

Once the server is running, you can use **Postman** or another API client to interact with the API.

### API Endpoints

Here are the available endpoints you can use:
Authentication Routes

## Register a new user

POST /api/auth/register → Register a new user

URL:

```bash
http://localhost:3000/api/auth/register
```

Body:
JSON

```bash
{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
}
```

Response:

```bash
{
    "message": "User registered successfully"
}
```

### Login User

- Method: POST
- URL:

```bash
http://localhost:3000/api/auth/login
```

Body: JSON

```bash
{
    "email": "john@example.com",
    "password": "password123"
}
```

Response:

```bash
{
    "token": "<your-jwt-token>"
}
```

## Movies

GET /api/movies → Get all movies

Authorization: Bearer <jwt_token>
Response:

```bash
{
"_id": "65c2f817b2e4a6b7f7d4b12c",
"title": "Inception",
"genre": "Sci-Fi",
"releaseDate": "2010-07-16",
"director": "Christopher Nolan",
"review": "Mind-bending masterpiece"
}
```

- GET /api/movies/:id → Get a movie by ID

Headers:
Authorization: Bearer <jwt_token>
Response:

```bash
{
"\_id": "65c2f817b2e4a6b7f7d4b12c",
"title": "Inception",
"genre": "Sci-Fi",
"releaseDate": "2010-07-16",
"director": "Christopher Nolan",
"review": "Mind-bending masterpiece"
}
```

- POST /api/movies → Add a new movie

Headers:
Authorization: Bearer <jwt_token>
Body:

```bash
{
"title": "Interstellar",
"genre": "Sci-Fi",
"releaseDate": "2014-11-07",
"director": "Christopher Nolan",
"review": "Amazing space exploration movie"
}
```

Response:

```bash
{
"message": "Movie added successfully",
"movie": {
"\_id": "65c3f817b2e4a6b7f7d4b12c",
"title": "Interstellar",
"genre": "Sci-Fi",
"releaseDate": "2014-11-07",
"director": "Christopher Nolan",
"review": "Amazing space exploration movie"
}
```

- PUT /api/movies/:id → Update a movie by ID

Headers:
Authorization: Bearer <jwt_token>
Body:

```bash
{
"title": "Interstellar",
"genre": "Sci-Fi Adventure",
"releaseDate": "2014-11-07",
"director": "Christopher Nolan",
"review": "A mind-blowing exploration of space, time, and love."
}
```

Response:

```bash
{
"message": "Movie updated successfully",
"updatedMovie": {
"\_id": "65c2f817b2e4a6b7f7d4b12c",
"title": "Interstellar",
"genre": "Sci-Fi Adventure",
"releaseDate": "2014-11-07",
"director": "Christopher Nolan",
"review": "A mind-blowing exploration of space, time, and love."
}
```

- DELETE /api/movies/:id → Delete a movie by ID

Headers:

Authorization: Bearer <jwt_token>
Response:

```bash

{
"message": "Movie deleted successfully"
}
```

## Technologies Used

Node.js: JavaScript runtime for building the API.

- Express.js: Web framework for Node.js used to build the API.
- MongoDB: Database used to store movie reviews.
- Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
- JWT (JSON Web Token): For handling secure user authentication and authorization.
- bcrypt: Library to hash passwords for secure storage.
- dotenv: Loads environment variables from a .env file to keep sensitive data like JWT secrets.
- CORS (Cross-Origin Resource Sharing): Middleware to handle cross-origin requests and enable API accessibility from different domains.
