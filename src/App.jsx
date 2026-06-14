import React from 'react'
import Navbar from './components/Navbar'
import Hero from '../src/pages/Hero'
import Services from '../src/pages/Services'
import Work from './pages/Work'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='bg-black min-h-screen'>
      <Navbar />
      <Hero/>
      <Services/>
      <Work/>
      <About/>
      <Reviews/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default App