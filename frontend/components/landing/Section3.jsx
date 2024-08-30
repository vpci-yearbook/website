"use client"

import React from 'react'
import { Button } from '../ui/button'
import { CircleArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation';

const Section3 = () => {
  const router = useRouter();

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16 grid-cols-2">
          <div class="place-self-center">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
                UPLOAD YOUR PHOTOS
              </h1>
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                You don’t need to be a qualified photographer - pictures uploaded here are sourced from the camera rolls of regular students. If you’d like to see a photo of yourself or your friends in the gallery or yearbook, just take one and upload it!  
              </p>
          </div>
          <div 
            className="w-full relative cursor-pointer"
            onClick={() => router.push(`/upload`)}            
          >
            <img class="w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
            <div className='absolute -bottom-4 -left-4 bg-black p-4'>
              <p className='text-white text-xl'>
                UPLOAD YOUR
                <br />
                PHOTOS!
                <span className='mt-2 flex flex-row items-center gap-2'>
                  <div className='bg-white h-[0.2px] w-16'/>
                  <CircleArrowRight color='white'/>
                </span>
              </p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Section3