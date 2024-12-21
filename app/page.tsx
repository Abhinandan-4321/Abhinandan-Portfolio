import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { Meteors } from './components/ui/meteors'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const Page = () => (
  <div className="min-h-screen bg-black relative">
    <Meteors number={50} className="absolute inset-0 z-0 bg-black"></Meteors>
    <div className="max-w-7xl mx-auto relative z-10 p-5 overflow-hidden">
      <Navbar />
      <div className='mt-10'> 
        <HeroSection />
      </div>
    </div>
    <div className="max-w-7xl mx-auto relative z-10 p-5 mt-24">
      <Skills />
      <Projects />
      <Footer/>
    </div>

    

  </div>
)

export default Page

