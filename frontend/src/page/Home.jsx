import React from "react";

const Home = () => {
  return (
    <div className="mt-8 px-20">
      <h1 className="text-3xl text-center mb-6 font-bold">Welcome User</h1>
      <form action="" className="flex gap-3">
        <input
          className="flex-1 p-3 border  rounded-lg"
          placeholder="Whats need to be done?"
          type="text"
        />
        <input className="flex-1 p-3 border rounded-lg" type="date" />
        <select name="" id="" className="border p-3 rounded-md">
          <option value="">Low</option>
          <option value="">Medium</option>
          <option value="">High</option>
        </select>
        <button className=" px-6 bg-teal-700 py-3 text-white rounded-lg hover:bg-teal-600 cursor-pointer">
          Add todo
        </button>
      </form>
      <div className="space-y-3 flex flex-row gap-3 flex-wrap mt-8">
        <div className="bg-white shadow-lg h-[70px] w-[400px] rounded-md">
          <div className="flex flex-row items-center gap-3 p-2">
            <input type="checkbox" />
            <span>Making app</span>
            <span>10-12-25</span>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div className="bg-white shadow-lg h-[70px] w-[400px] rounded-md">
          Todo
        </div>
        <div className="bg-white shadow-lg h-[70px] w-[400px] rounded-md">
          Todo
        </div>
        <div className="bg-white shadow-lg h-[70px] w-[400px] rounded-md">
          Todo
        </div>
      </div>
    </div>
  );
};

export default Home;
