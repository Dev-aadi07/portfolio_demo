import React from "react";
import { FiSun } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import Button from "./Button";

const Navbar = () => {
  const navItems = ["Services", "Work", "About", "Reviews", "Blog", "Contact"];

  const navLink =
    "text-sm text-gray-400 hover:text-white transition duration-300";

  return (
    <div className="w-full border-b border-zinc-900">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="text-2xl font-bold text-white">
          eli<span className="text-orange-500">ott</span>
        </div>

        <div className="flex items-center gap-7">
          {navItems.map((item) => (
            <a href="#" key={item} className={navLink}>
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-900 transition duration-300 cursor-pointer">
            <FiSun />
          </div>

          <Button
            className=" flex items-center gap-2 px-5 py-2 rounded-full transition duration-300 cursor-pointer bg-orange-500 text-white hover:bg-orange-400 "
            text="Hire me"
            icon=" →"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
