import express from "express";
import { getUser, login, logout, register, updatePassword, updateProfile } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// User registration route
router.post("/register", register);

// User login route
router.post("/login", login);

// User logout route, protected by authentication middleware
router.get("/logout", isAuthenticated, logout);

// Get current user's details, protected by authentication middleware
router.get("/getuser", isAuthenticated, getUser);

// Update user profile, protected by authentication middleware
router.put("/update/profile", isAuthenticated, updateProfile);

// Update user password, protected by authentication middleware
router.put("/update/password", isAuthenticated, updatePassword);

export default router;
