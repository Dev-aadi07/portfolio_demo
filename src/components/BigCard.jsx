import React from 'react'

const BigCard = ({image, className, text1, text2, text3, title, para1, para2, para3}) => {
  const style = "px-4 py-2 rounded-full bg-zinc-800 flex justify-center items-center text-xs text-zinc-300"
  return (
    <div className='flex flex-col gap-2 h-full bg-zinc-900'>
      <img className="rounded-2xl h-92"  src={image} alt="picture" />

      <div className='py-4 px-6 gap-2 flex flex-col justify-between'>

        <div className='w-full flex justify-start gap-4'>
          <div 
              className="w-16 h-8 px-4 rounded-full bg-zinc-800 
              flex justify-center items-center 
              text-xs font-semibold text-orange-500 border border-zinc-500"
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
          </div>

          <h2 className='font-semibold text-white text-[14px]'>View case study →</h2>
        </div>

      </div>

    </div>
  )
}

export default BigCard