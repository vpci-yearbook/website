"use client"

import React from 'react'
import { Button } from '../ui/button'
import { CircleArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation';

const Section3 = () => {
  const router = useRouter();

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 flex flex-col-reverse md:flex-row sm:py-16 lg:px-6">
        <div class="flex-1 place-self-center">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
                UPLOAD YOUR PHOTOS
              </h1>
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                You don’t need to be a qualified photographer - pictures uploaded here are sourced from the camera rolls of regular students. If you’d like to see a photo of yourself or your friends in the gallery or yearbook, just take one and upload it!  
              </p>
          </div>
          <div 
            className="w-full relative cursor-pointer flex-1"
            onClick={() => router.push(`/upload`)}            
          >
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 8000x4000px)</p>
                </div>
              </label>
            </div>
            <div className='absolute -bottom-8 left-0 bg-black p-4'>
              <p className='text-white text-xl'>
                UPLOAD YOUR
                <br />
                PHOTOS!
                <span className='mt-2 flex flex-row items-center gap-2'>
                  <span className='bg-white h-[0.2px] w-16'/>
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