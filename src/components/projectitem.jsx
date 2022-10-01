import React from "react";
import { Link } from "react-router-dom";

const projectitem = ({ title, background, projectUrl }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <img
          className="rounded-xl group-hover:opacity-10 "
          src={background}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white uppercase tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">React Js</p>
          <div>
            <Link to={projectUrl}>
              <p className="text-center p-1 rounded-lg mb-3 bg-white text-gray-700 font-bold text-lg cursor-pointer">
                Visit website
              </p>
            </Link>
            <Link to="https://google.com">
              <p className="text-center p-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                View code
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectitem;
