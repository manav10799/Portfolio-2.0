import React from "react";
import RightSidebar from "../layouts/RightSidebar";
import SideBar from "../layouts/Sidebar";
import { Outlet, useLocation } from "react-router";
import CurrentRouteContext from "../store/UseContext";

const RootLayout = () => {
  const location = useLocation();
  return (
    <CurrentRouteContext value={location.pathname}>
      <div className="flex justify-center lg:flex-row flex-col">
        <div>
          <SideBar></SideBar>
        </div>
        <div className="border-r-1 border-l-1 lg:w-1/3 border-gray-300 h-auto dark:border-gray-800 mt-10">
          <Outlet />
        </div>
        <div className="mt-10">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </CurrentRouteContext>
  );
};

export default RootLayout;
