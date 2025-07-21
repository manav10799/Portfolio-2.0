import React from "react";
import { ICON_CDN, techStackIcons } from "../constants";

const TechStack = () => {
  return (
    <div className="mt-6 pb-6 border-b border-dashed border-gray-300">
      <div className="mb-2">
        <h4>Skill Stack</h4>
      </div>
      <div className="flex gap-4 flex-wrap">
        {techStackIcons.map((icon, id) => (
          <a className="tooltip" key={id} href={icon.link} target="/blank">
            <img
              className="w-10 cursor-pointer"
              src={`${ICON_CDN}${icon.code}`}
            />
            <span className="tooltiptext">{icon.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
