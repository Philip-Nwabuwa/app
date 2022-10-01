import React from "react";
// import { Link } from "react-router-dom";
import PropertyItem from "./projectitem";
import PropertyImg from "../assets/projects/property.jpg";
import NetflixImg from "../assets/projects/netflix.jpg";
import TwitchImg from "../assets/projects/twitch.jpg";

const projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">what i've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <PropertyItem
            title="Property Finder"
            background={PropertyImg}
            projectUrl="/property"
          />

          <PropertyItem
            title="Netflix"
            background={NetflixImg}
            projectUrl="/netflix"
          />

          <PropertyItem
            title="twitch"
            background={TwitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default projects;
