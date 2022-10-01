import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/projects";

const app = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Project />
    </>
  );
};

export default app;
