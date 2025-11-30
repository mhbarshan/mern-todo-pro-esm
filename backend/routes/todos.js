import express from "express";
import { protect } from "../middleware/auth.js";
import { createTodo, getTodos } from "../controller/todoControllers.js";

const router = express.Router();
router.use(protect);

// router.get("/", protect,getTodos);
// router.post("/", protect,createTodos);

router.route("/").get(getTodos).post(createTodo);

router.route("/:id").get().put().delete();

export default router;
