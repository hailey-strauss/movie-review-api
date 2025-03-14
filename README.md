# Movie Review API

A simple RESTful API built using Node.js, Express, and MongoDB to store, retrieve, update, and delete movie reviews.

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

Follow the steps below to get this project up and running locally.

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
     git clone https://github.com/yourusername/movie-review-api.git
     ```
   - Navigate into the project folder:
     ```bash
     cd movie-review-api
     ```

2. **Install Dependencies**

   - Install the necessary packages using `npm`:
     ```bash
     npm install
     ```

3. **Set Up Environment Variables**

   - Create a `.env` file in the root directory of your project (same level as `server.js`).
   - Add the following content to your `.env` file:
     ```
     MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/moviereviews?retryWrites=true&w=majority
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

- **GET** `/api/movies`: Fetch all movies in the database.
- **GET** `/api/movies/:id`: Fetch a specific movie by its ID.
- **POST** `/api/movies`: Add a new movie review.
- **PUT** `/api/movies/:id`: Update an existing movie review by ID.
- **DELETE** `/api/movies/:id`: Delete a movie review by ID.

### Step-by-Step Usage

#### 1. Fetch All Movies (GET)

To fetch all the movies from the database, open Postman and send a **GET** request to:

#### 2. Fetch a Specific Movie (GET)

To fetch a specific movie, send a **GET** request to the following endpoint with the movie’s ID:
http://localhost:3000/api/movies/<movieId>

Replace `<movieId>` with the actual ID of the movie.

#### 3. Add a New Movie (POST)

To add a new movie, send a **POST** request to the `/api/movies` endpoint:

- URL: http://localhost:3000/api/movies

- Body (JSON format):

```json
{
  "title": "My Dear",
  "genre": "Rom-Com",
  "releaseDate": "2-12-2025",
  "director": "Hailey Norton",
  "review": "A cute romance between Hailey and Macen."
}
```

## Technologies Used

Node.js: JavaScript runtime for building the API.
Express.js: Web framework for Node.js used to build the API.
MongoDB: Database used to store movie reviews.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
