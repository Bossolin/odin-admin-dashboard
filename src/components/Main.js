import React from "react";

const Main = () => {
  return (
    <div className="min-h-screen sm:grid sm:grid-rows-6 sm:grid-cols-[3fr_1fr] px-6 py-8 bg-slate-200">
      <div className="row-span-6">
        <h1 className="text-xl">Your Projects</h1>
        <div className="">project</div>
      </div>
      <div className="row-span-3">
        <h1 className="text-xl">Announcements</h1>
        <div className="">announcement</div>
      </div>
      <div className="row-span-3">
        <h1 className="text-xl">Trending</h1>
        <div className="">trend</div>
      </div>
    </div>
  );
};

export default Main;
