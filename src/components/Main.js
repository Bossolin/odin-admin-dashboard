import React from "react";
import Project from "./Project";

const Main = () => {
  return (
    <div className="min-h-screen sm:grid sm:grid-rows-6 sm:grid-cols-[3fr_1fr] sm:gap-6 px-6 pt-4 pb-[200px] sm:py-8 bg-slate-200">
      <div className="row-span-full">
        <h1 className="text-xl mb-4">Your Projects</h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] grid-rows-3 gap-6 mb-4">
          <Project name={"Super Cool Project"} />
          <Project name={"Less Cool Project"} />
          <Project name={"Impossible App"} />
          <Project name={"Easy Peasy App"} />
          <Project name={"Ad Blocker"} />
          <Project name={"Money Maker"} />
        </div>
      </div>
      <div className="row-span-3">
        <h1 className="text-xl mb-4">Announcements</h1>
        <div className="flex flex-col gap-px py-6 px-6 mb-4 rounded-lg shadow-md bg-white">
          <div className=" py-4 px-2 border-b border-slate-300">
            <h1 className="text-sm">Site Maintenance</h1>
            <p className="text-xs font-thin leading-[0.9rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              recusandae laboriosam.
            </p>
          </div>
          <div className=" py-4 px-2 border-b border-slate-300">
            <h1 className="text-sm">Community Share Day</h1>
            <p className="text-xs font-thin">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              recusandae laboriosam.
            </p>
          </div>
          <div className=" py-4 px-2 ">
            <h1 className="text-sm">Updated Privacy Policy</h1>
            <p className="text-xs font-thin">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              recusandae laboriosam.
            </p>
          </div>
        </div>
      </div>
      <div className="row-span-3">
        <h1 className="text-xl mb-4">Trending</h1>
        <div className="py-6 px-6 mb-4 rounded-lg shadow-md bg-white">
          <div className="pb-2 text-sm">
            <p>@tegan</p>
            <p className="font-thin">World Peace Builder</p>
          </div>
          <div className="py-4 text-sm">
            <p>@morgan</p>
            <p className="font-thin">Super Cool Project</p>
          </div>
          <div className="py-4 text-sm">
            <p>@kendall</p>
            <p className="font-thin">Life Changing App</p>
          </div>
          <div className="pt-2 text-sm">
            <p>@alex</p>
            <p className="font-thin">No Traffic Maker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
