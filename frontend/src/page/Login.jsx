import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-16 p-8  bg-gray-100 rounded-xl shadow-xl">
      <h2 className="text-3xl  font-bold text-center mb-8">Login</h2>
      <form action="" className="space-y-4">
        <input
          className="w-full p-3 border rounded-lg"
          placeholder="example@mail.com"
          type="email"
        />
        <input
          type="password"
          className="w-full p-3 border rounded-lg"
          placeholder="password"
        />
        <button className="w-full bg-teal-700 py-3 text-white rounded-lg hover:bg-teal-600 cursor-pointer">
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
