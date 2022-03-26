import React from "react";
import Icon from "@mdi/react";
import { mdiBellRingOutline, mdiMagnify, mdiViewDashboard } from "@mdi/js";
import img from "../img/cat.jpeg";
import Button from "./Button";

const Header = ({ openModal, setOpenModal }) => {
  return (
    <div
      className={`${
        openModal ? "hidden" : "block"
      } px-8 pt-4 z-10 sm:grid sm:grid-cols-[5fr_3fr] sm:grid-rows-[1fr_2fr] sm:relative fixed w-full sm:row-span-1 bottom-0 bg-white shadow-md `}
    >
      <div className="flex items-center">
        <label htmlFor="search" className="">
          <button>
            <Icon path={mdiMagnify} title="Search" size={1} />
          </button>
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="bg-slate-200 mx-4 rounded-2xl h-8 w-full pl-4 my-2"
        />
      </div>
      <div className="flex items-center justify-center">
        <Icon path={mdiBellRingOutline} title="Alerts" size={1} />
        <div className="mx-8 cursor-pointer">
          <img src={img} alt="Cat" className="rounded-full max-h-12" />
        </div>
        <p className="text-lg">Vladyslav Okipnyak</p>
      </div>
      <div className="my-4 hidden sm:flex items-center">
        <img src={img} alt="Cat" className="rounded-full max-h-20 mx-4" />
        <div className="">
          <p>Hi there,</p>
          <p className="text-2xl">Vladyslav Okipnyak (@Bossolin)</p>
        </div>
      </div>
      <div className={"flex justify-around items-center my-2"}>
        <Button name={"New"} />
        <Button name={"Upload"} />
        <Button name={"Share"} />
      </div>
      <button
        className={`
        ${openModal ? "hidden" : "block"}
        sm:hidden z-10 absolute -top-24 left-6 text-sky-500 `}
        onClick={() => setOpenModal(!openModal)}
      >
        <Icon path={mdiViewDashboard} title="Dashboard" size={3} />
      </button>
    </div>
  );
};

export default Header;
