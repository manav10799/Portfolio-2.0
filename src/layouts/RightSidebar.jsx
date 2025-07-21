import React, { useEffect, useState } from "react";
import { CERTFICATES, ICON_CDN } from "../constants";

const RightSidebar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    window.document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className="pl-10">
      <div className="flex">
        <span className="mr-2">Change theme: </span>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={handleTheme}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <i className="bi bi-moon-stars-fill text-yellow-400"></i>
            <i className="bi bi-brightness-high text-yellow-400"></i>
            <span className="ball"></span>
          </label>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-gray-800 text-sm">Extra stuff 🤘🏻👀</p>
        <div>
          <p className="mt-4 text-lg text-gray-800">Certifications</p>
          <ul className="list-disc ml-4 mt-2 text-blue-700">
            {CERTFICATES.map((c, id) => (
              <li className="cursor-pointer" key={id}>
                {
                  <a href={c.href} target={c.target} title={c?.tooltip}>
                    {c.title}
                  </a>
                }
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mt-4 text-lg text-gray-800">Education</p>
          <p className="text-wrap w-[250px] mt-2 text-gray-800 text-sm">
            Bachelor of Technology (B.Tech) in Information Technology Chandigarh
            Group of Colleges (CGC), Landran July 2017 - May 2021
          </p>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-gray-700 mr-2">Checkout my </p>
          <a href="https://www.instagram.com/manav._arora" target="/blank">
            <img className="w-5 cursor-pointer" src={`${ICON_CDN}instagram`} />
          </a>
        </div>
        <p className="text-gray-700 w-[250px] text-sm mt-2 pb-2">
          Oh, and yeah — I've made a few videos that got a total of 26 million
          views. Not showing off... okay, maybe just a little. 🙃
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;
