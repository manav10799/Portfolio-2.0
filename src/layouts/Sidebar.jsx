import React, { useEffect, useState } from "react";
import ActionButton from "../components/ActionButton";
import Navigation from "./Navigation";

const SideBar = () => {
  const handleSendMail = () => {};
  const handleResume = () => {};
  const [showMenu, setShowMenu] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="pr-10 lg:h-screen h-min overflow-auto lg:sticky lg:top-0 lg:w-min z-1 pt-10 lg:pl-0 pl-10 border-b border-dashed lg:border-0 lg:pb-0 pb-4 border-gray-300">
      <div>
        <div>
          <div className="flex justify-between">
            <img
              src="https://i.ibb.co/qY1hMPz7/VEE02589.jpg"
              alt="Profile Image"
              className="lg:w-20 w-10 h-10 rounded-full lg:h-20 object-cover cursor-grab"
            />
            <i
              className={`bi ${
                !showMenu ? "bi-list" : "bi-x"
              } text-2xl lg:hidden`}
              onClick={() => setShowMenu((prev) => !prev)}
            ></i>
          </div>
          {showMenu ? (
            <React.Fragment>
              <h3 className="text-xl">Manav Arora</h3>
              <p className="text-xs font-light mt-1">manav10799@gmail.com</p>
            </React.Fragment>
          ) : null}
        </div>
        {showMenu ? (
          <React.Fragment>
            <div className="mt-4">
              <ActionButton
                name="Send Mail"
                onClick={handleSendMail}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=manav10799@gmail.com"
                iconClass="bi-arrow-right-circle"
              />
              <ActionButton
                name="Resume"
                onClick={handleResume}
                href="https://drive.google.com/file/d/1spk0ot3_FCRHEY1_HPx477F01EmfpJ_N/view?usp=sharing"
                iconClass="bi-box-arrow-down"
              />
            </div>
            <Navigation />
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};
export default SideBar;
