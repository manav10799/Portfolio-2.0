import React from "react";
import { EXPERIENCE } from "../constants";
import WorkInfo from "./WorkInfo";

const Experiences = () => {
  return (
    <div className="mt-4 border-b border-dashed border-gray-300 pb-4">
      <div className="flex items-center">
        <p className="text-gray-400 font-bold text-lg">Experiences</p>
        <i className="bi bi-briefcase text-gray-400 ml-2 font-bold"></i>
      </div>
      <div className="mt-4">
        {EXPERIENCE.map((exp) => (
          <WorkInfo exp={exp} key={exp.id} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
