import React from "react";
import image from "../assets/passport_imresizer.jpg";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "../service/api";

const Profile = () => {
  const { user, updateUser } = React.useContext(AuthContext);
  console.log("user", user);
  const [name, setName] = React.useState(user?.name || "");
  const [profilePic, setProfilePic] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle profile update logic here
    const formData = new FormData();
    formData.append("name", name);
    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    try {
      const response = await updateProfile(formData);
      updateUser(response.data.user);
    } catch (error) {
      alert("Failed to update profile");
      console.log(error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6  bg-white rounded-xl shadow-xl">
      <h2 className="text-xl text-center font-bold mb-6">Edit profile</h2>
      {user && (
        <img
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
          src={
            user.profilePic ? `http://localhost:5000${user.profilePic}` : image
          }
          alt="Picture"
        />
      )}
      <form action="" onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full border p-3 rounded-lg"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <input
          type="file"
          accept="image/*"
          className="w-full border p-3 rounded-lg"
          onChange={(event) => setProfilePic(event.target.files[0])}
        />
        <button
          type="submit"
          className="w-full bg-teal-700 py-3 text-white rounded-lg hover:bg-teal-600 cursor-pointer"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
