import React from 'react'
import MiniCard1 from '../components/MiniCard1'
import laptop from '/assets/laptop.jpg'
import laptop1 from '/assets/laptop1.jpg'
import sd from '/assets/systemDesign.jpg'
import { motion } from 'framer-motion'

const Blog = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div id='blog' className='w-full px-6 bg-[#111111]'>
      <div className='max-w-6xl mx-auto flex flex-col gap-2 py-22 px-6'>

        <motion.span
          className='text-orange-500'
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }}
        >
          THOUGHTS
        </motion.span>

        <motion.div
          className='flex justify-between items-end font-bold'
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ amount: 0.2 }}
        >
          <h1 className='text-5xl text-white'>From the blog</h1>

          <h3 className='text-xs text-zinc-400 cursor-pointer hover:text-zinc-300'>
            All articles →
          </h3>
        </motion.div>

        <motion.div
          className='card-container flex gap-4 py-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2 }}
        >
          <motion.div variants={cardVariants} className='flex-1'>
            <MiniCard1
              image={laptop}
              text1="Design"
              date="Mar 8, 2025"
              headline="Why I ditched heavy CSS frameworks for Tailwind"
              para="After years of fighting specificity wars, here's what finally convinced me to make the switch."
            />
          </motion.div>

          <motion.div variants={cardVariants} className='flex-1'>
            <MiniCard1
              image={sd}
              text1="Dev"
              date="Feb 21, 2025"
              headline="Building a design system from scratch in a weekend"
              para="Tokens, components, docs - the process I follow to spin up a coherent system in 48 hours."
            />
          </motion.div>

          <motion.div variants={cardVariants} className='flex-1'>
            <MiniCard1
              image={laptop1}
              text1="Freelance"
              date="Jan 14, 2025"
              headline="5 lessons from my first year of full-time freelancing"
              para="Contracts, pricing, scope creep - the things nobody tells you before you go solo."
            />
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default Blog