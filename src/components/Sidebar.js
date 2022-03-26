import React from "react";
import Icon from "@mdi/react";
import {
  mdiAccountGroup,
  mdiCardAccountDetailsOutline,
  mdiClock,
  mdiCloseThick,
  mdiCog,
  mdiHelpBox,
  mdiHome,
  mdiMessageReply,
  mdiNoteMultiple,
  mdiShieldCheck,
  mdiViewDashboard,
} from "@mdi/js";

const Sidebar = ({ openModal, setOpenModal }) => {
  return (
    <div
      className={`${
        openModal ? "block" : "hidden"
      } w-full h-full z-20 fixed sm:block sm:static sm:row-span-full p-6 sm:p-3 bg-sky-500 `}
    >
      <div className="text-white flex items-center sm:text-3xl text-6xl">
        <Icon path={mdiViewDashboard} title="Dashboard" size={2} />{" "}
        <span className="p-4">Dashboard</span>
      </div>
      <div className="py-8">
        <button className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiHome} title="Home" size={1} />{" "}
          <span className="px-6 py-2">Home</span>
        </button>
        <button className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiCardAccountDetailsOutline} title="Profile" size={1} />{" "}
          <span className="px-6 py-2">Profile</span>
        </button>
        <button className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiMessageReply} title="Messages" size={1} />{" "}
          <span className="px-6 py-2">Messages</span>
        </button>
        <button className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiClock} title="History" size={1} />{" "}
          <span className="px-6 py-2">History</span>
        </button>
        <button className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiNoteMultiple} title="Tasks" size={1} />{" "}
          <span className="px-6 py-2">Tasks</span>
        </button>
        <button className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiAccountGroup} title="Communities" size={1} />{" "}
          <span className="px-6 py-2">Communities</span>
        </button>
      </div>

      <button className="text-white px-3 flex items-center sm:text-xl text-3xl">
        <Icon path={mdiCog} title="Settings" size={1} />{" "}
        <span className="px-6 py-2">Settings</span>
      </button>
      <button className="text-white px-3 flex items-center sm:text-xl text-3xl">
        <Icon path={mdiHelpBox} title="Support" size={1} />{" "}
        <span className="px-6 py-2">Support</span>
      </button>
      <button className="text-white px-3 flex items-center sm:text-xl text-3xl">
        <Icon path={mdiShieldCheck} title="Privacy" size={1} />{" "}
        <span className="px-6 py-2">Privacy</span>
      </button>

      <button
        onClick={() => setOpenModal(!openModal)}
        className={`${
          openModal ? "block" : "hidden"
        } text-white fixed bottom-44 left-6`}
      >
        <Icon path={mdiCloseThick} title="Close Dashboard" size={3} />
      </button>
    </div>
  );
};

export default Sidebar;
