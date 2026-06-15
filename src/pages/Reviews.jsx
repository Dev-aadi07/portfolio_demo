import React from "react";
import MiniCard from "../components/MiniCard";
import { motion } from "framer-motion";

const Reviews = () => {
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
    <div id="reviews" className="w-full px-6">
      <div className="max-w-6xl mx-auto py-22 px-6 gap-2 flex flex-col">
        <motion.span
          className="text-orange-500 text-xs"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }}
        >
          SOCIAL PROOF
        </motion.span>

        <motion.h1
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ amount: 0.2 }}
        >
          What clients say
        </motion.h1>

        <motion.div
          className="py-10 w-full flex gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <motion.div
           variants={cardVariants}
           className="flex-1"
          >
            <MiniCard
              para="Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend."
              name="Sarah Müller"
              designation="CPO, Novu"
              />
          </motion.div>

          <motion.div variants={cardVariants} className="flex-1">

            <MiniCard
              para="Working with Eliott is a dream. He asks the right questions, moves fast, and the final result always exceeds what we imagined. Our best hire of 2024."
              name="Thomas Renault"
              designation="CFounder, Finlo"
              />
          </motion.div>

          <motion.div variants={cardVariants} className="flex-1">

            <MiniCard
              para="We had a tight deadline and a vague brief. Eliott turned both into a polished site in under two weeks. Clean code, zero hand-holding needed."
              name="Camille Dufresne"
              designation="Creative Director, Orea"
              />
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
