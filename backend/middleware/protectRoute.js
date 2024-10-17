import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Faculty from "../models/faculty.model.js";

// Middleware for both admin and student
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized: Invalid Token" });
    }

    // Find the user in the database based on the role (admin or student)
    let user;
    if (decoded.role === "admin") {
      user = await Faculty.findById(decoded.userId).select("-password");
    } else if (decoded.role === "student") {
      user = await User.findById(decoded.userId).select("-password");
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user; // Attach user to the request object
    next();
  } catch (err) {
    console.log("Error in protectRoute middleware", err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Middleware for student routes only
export const studentProtectRoute = (req, res, next) => {
  if (req.user && req.user.role === "student") {
    next();
  } else {
    return res.status(403).json({ error: "Access Denied: Students only" });
  }
};

// Middleware for admin routes only
export const adminProtectRoute = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ error: "Access Denied: Admins only" });
  }
};
