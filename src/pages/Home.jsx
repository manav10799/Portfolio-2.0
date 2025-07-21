import React from "react";
import { Link } from "react-router";
import TechStack from "./TechStack";
import Experiences from "./Experiences";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="px-4">
      <div className="flex items-center">
        <div>
          <div>
            <h1 className="text-2xl font-semibold">
              👋 Hi, I'm Manav Arora — Software Engineer
            </h1>
            <p className="mt-4 text-gray-700">
              I'm a Software Engineer from planet Earth 🌍 who enjoys creating
              smooth and responsive web experiences. With 4+ years of
              experience, I focus on building modern web apps using
              <strong> Angular</strong>, <strong>React</strong>, and
              <strong> JavaScript</strong>.
            </p>
          </div>
          <p className="text-gray-700 text-center mt-6 group custom-cursor">
            When the{" "}
            <span className="group-hover:font-bold transition">
              code compiles
            </span>{" "}
            and the sun's out, I trade screen time for{" "}
            <span className="group-hover:font-bold transition">
              mountain views
            </span>{" "}
            and{" "}
            <span className="group-hover:font-bold transition">gym reps</span>.⇣
          </p>
          <Link to="/about">
            <div className="mt-3 cursor-pointer custom-cursor">
              <div className="group relative text-sm/6 text-sky-800 dark:text-sky-300 py-2 px-4 text-center">
                <span className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30"></span>
                {"<"}Beyond the Code /{">"}
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  className="absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50"
                >
                  <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  className="absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50"
                >
                  <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  className="absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50"
                >
                  <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  className="absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50"
                >
                  <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <TechStack />
      <Experiences />
      <Projects />
    </div>
  );
};

export default Home;
