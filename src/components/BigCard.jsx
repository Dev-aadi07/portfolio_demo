import React from 'react'

const BigCard = ({image, imageHeight = "h-72", className, text1, text2, text3, title, para1, para2, para3, para4}) => {
  const style = "px-4 py-2 rounded-full bg-zinc-800 flex justify-center items-center text-xs text-zinc-300"
  return (
    <div className={`flex flex-col bg-zinc-900 rounded-2xl overflow-hidden hover:-translate-y-1 transition duration-300 ${className}`}>

      <div className={`overflow-hidden ${imageHeight}`}>
        <img
          src={image}
          alt="picture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className='py-4 px-6 gap-2 flex flex-col'>

        <div className='w-full flex justify-start gap-4'>
          <div 
              className="w-16 h-8 px-4 rounded-full bg-zinc-800 
              flex justify-center items-center 
              text-xs font-semibold text-orange-500 border border-zinc-700"
              >
              {text1}
            </div>
          <div className={style}>{text2}</div>
          <div className={style}>{text3}</div>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl text-white font-bold'>{title}</h1>

          <div className='flex flex-col gap-4 text-[14px] text-zinc-400'>
            <p>
              {para1}
            </p>
            <p className='text-zinc-400'>
              {para2}
            </p>
            <p className='text-zinc-400'>
              {para3}
            </p>
            <p className='text-zinc-400'>
              {para4}
            </p>
          </div>

          <h2 className='font-semibold text-white text-[14px] cursor-pointer hover:text-zinc-400'>View case study →</h2>
        </div>

      </div>

    </div>
  )
}

export default BigCard