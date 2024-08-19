import { Server } from "socket.io";
import http from "http";// from nodejs
import express from "express";

const app = express();

const server = http.createServer(app);// this is our express server.
const io = new Server(server, {// on te top of the express server we have this socket io server.
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	},
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}// to get all the online users.

io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketMap[userId] = socket.id;

	// io.emit() is used to send events to all the connected clients
	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	// socket.on() is used to listen to the events. can be used both on client and server side
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];// when the user disconnects , its socket id will remove the socketMAP
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };