import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import CurrentRouteContext from "../store/UseContext";

const Navigation = () => {
  const [selectedRoute, setSelectedRoute] = useState();
  const currentRoute = useContext(CurrentRouteContext);
  useEffect(() => {
    setSelectedRoute(currentRoute);
  }, [currentRoute]);
  const route = [
    {
      id: 1,
      path: "/",
      name: "Home",
      iconClass: "bi-house-heart",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
      iconClass: "bi-person",
    },
  ];
  return (
    <div className="mt-6">
      <div>
        <p className="text-sm text-gray-500">Menu</p>
        <ul className="mt-2 w-[200px]">
          {route.map((r) => (
            <Link
              to={r.path}
              key={r.id}
              onClick={() => setSelectedRoute(r.path)}
            >
              <div
                className={`flex items-center py-1.5 px-2 ${
                  selectedRoute === r.path
                    ? "bg-black/90 text-white rounded-2xl px-2 dark:bg-gray-200 dark:text-gray-700"
                    : ""
                }`}
              >
                <i className={`bi ${r.iconClass} text-lg px-1`}></i>
                <li className="ml-2">{r.name}</li>
              </div>
            </Link>
          ))}
          <div className={`flex items-center py-1.5 px-2`}>
            <i className={`bi bi-linkedin text-lg px-1`}></i>
            <li className="ml-2">
              <a href="https://www.linkedin.com/in/manav10799/" target="/blank">
                Linkedin
              </a>
            </li>
          </div>
          <div className={`flex items-center py-1.5 px-2`}>
            <i className={`bi bi-github text-lg px-1`}></i>
            <li className="ml-2">
              <a href="https://github.com/manav10799" target="/blank">
                Github
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
