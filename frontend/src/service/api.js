import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user.user?.token) {
    req.headers.Authorization = `Bearer ${user.user.token}`;
    return req;
  }
});

export const fetchTodos = () => API.get("/todos");
export const createTodo = (todo) => API.post("/todos", todo);
export const updateTodo = (id, updatedTodo) =>
  API.put(`/todos/${id}`, updatedTodo);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
export const updateProfile = (formData) => API.put(`/user/profile`, formData);
