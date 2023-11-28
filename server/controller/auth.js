import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Admin from "../models/Admin.js";
import Employee from "../models/Employee.js";

export const userRegister = async (req, res) => {
  try {
    const { username, email, mobile, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "User Already Exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new user using Sequelize
    const newUser = await User.create({
      username,
      email,
      password: passwordHash,
      mobile,
    });

    res.status(201).json({ userId: newUser.id, message: "User Created" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: err.message, message: "Internal Server Error" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return res.status(400).json({ message: "Invalid User Credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, userID: user._id });
  } catch (error) {}
};
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Admin.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return res.status(400).json({ message: "Invalid User Credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, userID: user._id });
  } catch (error) {}
};
export const employeeLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Employee.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return res.status(400).json({ message: "Invalid User Credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, userID: user._id });
  } catch (error) {}
};

export const employeeRegister = async (req, res) => {
  try {
    const {
      username,
      email,
      mobile,
      password,
      address,
      joining_date,
      admin_id,
    } = req.body;

    // Check if the user already exists
    const existingUser = await Employee.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "User Already Exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new user using Sequelize
    const newUser = await Employee.create({
      username,
      email,
      password: passwordHash,
      mobile,
      address,
      joining_date,
      admin_id,
    });

    res.status(201).json({ userId: newUser.id, message: "User Created" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: err.message, message: "Internal Server Error" });
  }
};

// export const changePassword = async (req, res) => {
//   try {
//     const { currentPassword, newPassword } = req.body;
//     const userId = req.user.id; // Assuming you use Passport or another middleware to attach user information to the request

//     // Find the user by their ID
//     const user = await User.findByPk(userId);

//     // Check if the user exists
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // Check if the current password matches
//     const isPasswordMatch = await bcrypt.compare(
//       currentPassword,
//       user.password
//     );
//     if (!isPasswordMatch) {
//       return res.status(400).json({ message: "Current password is incorrect" });
//     }

//     // Hash the new password
//     const salt = await bcrypt.genSalt(10);
//     const newPasswordHash = await bcrypt.hash(newPassword, salt);

//     // Update the user's password
//     user.password = newPasswordHash;
//     await user.save();

//     res.status(200).json({ message: "Password changed successfully" });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: error.message, message: "Internal Server Error" });
//   }
// };
