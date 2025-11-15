import React from "react";

const Register = () => {
  return (
    <div className="max-w-md mx-auto mt-16 p-8  bg-gray-100 rounded-xl shadow-xl">
      <h2 className="text-3xl  font-bold text-center mb-8">Register</h2>
      <form action="" className="space-y-4">
        <input
          className="w-full p-3 border rounded-lg"
          placeholder="Jhon Doe."
          type="text"
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
