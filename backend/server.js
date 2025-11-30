import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import authRoute from "./routes/auth.js";
import todosRoute from "./routes/todos.js";
import userRoutes from "./routes/user.js";
import cors from "cors";

dotenv.config();

const app = express();
await connectDB();

app.use(cors())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/todos", todosRoute);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("API is working for mern-todo-pro-esm");
});
