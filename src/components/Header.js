import React from "react";
import Icon from "@mdi/react";
import { mdiViewDashboard } from "@mdi/js";

const Header = ({ openModal, setOpenModal }) => {
  return (
    <div
      className={`${
        openModal ? "hidden" : "block"
      } sm:static fixed w-full sm:row-span-1 bottom-0 bg-white`}
    >
      Header
      <button
        className={`
        ${openModal ? "hidden" : "block"}
        sm:hidden z-10 relative -top-28 left-4 text-sky-500 `}
        onClick={() => setOpenModal(!openModal)}
      >
        <Icon path={mdiViewDashboard} title="Dashboard" size={3} />
      </button>
    </div>
  );
};

export default Header;
