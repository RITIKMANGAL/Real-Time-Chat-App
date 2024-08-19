import express from "express";
import protectRoute from "../middleware/protectedRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);// we call the middleware here to ensure taht only authenticated users can access this route.

export default router;