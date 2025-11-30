import User from "../models/User.js";

export const updateUserProfile = async (req, res) => {
  const { name } = req.body;

  const updatedData = { name };

  if (req.file) {
    updatedData.profilePic = `/uploads/${req.file.filename}`;
  }

  try {
    const user = await User.findByIdAndUpdate(req.user._id, updatedData, {
      new: true,
    }).select("-hashedPassword");

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
