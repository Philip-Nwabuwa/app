import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/navLogo.svg";
import NavbarLogo from "../assets/navLogo.svg";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="fixed w-full h-20 shadow-xl bg-[#ffffff]">
        <div className="flex justify-between sticky top-[0%] z-[99] items-center w-full h-full px-2 2xl:px-16">
          <Link to="/">
            <img
              className="cursor-pointer"
              src={Logo}
              width={70}
              height={35}
              alt="/"
            />
          </Link>

          <div>
            <ul className="hidden md:flex">
              <Link to="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link to="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link to="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link to="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Project
                </li>
              </Link>
              <Link to="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-4 pl-5 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-4 pl-5 ease-in duration-500"
          }
        >
          <div className="z-[100]">
            <div className="flex w-full items-center justify-between">
              <img src={NavbarLogo} width="75" height={25} alt="/" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-2">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase">
              <Link to="/">
                <li className="py-3 text-sm">Home</li>
              </Link>
              <Link to="/">
                <li className="py-3 text-sm">About</li>
              </Link>
              <Link to="/">
                <li className="py-3 text-sm">Skills</li>
              </Link>
              <Link to="/">
                <li className="py-3 text-sm">Project</li>
              </Link>
              <Link to="/">
                <li className="py-3 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-6">
              <p className="tracking-widest uppercase text-[#5653e5]">
                let's connect
              </p>
              <div className="flex items-center justify-between my-6 w-full sm-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
