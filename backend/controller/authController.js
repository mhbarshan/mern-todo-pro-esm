import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, hashedPassword });

    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic,
        token: generateToken(user._id),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  // Login logic to be implemented
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+hashedPassword");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    if (user && (await bcrypt.compare(password, user.hashedPassword))) {
      res.status(200).json({
        success: true,
        message: "Successfully logged in",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          profilePic: user.profilePic,
          token: generateToken(user._id),
        },
      });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
