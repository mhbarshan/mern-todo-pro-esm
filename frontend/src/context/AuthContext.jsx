import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.user?.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      setUser(user.user);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    localStorage.setItem("user", JSON.stringify(response.data));
    setUser(response.data.user);
  };

  const register = async (name, email, password) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      { name, email, password }
    );

    localStorage.setItem("user", JSON.stringify(response.data));
    setUser(response.data.user);
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    delete axios.defaults.headers.common["Authorization"];
  };

  const updateUser = (updatedUser) => setUser(updatedUser);
  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
