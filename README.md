# Real-Time Chat App 🚀

A robust and scalable real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) to provide seamless communication. This app features secure user authentication, real-time messaging, user management, and multiple chat rooms, delivering an engaging chat experience.

## 🌟 Project Overview

This project is designed to offer a full-fledged chat platform with the following core functionalities:

- **User Authentication**: Secure login and registration using JSON Web Tokens (JWT).
- **Real-Time Messaging**: Instant communication with Socket.io for real-time, bi-directional data flow.
- **User Management**: Profile management and contact lists for a personalized user experience.
- **Chat Rooms**: Multiple rooms/channels support for diverse conversation threads.
- **Private Messaging**: Direct one-on-one private messaging between users.
- **Message History**: Persistent storage in MongoDB to maintain message history.

## 🛠 Tech Stack Used

- ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) **MongoDB**: NoSQL database for storing user data and messages.
- ![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white) **Express.js**: Backend web framework for Node.js.
- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) **React.js**: Frontend library for building the user interface.
- ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) **Next.js**: React framework for server-side rendering and static site generation.
- ![Socket.io](https://img.shields.io/badge/-Socket.io-010101?style=flat-square&logo=socket.io&logoColor=white) **Socket.io**: Real-time, bi-directional communication between clients and servers.
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) **Tailwind CSS**: Utility-first CSS framework for styling.
- ![Daisy UI](https://img.shields.io/badge/-Daisy%20UI-5A67D8?style=flat-square) **Daisy UI**: Tailwind CSS component library for building modern interfaces.
- ![JWT](https://img.shields.io/badge/-JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white) **JWT**: JSON Web Tokens for secure authentication and authorization.

## ✨ Key Features

- **User Authentication**
  - Secure login and registration with JWT.
  - Authorization ensures access control for authenticated users.

- **Real-Time Messaging**
  - Instant communication between users using Socket.io.
  - Supports real-time, bidirectional communication.

- **User Management**
  - Profile customization and contact management.
  - User profiles include avatars, status messages, etc.

- **Chat Rooms**
  - Multiple chat rooms for various topics.
  - Users can create, join, and switch between chat rooms seamlessly.

- **Private Messaging**
  - Direct, private one-on-one conversations.
  - Messages are only visible to the sender and receiver.

- **Message History**
  - Persistent message storage in MongoDB.
  - Allows users to view their chat history.

## 🏛 Architecture Overview

### Frontend

- Built with **React.js** and **Next.js** for a dynamic, responsive UI.
- **Tailwind CSS** and **Daisy UI** provide a modern and consistent design.
- Utilizes **Socket.io** for real-time updates.

### Backend

- Developed with **Node.js** and **Express.js** to handle server-side logic.
- **Socket.io** manages real-time events and data synchronization.
- **MongoDB** is used for database storage to persist user data and messages.
- Authentication is handled via **JWT** to ensure secure access.

## 🚀 Deployment

You can try out the live version of the application [here](your-deployment-link).

## 📥 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/realtime-chat-app.git
    ```
2. **Install dependencies:**
    ```bash
    cd realtime-chat-app
    npm install
    ```
3. **Run the development server:**
    ```bash
    npm run dev
    ```
4. **Open your browser:**
   Navigate to `http://localhost:3000` to see the app in action.

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request for any improvements or feature additions.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

Replace `your-deployment-link` with the actual URL where your app is deployed. Feel free to add or customize sections to better fit your project's unique features.
