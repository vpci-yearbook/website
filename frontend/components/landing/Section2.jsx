"use client"

import { CircleArrowRight } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation';

const Section2 = () => {
  const router = useRouter();

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div 
            className="relative cursor-pointer"
            onClick={() => router.push(`/gallery`)}            
          >
            <img class="w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
            <div className='absolute -bottom-4 -left-4 bg-black p-4'>
              <p className='text-white text-xl'>
                CHECK OUT 
                <br />
                THE GALLERY!
                <span className='mt-2 flex flex-row items-center gap-2'>
                  <div className='bg-white h-[0.2px] w-16'/>
                  <CircleArrowRight color='white'/>
                </span>
              </p>
            </div>
          </div>
          <div class="mt-4 md:mt-0">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
              11,267 PHOTOS PRESERVED
            </h1>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              We’re VP’s official online photo gallery - now serving 11,267 photos, updated year-round.
            </p>
          </div>
      </div>
    </section>
  )
}

export default Section2