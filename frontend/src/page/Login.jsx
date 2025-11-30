import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Clicked");
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8  bg-gray-100 rounded-xl shadow-xl">
      <h2 className="text-3xl  font-bold text-center mb-8">Login</h2>
      <form action="" className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full p-3 border rounded-lg"
          placeholder="example@mail.com"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 border rounded-lg"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-teal-700 py-3 text-white rounded-lg hover:bg-teal-600 cursor-pointer"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-primary hover:underline cursor-pointer"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
