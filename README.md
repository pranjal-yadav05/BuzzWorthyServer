<img src='buzzworthyserver-logo.png' width='50%'>

BuzzWorthyServer is a backend server application built to support the BuzzWorthy web application. It provides APIs for managing user profiles, blog posts, comments, likes, and other features.

## Features

- **User Authentication**: Secure user authentication and authorization system using JWT tokens.
- **Profile Management**: CRUD operations for user profiles, including profile picture upload.
- **Blog Management**: Create, read, update, and delete blog posts.
- **Likes**: Allow users to like blog posts.
- **Comments**: Enable users to comment on blog posts.
- **Search**: Provide search functionality for blog posts and user profiles.
- **Error Handling**: Robust error handling to provide meaningful feedback to users.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user data, blog posts, and comments.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **JWT**: JSON Web Tokens for user authentication.
- **Multer**: Middleware for handling file uploads.
- **Axios**: HTTP client for making API requests.
- **bcrypt**: Password hashing library for secure password storage.
- **dotenv**: Library for loading environment variables from a .env file.
- **Other Dependencies**: Check package.json for a complete list of dependencies.

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/pranjal-yadav05/BuzzWorthyServer.git

2. Install dependencies:
    ```bash
    cd BuzzWorthyServer
    npm install
    
3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables for MongoDB Database:
    ```bash
    DATABASE=mongodb://localhost:27017/buzzworthy

4. Start the server:
    ```bash
    node index.mjs
The server should now be running on http://localhost:5000/.

## Contributing

Contributions are welcome! Please contact me to get details on how to contribute to this project.
contact: yadavpranjal2105@gmail.com

## License

This project is licensed under the [MIT License](LICENSE).
