import React from "react";

const WorkDetails = ({ workDetails, show }) => {
  return (
    <div>
      <ul
        className={`text-gray-700 mt-2 list-disc ml-4 ${!show ? "hidden" : ""}`}
      >
        {workDetails.map((details, i) => (
          <li key={i}>{details}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkDetails;
