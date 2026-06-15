import React from "react";
import Card from "../components/Card";
import { FaCode, FaComputer } from "react-icons/fa6";
import { HiOutlineChartPie } from "react-icons/hi";
import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div id="services" className="w-full bg-[#111111] px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-2 py-22 px-6">
        <motion.span
          className="text-orange-500 text-xs"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }}
        >
          WHAT I DO
        </motion.span>

        <motion.span
          className="text-5xl text-white font-bold"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ amount: 0.2 }}
        >
          Services
        </motion.span>

        <motion.div
          className="flex justify-between pt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <motion.div variants={cardVariants}>
            <Card
              icon={<FaComputer />}
              text="UI/UX Design"
              subtext="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
              />
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card
              icon={<FaCode />}
              text="UI/UX Design"
              subtext="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
              />
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card
              icon={<HiOutlineChartPie />}
              text="UI/UX Design"
              subtext="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
              />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
