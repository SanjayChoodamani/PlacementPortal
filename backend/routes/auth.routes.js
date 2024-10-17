import express from "express";
import {
  studentLogin,
  adminLogin,
  logout,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Student Login
router.post("/student-login", studentLogin);

// Admin Login
router.post("/admin-login", adminLogin);

// Logout for both
router.post("/logout", logout);

export default router;
