import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto sm:pt-4 pt-2 flex justify-center items-center">
        <div>
          <p className="text-sm uppercase tracking-widest mt-4 text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 font-bold text-4xl text-gray-700">
            Hi, I'm
            <span className="text-[#5651e5] text-6xl">
              {" "}
              Philip <div className="md:inline hidden">Nwabuwa</div>
            </span>
          </h1>
          <h1 className="py-4 font-bold md:text-4xl text-2xl text-gray-700">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[80%] m-auto">
            i'm a front-end web developer speciallzing in building (occasionally
            designing) exceptional digital experiences. currently, i'm focused
            on building responsive front-end web applications .
          </p>
          <div className="flex max-w-[330px] items-center justify-between m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
