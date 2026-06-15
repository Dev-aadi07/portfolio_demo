import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";

const MiniCard = ({para, name, designation}) => {
  return (
    <div className='bg-zinc-900 px-6 py-6 flex flex-col gap-2 rounded-xl border border-zinc-700'>
      <div className='text-orange-500 flex gap-0.5 py-1'>
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
      </div>
      <p className='text-zinc-500 text-[16px] italic'>{para}</p>

      <div className='flex flex-col'>
        <h1 className='text-white text-[12px] font-bold'>{name}</h1>
        <h2 className='text-zinc-500 text-[12px]'>{designation}</h2>
      </div>
    </div>
  )
}

export default MiniCard