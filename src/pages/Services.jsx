import React from 'react'
import Card from '../components/Card'
import { FaCode, FaComputer } from "react-icons/fa6";
import { HiOutlineChartPie } from "react-icons/hi";

const Services = () => {
  return (
    <div id="services" className='w-full bg-[#111114] px-6'>
      <div className='max-w-6xl mx-auto flex flex-col gap-2 py-22 px-6'>
          <span className='text-orange-500 text-xs'>WHAT I DO</span>
          <span className='text-5xl text-white font-bold'>Services</span>

          <div className='flex justify-between pt-10'>
            <Card 
              icon={<FaComputer/>}
              text="UI/UX Design"
              subtext="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
            />

            <Card 
              icon={<FaCode/>}
              text="UI/UX Design"
              subtext="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
            />

            <Card 
              icon={<HiOutlineChartPie/>}
              text="UI/UX Design"
              subtext="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
            />
          </div>
      </div>
    </div>
  )
}

export default Services