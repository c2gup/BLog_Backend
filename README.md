# Newb BLog Backend API

This repository contains the backend code for the Newb Log application.

## Usage

### Base URL

The base URL for all endpoints is: `https://newb-log-backend.vercel.app/api/v1`

### Endpoints

1. **Create Post**
   - URL: `/createPost`
   - Method: `POST`
   - Body:
     ```json
     {
         "title": "My First Post",
         "body": "This is the content of my first post."
     }
     ```

2. **Create Comment**
   - URL: `/createComment`
   - Method: `POST`
   - Body:
     ```json
     {
         "post": "60e610912205721e7c5a8ac9", // Example post ID
         "user": "JohnDoe",
         "body": "This is a test comment."
     }
     ```

3. **Like Post**
   - URL: `/likePost`
   - Method: `POST`
   - Body:
     ```json
     {
         "post": "60e610912205721e7c5a8ac9", // Example post ID
         "user": "JaneDoe"
     }
     ```

4. **Unlike Post**
   - URL: `/unlikePost`
   - Method: `POST`
   - Body:
     ```json
      {
       "post": "post_id_here",
       "like": "like_id_here"
     }

     ```

5. **Get All Posts**
   - URL: `/getallpost`
   - Method: `GET`

## How to Use

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the server using `npm start`.
4. Use the provided Postman URLs to interact with the API endpoints.

