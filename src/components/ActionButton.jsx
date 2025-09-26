import React from "react";

const ActionButton = ({ name, onClick, iconClass, href }) => {
  return (
    <a href={href} target="/blank">
      <button onClick={onClick} className="lg-btn text-black">
        <span>{name}</span>
        <i className={`bi ${iconClass} flex justify-end items-center pr-4`}></i>
      </button>
    </a>
  );
};

export default ActionButton;
