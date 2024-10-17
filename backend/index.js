import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectMongoDB from "./db/connectMongoDB.js"; // Connect MongoDB
import authRoutes from "./routes/auth.routes.js"; // Importing auth routes

// Initialize dotenv for environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Middleware to parse from data(urlencodded)

// CORS setup to allow frontend requests
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend's actual origin
  credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions));

// Routes
app.use("/api/auth", authRoutes); // Auth routes for login/logout

// Database connection and server startup
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connectMongoDB(); // Connect to MongoDB
});
