import React from "react";
import Icon from "@mdi/react";
import { mdiCloseThick, mdiViewDashboard } from "@mdi/js";

const Sidebar = ({ openModal, setOpenModal }) => {
  return (
    <div
      className={`${
        openModal ? "block" : "hidden"
      } w-full h-full fixed sm:block sm:static sm:row-span-full p-4 bg-sky-500 `}
    >
      <div className="text-white flex items-center text-4xl">
        <Icon path={mdiViewDashboard} title="Dashboard" size={2.5} />{" "}
        <span className="p-4">Dashboard</span>
      </div>
      <button
        onClick={() => setOpenModal(!openModal)}
        className={`${openModal ? "block" : "hidden"} text-white`}
      >
        <Icon path={mdiCloseThick} title="Close Dashboard" size={2} />
      </button>
    </div>
  );
};

export default Sidebar;
