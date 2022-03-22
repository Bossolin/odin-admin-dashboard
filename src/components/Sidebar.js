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
      } w-full h-full fixed sm:block sm:static sm:row-span-full p-6 sm:p-3 bg-sky-500 `}
    >
      <div className="text-white flex items-center sm:text-3xl text-6xl">
        <Icon path={mdiViewDashboard} title="Dashboard" size={2} />{" "}
        <span className="p-4">Dashboard</span>
      </div>
      <div className="py-8">
        <div className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiHome} title="Home" size={1} />{" "}
          <span className="px-6 py-2">Home</span>
        </div>
        <div className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiCardAccountDetailsOutline} title="Profile" size={1} />{" "}
          <span className="px-6 py-2">Profile</span>
        </div>
        <div className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiMessageReply} title="Messages" size={1} />{" "}
          <span className="px-6 py-2">Messages</span>
        </div>
        <div className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiClock} title="History" size={1} />{" "}
          <span className="px-6 py-2">History</span>
        </div>
        <div className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiNoteMultiple} title="Tasks" size={1} />{" "}
          <span className="px-6 py-2">Tasks</span>
        </div>
        <div className="text-white px-3 flex items-center sm:text-xl text-3xl">
          <Icon path={mdiAccountGroup} title="Communities" size={1} />{" "}
          <span className="px-6 py-2">Communities</span>
        </div>
      </div>

      <div className="text-white px-3 flex items-center sm:text-xl text-3xl">
        <Icon path={mdiCog} title="Settings" size={1} />{" "}
        <span className="px-4 py-2">Settings</span>
      </div>
      <div className="text-white px-3 flex items-center sm:text-xl text-3xl">
        <Icon path={mdiHelpBox} title="Support" size={1} />{" "}
        <span className="px-4 py-2">Support</span>
      </div>
      <div className="text-white px-3 flex items-center sm:text-xl text-3xl">
        <Icon path={mdiShieldCheck} title="Privacy" size={1} />{" "}
        <span className="px-4 py-2">Privacy</span>
      </div>

      <button
        onClick={() => setOpenModal(!openModal)}
        className={`${
          openModal ? "block" : "hidden"
        } text-white fixed bottom-24 left-4`}
      >
        <Icon path={mdiCloseThick} title="Close Dashboard" size={3} />
      </button>
    </div>
  );
};

export default Sidebar;
