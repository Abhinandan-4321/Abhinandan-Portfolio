import Link from 'next/link' 
import React from 'react'
import { MovingBorderBtn } from './ui/moving-border'

const HeroSection = () => {

  return (
    <div className='min-h-[60vh] flex flex-col-reverse lg:gap-0 gap-14 lg:flex-row items-center justify-between'>
        <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl font-bold'>
                Nice to meet you! 👋
                <br/> <span className='underline underline-offset-8 decoration-green-500'>{"I'm Abhinandan."}</span>
            </h1>
            <p className='md:w-[30vw] text-lg text-gray-300'>
                {
                    "Based in Himachal Pradesh, I’m a Fullstack developer who blends creativity with technical expertise to deliver web applications that delight users."
                }
            </p>

            <Link href={"mailto:abhinandanguptaworks@gmail.com"} className='inline-block hover:text-green-400 transition-all hover:-rotate-2'>
                <div>
                    <h1 className='text-3xl font-bold'>Contact Me 📫</h1>
                    <div className='w-full h-2 bg-green-500 rounded-full'></div>
                    <div className='w-full h-2 bg-indigo-500 rounded-full translate-x-2'></div>
                </div>        
            </Link>
        </div>

        <div className='relative'>
            <div className='w-27 h-72 space-y-3 -rotate-[30deg]'>
                <div className='flex gap-3 translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-green-500'></div>  
                    <div className='w-32 h-32 rounded-full bg-indigo-500'></div>  
                </div>
                <div className='flex gap-3 -translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>  
                    <div className='w-32 h-32 rounded-full bg-green-500'></div>  
                </div>
                <div className='glow absolute top-[40%] right-[50%]'></div>
            </div>
            <div className='absolute bottom-5 sm:bottom-10 left-0 sm:left-10'>
                <MovingBorderBtn borderRadius='0.4rem' className='p-3 font-semibold'>
                    📢 Available for Work
                </MovingBorderBtn>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
