import React from "react";
import BigCard from "../components/BigCard";
import abstract from "/assets/abstract.jpg";
import phoneInHand from "/assets/phoneInHand.jpg";
import laptopDashboard from "/assets/laptopDashboard.jpg";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div id="work" className="w-full bg-black px-6">
      <div className="max-w-6xl mx-auto py-22 px-6">
        <motion.span
          className="text-orange-500 font-bold text-xs"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }}
        >
          PORTFOLIO
        </motion.span>

        <motion.div
          className="text-white font-bold text-5xl flex justify-between items-end"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Selected work
          <span className="text-[14px]  text-zinc-400 cursor-pointer hover:text-zinc-300">
            All projects →
          </span>
        </motion.div>

        <div className="h-226 flex gap-6 pt-24 ">
          <motion.div
            className="left w-1/2 h-full rounded-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.2 }}
          >
            <BigCard
              image={phoneInHand}
              className="h-full"
              text1="SaaS"
              text2="Figma"
              text3="Tailwind"
              title="Novu - SaaS Dashboard"
              para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis, odit nam aperiam fugiat optio libero. Nisi, minus officiis eius odio tempora velit fugit at, id labore ut libero reiciendis!"
              para2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ducimus repudiandae eligendi veritatis dicta quo fuga fugiat autem tempore perspiciatis illo doloremque est labore, molestiae eius, voluptatum ex aut quibusdam."
              para3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque ipsum eveniet eligendi dolores, dicta beatae? Velit iusto nemo praesentium architecto, ipsa excepturi facere quisquam, reprehenderit a cumque sapiente? Laudantium!"
              para4="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque ipsum eveniet eligendi dolores, dicta beatae? Velit iusto nemo praesentium architecto, ipsa excepturi facere quisquam, reprehenderit a cumque sapiente? Laudantium!"
            />
          </motion.div>

          <motion.div
            className="right w-1/2 h-full flex flex-col gap-6 rounded-2xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.2 }}
          >
            <BigCard
              image={laptopDashboard}
              imageHeight="h-56"
              text1="Fintech"
              text2="Landing Page"
              text3="Research"
              title="Finlo - Fintech App"
              para1="Marketing site and onboarding flow for a personal finance app targeting young professionals. Tailwind CSS + Alpine.js. "
            />
            <BigCard
              image={abstract}
              imageHeight="h-56"
              text1="Agency"
              text2="Animation"
              text3="Art"
              title="Orea — Creative Agency"
              para1="Bold editorial site for a Paris-based branding studio. Scroll-driven animations and custom cursor to match their premium positioning."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
