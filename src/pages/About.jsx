import React from 'react'

const About = () => {
  const toolStyle = "px-4 py-2 bg-zinc-800 text-white text-xs rounded-2xl border border-zinc-500"
  return (
    <div id='about' className='w-full px-6 bg-[#111111]'>
      <div className='max-w-6xl mx-auto py-22 px-6 flex'>

          <div className='left w-1/2 py-16 pr-24 pl-18 flex justify-center items-center '>
            <div className='w-full h-96 overflow-hidden rounded-3xl'>
              <img 
                className='w-full h-full object-cover'
                src="/assets/profile.jpg" 
                alt="profile" 
              />
            </div>

          </div>

          <div className='right w-1/2 flex flex-col py-16 '>

            <span className='text-orange-500'>ABOUT ME</span>

            <div className='text-white text-4xl font-bold'>
              <h1>A bit about <br /> who I am</h1>
            </div>

            <div className='pt-4 text-zinc-500 font-medium flex flex-col gap-2'>
              <p>
                I'm Eliott, a freelance designer and frontend developer based in Paris with 5 years of experience shipping digital products for startups, agencies, and scale-ups across Europe. I thrive at the intersection of great design and clean code.
                </p>
                <p>
                I believe great interfaces are invisible — they get out of the user's way. My work is fast, accessible and built to last. When I'm not coding, you'll find me hiking or hunting for a good espresso.
              </p>
            </div>
            
            <h1 className='text-zinc-500 text-[14px] font-semibold pt-4 pb-2'>STACK & TOOLS</h1>

            <div className='toolsContainer w-full flex flex-wrap gap-1.5'>
              <div className={toolStyle}>Tailwind CSS</div>
              <div className={toolStyle}>Alpine.js</div>
              <div className={toolStyle}>Figma</div>
              <div className={toolStyle}>HTML/CSS</div>
              <div className={toolStyle}>JavaScript</div>
              <div className={toolStyle}>Symfony</div>
              <div className={toolStyle}>Framer</div>
              <div className={toolStyle}>Webflow</div>
            </div>

          </div>

      </div>
    </div>
  )
}

export default About