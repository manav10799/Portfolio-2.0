import React from "react";

const ActionButton = ({ name, onClick, iconClass, href }) => {
  return (
    <a href={href} target="/blank">
      <button
        onClick={onClick}
        className="hover:bg-gray-300 bg-gray-200 w-[150px] text-start pl-4 py-2 mt-2 rounded-2xl text-xs cursor-pointer grid grid-cols-2 text-gray-700"
      >
        <span>{name}</span>
        <i className={`bi ${iconClass} flex justify-end items-center pr-4`}></i>
      </button>
    </a>
  );
};

export default ActionButton;
