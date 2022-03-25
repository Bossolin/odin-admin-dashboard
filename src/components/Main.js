import React from "react";
import Project from "./Project";

const Main = () => {
  return (
    <div className="min-h-screen sm:grid sm:grid-rows-6 sm:grid-cols-[3fr_1fr] sm:gap-6 px-6 pt-4 pb-[200px] sm:py-8 bg-slate-200">
      <div className="row-span-6">
        <h1 className="text-xl mb-4">Your Projects</h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] grid-rows-3 gap-6">
          <Project name={"Super Cool Project"} />
          <Project name={"Less Cool Project"} />
          <Project name={"Impossible App"} />
          <Project name={"Easy Peasy App"} />
          <Project name={"Ad Blocker"} />
          <Project name={"Money Maker"} />
        </div>
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
