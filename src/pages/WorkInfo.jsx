import React, { useState } from "react";
import WorkDetails from "./WorkDetails";

const WorkInfo = ({ exp }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <div>
      <div
        key={exp.id}
        className="bg-white/30 dark:bg-neutral-800/30 
                border border-white/60 dark:border-white/20 
                rounded-xl shadow-lg dark:shadow-black/40 
                backdrop-blur-md p-8 mb-4"
      >
        <img className="w-20 cursor-pointer mr-2 mb-2" src={exp.logo} />
        <p className="text-gray-900">{exp.position}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-[10px] mt-1 text-gray-600">{exp.location}</p>
            <span className="mx-2 text-gray-500">|</span>
            <p className="text-[10px] mt-1 text-gray-600">{exp.timeline}</p>
          </div>
          <i
            onClick={() => setShowAccordion((prev) => !prev)}
            className={`bi ${
              showAccordion ? "bi-chevron-double-up" : "bi-chevron-double-down"
            } ml-2 cursor-pointer`}
          ></i>
        </div>
        <WorkDetails
          workDetails={exp.workDetails}
          show={showAccordion}
        ></WorkDetails>
      </div>
    </div>
  );
};

export default WorkInfo;
