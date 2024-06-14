# Cipher Digitals Social Media App

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Developer Information](#developer-information)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the Cipher Digitals Social Media App! This project is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to create accounts, post updates, follow other users, and engage in real-time messaging using Socket.io.

### Use Case

Cipher Digitals serves as a platform for users to connect, share updates, and engage in real-time communication. It leverages MongoDB for flexible and scalable data storage, Express.js for handling server-side logic, React.js for building interactive user interfaces, and Node.js for backend server operations. The integration of Socket.io enables real-time messaging features, enhancing user engagement.

## Features

- *User Authentication:* Secure user registration and authentication using JWT (JSON Web Tokens).
- *Profile Management:* Edit profile details, upload profile pictures, and view other users' profiles.
- *Post Creation and Interaction:* Create, like, comment, and share posts.
- *Follow System:* Follow other users to see their posts and updates on the feed.
- *Real-Time Chat:* Engage in real-time private messaging with online/offline status indicators.
- *Responsive Design:* Fully responsive UI for seamless experience across devices.

## Technologies Used

![Frontend](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react)
![Backend](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Database](https://img.shields.io/badge/Database-MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Authentication](https://img.shields.io/badge/Authentication-JWT-000000?style=for-the-badge&logo=JSON-Web-Tokens)
![Real-Time Communication](https://img.shields.io/badge/Real--Time-Communication-Socket.io-010101?style=for-the-badge&logo=socket.io)

- *Frontend:* React.js, Redux (for state management), Material-UI (for UI components)
- *Backend:* Node.js, Express.js
- *Database:* MongoDB (with Mongoose ORM)
- *Authentication:* JSON Web Tokens (JWT)
- *Real-Time Communication:* Socket.io
- *Other Tools:* Axios (HTTP client for frontend-backend communication), bcrypt (for password hashing), multer (for handling file uploads), etc.

## Developer Information

- *Developer:* Yuvraj Singh Chowdhary
- *LinkedIn:* [Yuvraj Singh Chowdhary on LinkedIn](https://www.linkedin.com/in/yuvraj-singh-chowdhary/)
- *GitHub:* [Yuvraj Singh Chowdhary on GitHub](https://github.com/chowdhary19)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed locally.

### Installation

1. Clone the repo
   sh
   git clone https://github.com/chowdhary19/Cipher-Digitals.git
   
2. Navigate to the project directory
   sh
   cd Cipher-Digitals
   
3. Install npm packages
   sh
   npm install
   

### Running the App

1. Start the backend server (runs on http://localhost:5000/)
   sh
   npm run server
   
2. Start the frontend development server (runs on http://localhost:3000/)
   sh
   npm start
   

## Documentation

For detailed documentation on APIs, folder structure, and component breakdown, refer to the [Documentation.md](https://www.canva.com/design/DAGIIJDsC8A/0MJOmcFXOpc1CBcer5GIaA/view) file.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are *greatly appreciated*.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

Distributed under the MIT License. See LICENSE for more information.

---

### Project Files

#### Client
The client directory contains the React application, including components, Redux store, and styles. This is where the user interface is built and managed.

#### Server
The server directory includes the Express.js server code, handling API endpoints, authentication, and database interactions.

#### Socket
The socket directory contains the implementation of Socket.io for real-time communication, enabling features like real-time chat and notifications.
