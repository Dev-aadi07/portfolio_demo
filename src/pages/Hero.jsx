import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  const spanStyle = "pt-2 font-light text-xs text-gray-400";
  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  });

  return (
    <div
      id="home"
      className="w-full relative overflow-hidden min-h-screen px-6"
    >
      <div className="absolute right-0 top-40 w-125 h-125 rounded-full bg-orange-500/10 blur-[140px]">
        {" "}
      </div>

      <div className="max-w-6xl mx-auto flex py-36 px-6">
        <div className="left w-1/2 flex flex-col gap-8">
          <motion.span className="text-orange-500" {...fadeUp(0)}>
            AVAILABLE FOR WORK
          </motion.span>

          <motion.div
            className="text-white text-6xl font-bold"
            {...fadeUp(0.15)}
          >
            <h1>
              Hi, I'm <span className="text-orange-500">Adarsh</span>
            </h1>
          </motion.div>

          <motion.div
            className="text-zinc-500 font-medium text-xl"
            {...fadeUp(0.3)}
          >
            <p>
              Freelance{" "}
              <span className="text-zinc-300">
                UI/UX Designer & Frontend <br /> Developer
              </span>
              . I design and build digital products <br />
              that people love to use - fast, clean, and <br />
              accessible.
            </p>
          </motion.div>

          <motion.div className="flex gap-4" {...fadeUp(0.45)}>
            <Button
              className="bg-white px-7 py-3 hover:bg-gray-100 transition duration-300 rounded-full cursor-pointer"
              text="View my work"
              icon=" »"
            />

            <Button
              className="px-7 py-3 text-zinc-100 border border-zinc-500 hover:bg-zinc-900 transition duration-300 rounded-full cursor-pointer"
              text="Get in touch"
            />
          </motion.div>

          <motion.div
            className="pt-12 flex w-1/2 justify-between font-bold text-white text-3xl"
            {...fadeUp(0.6)}
          >
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
          </motion.div>
        </div>

        <div className="right pl-36 pb-6 pt-16 flex justify-center items-center w-1/2">
          <motion.div
            className="w-full h-96 overflow-hidden rounded-3xl"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-42 right-1/3 z-10 px-5 py-3 text-white font-bold text-xs rounded-2xl bg-orange-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
          >
            Open to projects
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
