import React from "react";
import image from "../assets/passport_imresizer.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-primary text-black p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold">MERN Todo Pro</h2>
          <div className="flex gap-6 items-center">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={image}
              alt="Picture"
            />

            <Link
              to={"/login"}
              className="bg-blue-500 px-4 py-2 text-white rounded-md"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
