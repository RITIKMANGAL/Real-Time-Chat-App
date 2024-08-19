import express from 'express';// importing the express module
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';

// const app = express();// creating an express server.
const PORT = process.env.PORT || 5000;


app.use(express.json());// to parse the incoming requests with the JSON payloads(from req.body)
app.use(cookieParser());// this is called to be as the middleware to access the cookie.

dotenv.config();

// use of middlewares.
app.use("/api/auth" , authRoutes);// whenever we visit any route starting with /api/auth we call authRoutes.
app.use("/api/messages" , messageRoutes);// whenever we visit any route starting with /api/auth we call authRoutes.
app.use("/api/users" , userRoutes);// whenever we visit any route starting with /api/auth we call authRoutes.

// app.listen(PORT, ()=> {// when we have created a express listening on port
//   connectToMongoDB();
//   console.log(`Server is running on this port ${PORT}`)
// }
// );
server.listen(PORT, ()=> {// when using the socket io in our application.
  connectToMongoDB();
  console.log(`Server is running on this port ${PORT}`)
}
);
