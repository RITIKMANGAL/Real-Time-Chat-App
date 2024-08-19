import express from 'express';
import { sendMessage,getMessages } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectedRoute.js';


const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);// here this will verify the user that is sending the message.
export default router;