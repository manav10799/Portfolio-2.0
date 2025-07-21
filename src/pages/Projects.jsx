import React from "react";
import { ICON_CDN, PROJECTS, techStackIcons } from "../constants";

const Projects = () => {
  return (
    <div className="my-4">
      <div className="flex items-center">
        <p className="text-gray-400 font-bold text-lg">Projects</p>
        <i className="bi bi-braces-asterisk text-gray-400 ml-2 font-bold"></i>
      </div>
      <div className="mt-2">
        {PROJECTS.map((project) => (
          <div className="p-6 rounded-xl shadow-lg" key={project.id}>
            <a href={project.link} target="/blank">
              <img src={project.imageLink} className="rounded-xl" />
            </a>
            <div className="mt-6">
              <div className="flex items-center mb-4 justify-between">
                <a href={project.link} target="/blank">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {project.name}
                  </h3>
                </a>
                <div className="flex gap-4 flex-wrap">
                  {techStackIcons
                    .filter((icon) => icon?.usedIn?.includes(project.name))
                    .map((icon, id) => (
                      <a
                        className="tooltip"
                        key={id}
                        href={icon.link}
                        target="/blank"
                      >
                        <img
                          className="w-5 cursor-pointer"
                          src={`${ICON_CDN}${icon.code}`}
                        />
                        <span className="tooltiptext">{icon.name}</span>
                      </a>
                    ))}
                </div>
              </div>
              <p className="text-center font-semibold text-gray-700 mb-2">
                {project.description[0]}
              </p>
              <ul className="list-disc ml-5 text-gray-700">
                {project.description.map(
                  (des, id) => id !== 0 && <li key={id}>{des}</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
