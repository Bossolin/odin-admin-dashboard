import React from "react";
import Icon from "@mdi/react";
import { mdiEyePlusOutline, mdiSourceFork, mdiStarPlusOutline } from "@mdi/js";

const Project = ({ name }) => {
  return (
    <div className="py-6 px-6 rounded-lg shadow-md bg-white border-l-8 border-amber-400">
      <h1 className="text-lg">{name}</h1>
      <p className="text-sm font-thin">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At temporibus
        quae soluta deserunt tenetur dolorum aliquid magnam quasi voluptatem
        dignissimos?
      </p>
      <div className="flex justify-end gap-6">
        <Icon path={mdiStarPlusOutline} title="Favorite" size={1} />
        <Icon path={mdiEyePlusOutline} title="Watch" size={1} />
        <Icon path={mdiSourceFork} title="Fork" size={1} />
      </div>
    </div>
  );
};

export default Project;
