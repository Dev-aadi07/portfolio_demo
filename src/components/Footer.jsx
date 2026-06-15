import React from 'react'
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className='border border-t-zinc-900 h-10 w-full'>
      <div className='max-w-6xl mx-auto px-6 py-6 flex justify-between items-center'>
        <div className='flex flex-col font-semibold'>
          <h1 className='text-[12px] text-zinc-500 flex items-center gap-1'>
            <MdOutlineCopyright />
            Eliott. All rights reserved.</h1>
          <h1 className='text-[14px] text-zinc-500'>Developed by <span className='text-zinc-400'> Laurent Begey </span> • Distributed by 
          <span className='text-zinc-400'> ThemeWagon </span></h1>
        </div>
        <h1 className='text-xs text-zinc-500'>Built with Tailwind CSS & Alpine.js</h1>
      </div>
    </div>
  )
}

export default Footer