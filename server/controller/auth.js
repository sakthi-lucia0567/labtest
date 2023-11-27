import bcrypt from "bcrypt";
import User from "../models/Users.js";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: passwordHash });
    const savedUser = await newUser.save();
    res.status(201).json({ savedUser, message: "User Created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message, message: "User Already Exist" });
  }
};
