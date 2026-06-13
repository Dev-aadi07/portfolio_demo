import React from "react";
import Button from "../components/Button";

const Hero = () => {
  const spanStyle = "pt-2 font-light text-xs text-gray-400"
  return (
    <div id="home" className="w-full relative overflow-hidden min-h-screen px-6">
      <div className="absolute right-0 top-40 w-125 h-125 rounded-full bg-orange-500/10 blur-[140px]"> </div>

      <div className="max-w-6xl mx-auto flex py-36 px-6">
        <div className="left w-1/2 flex flex-col gap-8">

          <span className="text-orange-500">AVAILABLE FOR WORK</span>

          <div className="text-white text-6xl font-bold">
            <h1>Hi, I'm <span className="text-orange-500">Adarsh</span>
            </h1>
          </div>

          <div className="text-zinc-500 font-medium text-xl">
            <p>
              Freelance {" "}
              <span className="text-zinc-300">
                UI/UX Designer & Frontend <br /> Developer
              </span>
              . I design and build digital products <br /> that people love to use -
              fast, clean, and <br /> accessible.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button
              className ="bg-white px-7 py-3 hover:bg-gray-100 transition duration-300 rounded-full cursor-pointer" 
              text="View my work"
              icon=" »"
              />
            <Button
              className ="px-7 py-3 text-zinc-100 border border-zinc-500 hover:bg-zinc-900 transition duration-300 rounded-full cursor-pointer" 
              text="Get in touch"
              />

          </div>

          <div className="pt-12 flex w-1/2 justify-between font-bold text-white text-3xl">
            <div className="flex flex-col">
              34+
              <span className={spanStyle}>Projects done</span>
            </div>
            <div className="flex flex-col">
              21+
              <span className={spanStyle}>Happy clients</span>
            </div>
            <div className="flex flex-col">
              5y
              <span className={spanStyle}>Experience</span>
            </div>
          </div>
        </div>

        <div className="right pl-36 pb-6 pt-16 flex justify-center items-center w-1/2">
          <div  className="w-full h-96 overflow-hidden rounded-3xl">
            <img 
              src="/assets/profile.jpg" 
              alt="profile" 
              className="w-full h-full object-cover"
              />
          </div>
          
          <div className="absolute bottom-42 right-1/3 z-10 px-5 py-3 text-white font-bold text-xs rounded-2xl bg-orange-500">
            Open to projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
