import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import propertyImg from "../assets/projects/property.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const propertycontent = () => {
  return (
    <div>
      <div className="w-full absolute top-[78px] z-0">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <img
            className="absolute object-cover w-full h-[30vh] lg:h-[40vh]"
            layout="fill"
            src={propertyImg}
            alt=""
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full m-2 left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
            <h2 className="py-4">Property Finder</h2>
            <h3>React JS / Tailwind / Firebase</h3>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p className="max-w-[800px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam sit suscipit a quod magnam ratione dolorum consectetur
              culpa deleniti odio aspernatur fugiat, magni cum facere, sapiente
              dicta labore! Quibusdam, dicta?
            </p>
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            <button className="px-8 py-2 mt-4">Code</button>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl pt-3 p-1">
            <div className="p-1">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="items-center text-gray-600 flex py-2">
                  <RiRadioButtonFill className="pr-1" />
                  React
                </p>
                <p className="items-center text-gray-600 flex py-2">
                  <RiRadioButtonFill className="pr-1" />
                  Tailwind
                </p>
                <p className="items-center text-gray-600 flex py-2">
                  <RiRadioButtonFill className="pr-1" />
                  Firebase
                </p>
                <p className="items-center text-gray-600 flex py-2">
                  <RiRadioButtonFill className="pr-1" />
                  Google API
                </p>
              </div>
            </div>
          </div>
          <Link to="/#project">
            <p className="cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default propertycontent;
