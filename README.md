Twitter-Like Backend System Assignment Overview: 
This assignment involves designing and implementing a scalable backend system resembling Twitter, using Node.js as the runtime environment and MongoDB as the database. The main objectives include schema design, implementing RESTful APIs, adding basic user authentication, adhering to Domain-Driven Design (DDD) principles, implementing pagination, and providing documentation.

How to Run the Application:

Clone the repository to your local machine: git clone https://github.com/your-username/twitter-like-backend.git
Navigate to the project directory: cd twitter-like-backend
Install dependencies: npm install
Set up environment variables: Create a .env file in the root directory and define the necessary environment variables, such as PORT and JWT_SECRET.
Start the server: npm start
The application should now be running locally. You can access it at http://localhost:PORT.

Dependencies: Node.js, Express.js, MongoDB, bcrypt, jsonwebtoken

Installation Instructions: Install Node.js from the official website. Install MongoDB Community Edition from the official website.

Configuration: Ensure that MongoDB is running locally on its default port (27017). Configure environment variables in a .env file as mentioned in the "How to Run the Application" section.

Testing:

User Registration: Open Postman and create a new request. Set the request type to POST. Enter the URL for user registration endpoint (e.g., http://localhost:3000/api/users/register). In the request body, provide the necessary data for user registration (e.g., username and password). Send the request and verify that you receive a successful response indicating that the user has been registered.

User Login: Create another request in Postman. Set the request type to POST. Enter the URL for user login endpoint (e.g., http://localhost:3000/api/users/login). Provide the username and password of a registered user in the request body. Send the request and verify that you receive a JWT token in the response.

Post a Tweet: Create a new request. Set the request type to POST. Enter the URL for posting a tweet endpoint (e.g., http://localhost:3000/api/tweets). Add the JWT token received from the login request to the request headers as an authorization token. In the request body, provide the text of the tweet. Send the request and verify that you receive a successful response indicating that the tweet has been posted.

Fetch User Timeline: Create another request. Set the request type to GET. Enter the URL for fetching user timeline endpoint (e.g., http://localhost:3000/api/users/:userId/timeline). Replace :userId with the actual user ID. Add the JWT token received from the login request to the request headers as an authorization token. Send the request and verify that you receive a list of tweets in the user's timeline.







