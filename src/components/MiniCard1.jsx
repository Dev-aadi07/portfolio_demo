import React from 'react'

const MiniCard1 = ({image, text1, date, headline, para}) => {
  return (
    <div className='flex flex-col rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:-translate-y-1 transition duration-300'>
      <div className='image-container h-44'>
        <img className='object-cover w-full h-full' src={image} alt="phote" />
      </div>
      <div className='details py-6 px-6 pb-10 flex flex-col gap-2'>

        <div className='flex gap-2'>
          <div className='px-3 text-xs flex items-center rounded-2xl text-orange-500 bg-zinc-800 border border-zinc-700'>{text1}</div>
          <div className='py-2 text-zinc-400 text-xs'>{date}</div>
        </div>

        <div className='flex flex-col gap-2 text-white font-bold'>
          <h1 className='text-[18px]'>{headline}</h1>
          <p className='text-[14px] text-zinc-400 font-normal'>{para}</p>
          <h2 className=''>Read more →</h2>
        </div>

      </div>

    </div>
  )
}

export default MiniCard1