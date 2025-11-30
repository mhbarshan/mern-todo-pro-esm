import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { fetchTodos, updateTodo, createTodo, deleteTodo } from "../service/api";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  console.log(user);
  // loadTodos should be outside useEffect
  const loadTodos = async () => {
    try {
      const response = await fetchTodos();
      setTodos(response.data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  // Correct useEffect position (top level)
  useEffect(() => {
    loadTodos();
  }, []);

  // Correct create todo function (top level)
  const handleCreateTodo = async (event) => {
    event.preventDefault();

    if (!title.trim()) return;

    await createTodo({ title, priority, dueDate });
    setTitle("");
    setDueDate("");
    setPriority("Low");
    loadTodos();
  };

  return (
    <div className="mt-8 px-20">
      <h1 className="text-3xl text-center mb-6 font-bold">
        Welcome {user?.name}
      </h1>

      <form onSubmit={handleCreateTodo} className="flex gap-3">
        <input
          className="flex-1 p-3 border rounded-lg"
          placeholder="What's need to be done?"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="flex-1 p-3 border rounded-lg"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <select
          className="border p-3 rounded-md"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button
          type="submit"
          className="px-6 bg-teal-700 py-3 text-white rounded-lg hover:bg-teal-600 cursor-pointer"
        >
          Add todo
        </button>
      </form>

      {/* Todo list example */}
      <div className="space-y-3 flex flex-row gap-3 flex-wrap mt-8">
        {todos.length > 0 &&
          todos?.map((todo) => (
            <div
              key={todo._id}
              className="bg-white shadow-lg h-[70px] w-[400px] rounded-md"
            >
              <div className="flex flex-row items-center gap-3 p-2">
                <input type="checkbox" checked={todo.completed} readOnly />
                <span>{todo.title}</span>
                <span>{todo.dueDate.split("T")[0]}</span>
                <span>{todo.priority}</span>

                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
