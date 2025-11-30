import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { register } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Clicked");
    try {
      await register(name, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8  bg-gray-100 rounded-xl shadow-xl">
      <h2 className="text-3xl  font-bold text-center mb-8">Register</h2>
      <form action="" className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full p-3 border rounded-lg"
          placeholder="Jhon Doe."
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
