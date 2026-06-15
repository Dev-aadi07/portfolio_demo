import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const toolStyle =
    "px-4 py-2 bg-zinc-800 text-white text-xs rounded-2xl border border-zinc-500";
  const tools = [
    "Tailwind CSS",
    "Alpine.js",
    "Figma",
    "HTML/CSS",
    "JavaScript",
    "Symfony",
    "Framer",
    "Webflow",
  ];

  return (
    <div id="about" className="w-full px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto py-22 px-6 flex">
        <motion.div
          className="left w-1/2 py-16 pr-24 pl-18 flex justify-center items-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ amount: 0.2 }}
        >
          <div className="w-full h-96 overflow-hidden rounded-3xl">
            <img
              className="w-full h-full object-cover"
              src="/assets/profile.jpg"
              alt="profile"
            />
          </div>
        </motion.div>

        <motion.div
          className="right w-1/2 flex flex-col py-16"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.15,
          }}
          viewport={{ amount: 0.2 }}
        >
          <span className="text-orange-500">ABOUT ME</span>

          <div className="text-white text-4xl font-bold">
            <h1>
              A bit about <br /> who I am
            </h1>
          </div>

          <div className="pt-4 text-zinc-500 font-medium flex flex-col gap-2">
            <p>
              I'm Eliott, a freelance designer and frontend developer based in
              Paris with 5 years of experience shipping digital products for
              startups, agencies, and scale-ups across Europe. I thrive at the
              intersection of great design and clean code.
            </p>
            <p>
              I believe great interfaces are invisible — they get out of the
              user's way. My work is fast, accessible and built to last. When
              I'm not coding, you'll find me hiking or hunting for a good
              espresso.
            </p>
          </div>

          <h1 className="text-zinc-500 text-[14px] font-semibold pt-4 pb-2">
            STACK & TOOLS
          </h1>

          <motion.div
            className="toolsContainer w-full flex flex-wrap gap-1.5"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {tools.map((tool) => (
              <motion.div
                key={tool}
                className={toolStyle}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                {tool}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
