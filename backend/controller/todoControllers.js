import Todo from "../models/Todo.js";

export const createTodo = async (req, res) => {
  const { title, priority, dueDate } = req.body;

  if (!title?.trim()) {
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  }

  try {
    const todo = await Todo.create({
      title: title,
      dueDate: dueDate || null,
      priority: priority || "Low",
      user: req.user._id,
    });

    res.status(201).json({ success: true, todo });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user._id });
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }

    res.status(200).json({ success: true, todo });
  } catch (error) {
    console.error("Error fetching todo:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
export const updateTodo = async (req, res) => {
  const { title, completed, priority, dueDate } = req.body;
  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user._id });
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;
    if (priority !== undefined) todo.priority = priority;
    if (dueDate !== undefined) todo.dueDate = dueDate || null;

    await todo.save();
    res.status(200).json({ success: true, todo });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
