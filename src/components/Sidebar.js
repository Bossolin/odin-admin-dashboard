import React from "react";
import Icon from "@mdi/react";
import { mdiCloseThick } from "@mdi/js";

const Sidebar = ({ openModal, setOpenModal }) => {
  return (
    <div
      className={`${
        openModal ? "block" : "hidden"
      } w-full h-full fixed sm:block sm:static sm:row-span-full bg-sky-500`}
    >
      <button
        onClick={() => setOpenModal(!openModal)}
        className={`${openModal ? "block" : "hidden"} `}
      >
        <Icon path={mdiCloseThick} title="Close Dashboard" size={2} />
      </button>
    </div>
  );
};

export default Sidebar;
