import React from "react";
import AboutLogo from "../assets/about.jpg";

const about = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5653e5]">
            About
          </p>
          <h2 className="py-4">Who i am</h2>
          <p className="py-2 text-gray-600">Lorem ipsum dolor sit amet.</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
            corrupti unde repellat? Sed impedit sequi harum, at pariatur
            corporis eius ex aliquam atque corrupti velit, porro nesciunt ea
            incidunt expedita. Eveniet quam aliquid delectus ipsum? Soluta
            deserunt suscipit vel!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            delectus asperiores explicabo cum maiores dolor, placeat praesentium
            nostrum tempora quisquam quos fugiat numquam dolore eum deleniti
            totam quia blanditiis neque?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
          <img className="rounded-xl" src={AboutLogo} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default about;
