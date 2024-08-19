import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getReceiverSocketId } from "../socket/socket.js";


export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;// this is the user who will actually receive the message from the sender.OR // message will go this user.
    const senderId = req.user._id;// coming from the request beacuse we added this protected route middleware

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await conversation.save();// save and update  into the database.
    // await newMessage.save();// save and update into the database.

    await Promise.all(conversation.save(), newMessage.save());// this will run in parallel. to save message and conversation into the database.

    // SOCKET IO FUNCTONALITY WILL GO HEERE.
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);// message will send specifically to this user from the sender.
    }

    res.status(201).json(newMessage);

  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;// id of the user for whom we want to get messages.
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");//  this is not a reference but  a actual message between sender and user

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;// this contains array of messages.

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};