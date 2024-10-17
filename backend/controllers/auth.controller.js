import { generateTokenAndSetCookie } from "../lib/util/generateToken.js";
import User from "../models/user.model.js";
import Faculty from "../models/faculty.model.js";
import bcrypt from "bcryptjs";

// Student Login
export const studentLogin = async (req, res) => {
  try {
    const { usn, password } = req.body;

    // Find student by USN
    const user = await User.findOne({ usn });
    // console.log(user);
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid USN or password" });
    }

    // Generate token with student role
    generateTokenAndSetCookie(user._id, "student", res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      usn: user.usn,
    });
  } catch (error) {
    console.log("Error in studentLogin controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Admin Login
export const adminLogin = async (req, res) => {
  try {
    const { facultyId, password } = req.body;
    // console.log(facultyId);

    // Find Faculty by facultyId
    const faculty = await Faculty.findOne({ facultyId });
    // console.log(faculty);

    const isPasswordCorrect = await bcrypt.compare(
      password,
      faculty?.password || ""
    );
    // console.log(isPasswordCorrect);

    if (!faculty || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid facultyID or password" });
    }

    // Generate token with student role
    generateTokenAndSetCookie(faculty._id, "admin", res);

    res.status(200).json({
      _id: faculty._id,
      facultyId: faculty.facultyId,
      username: faculty.username,
    });
  } catch (error) {
    console.log("Error in facultyLogin controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Logout for both Admin and Student
export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 }); // Clear the JWT cookie
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
