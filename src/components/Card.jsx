import React from 'react'

const Card = ({icon, text, subtext}) => {
  return (
    <div className='w-88 h-68 rounded-xl bg-[#1f1f1f] p-8 pb-0 flex flex-col gap-4 hover:-translate-y-1   transition duration-300 cursor-pointer'>
      <div className='w-12 h-12 text-orange-500 text-xl rounded-xl bg-red-400/20 flex items-center justify-center'>
        {icon}
      </div>
      <h2 className='font-bold text-white text-xl'>
      {text}
      </h2>
      <p className='font-light text-[16px] text-gray-400'>
        {subtext}
      </p>
    </div>
  )
}

export default Card