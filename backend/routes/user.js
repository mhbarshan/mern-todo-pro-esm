import express from "express";
import { protect } from "../middleware/auth.js";
import { updateUserProfile } from "../controller/userController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.put("/profile", protect, upload.single("profilePic"), updateUserProfile);

export default router;
