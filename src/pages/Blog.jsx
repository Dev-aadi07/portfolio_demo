import React from 'react'
import MiniCard1 from '../components/MiniCard1'
import laptop from '/assets/laptop.jpg'

const Blog = () => {
  return (
    <div id='blog' className='w-full px-6 bg-[#111111]'>
      <div className='max-w-6xl mx-auto flex flex-col gap-2 py-22 px-6'>
        <span className='text-orange-500'>THOUGHTS</span>

        <div className='flex justify-between items-end font-bold'>
          <h1 className='text-5xl text-white'>From the blog</h1>
          <h3 className='text-xs text-zinc-400'>All articles →</h3>
        </div>

        <div className='card-container flex gap-4 py-12'>
          <MiniCard1 
            image={laptop}
            text1="Design"
            date="Mar 8, 2025"
            headline="Why I ditched heavy CSS frameworks for Tailwind"
            para="After years of fighting specificity wars, here's what finally convinced me to make the switch."
          />
          <MiniCard1 
            image={laptop}
            text1="Dev"
            date="Feb 21, 2025"
            headline="Building a design system from scratch in a weekend"
            para="Tokens, components, docs - the process I follow to spin up a coherent system in 48 hours."
          />
          <MiniCard1 
            image={laptop}
            text1="Freelance"
            date="Jan 14, 2025"
            headline="5 lessons from my first year of full-time freelancing"
            para="Contracts, pricing, scope creep - the things nobody tells you before you go solo."
          />
        </div>
      </div>
    </div>
  )
}

export default Blog