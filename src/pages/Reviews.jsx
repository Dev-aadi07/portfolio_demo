import React from 'react'
import MiniCard from '../components/MiniCard'

const Reviews = () => {
  return (
    <div id="reviews" className='w-full px-6'>
      <div className='max-w-6xl mx-auto py-22 px-6 gap-2 flex flex-col'>
        <span className='text-orange-500 text-xs'>SOCIAL PROOF</span>
        <h1 className='text-5xl font-bold text-white'>What clients say</h1>

        <div className='py-10 w-full flex gap-4'>
          <MiniCard 
            para="Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend."
            name="Sarah Müller"
            designation="CPO, Novu"
          />
          <MiniCard 
            para="Working with Eliott is a dream. He asks the right questions, moves fast, and the final result always exceeds what we imagined. Our best hire of 2024."
            name="Thomas Renault"
            designation="CFounder, Finlo"
          />
          <MiniCard 
            para="We had a tight deadline and a vague brief. Eliott turned both into a polished site in under two weeks. Clean code, zero hand-holding needed."
            name="Camille Dufresne"
            designation="Creative Director, Orea"
          />
        </div>
      </div>
    </div>
  )
}

export default Reviews