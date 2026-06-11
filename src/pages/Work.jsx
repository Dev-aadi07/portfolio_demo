import React from 'react'
import BigCard from '../components/BigCard'
import phoneInHand from '/assets/phoneInHand.jpg'

const Work = () => {
  return (
    <div className='w-full bg-black px-6'>
      <div className='max-w-6xl mx-auto py-22 px-6'>
        <span className='text-orange-500 font-bold text-xs'>PORTFOLIO</span>
        <div className='text-white font-bold text-5xl flex justify-between items-end'>
          Selected work
          <span className='text-[14px]  text-zinc-400'>All projects →</span>
        </div>

        <div className='h-226 bg-violet-500 flex gap-6 pt-24 '>
          <div className='left w-1/2 h-full overflow-hidden rounded-2xl hover:-translate-y-1 transition duration-300'>
            <BigCard 
              image={phoneInHand} 
              text1="SaaS" text2="Figma" text3="Tailwind"
              title="Novu - SaaS Dashboard"
              para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis, odit nam aperiam fugiat optio libero. Nisi, minus officiis eius odio tempora velit fugit at, id labore ut libero reiciendis!"

              para2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ducimus repudiandae eligendi veritatis dicta quo fuga fugiat autem tempore perspiciatis illo doloremque est labore, molestiae eius, voluptatum ex aut quibusdam."

              para3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque ipsum eveniet eligendi dolores, dicta beatae? Velit iusto nemo praesentium architecto, ipsa excepturi facere quisquam, reprehenderit a cumque sapiente? Laudantium!"
              />
              
          </div>


          <div className='right w-1/2 h-full bg-sky-300 flex flex-col gap-2 rounded-2xl'>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Work