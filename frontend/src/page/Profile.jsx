import React from "react";
import image from "../assets/passport_imresizer.jpg";

const Profile = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6  bg-white rounded-xl shadow-xl">
      <h2 className="text-xl text-center font-bold mb-6">Edit profile</h2>
      <img
        className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
        src={image}
        alt=""
      />
      <form action="" className="space-y-4">
        <input type="text" className="w-full border p-3 rounded-lg" />
        <input type="file" className="w-full border p-3 rounded-lg" />
        <button className="w-full bg-teal-700 py-3 text-white rounded-lg hover:bg-teal-600 cursor-pointer">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
