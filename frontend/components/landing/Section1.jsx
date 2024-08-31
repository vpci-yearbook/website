import React from 'react'
import { Button } from '../ui/button'
import { CircleArrowRight, Dot } from 'lucide-react'
import Link from 'next/link'

const Section1 = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
              HOW IT WORKS
            </h1>
            <span className="mt-2 flex flex-row items-center gap-2">
              LEARN MORE
              <span className="bg-black h-[0.2px] w-16" />
              <CircleArrowRight color="black" />
            </span>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-neutral-200 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <h2 className='font-extrabold'>1</h2>
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">Submit your photos</h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Go to <Link href={'/upload'} className='text-blue-600'>Upload</Link> to submit photos of your club activities, classes, or school events.
                  </p>
              </div>
              <div>
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-neutral-200 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <h2 className='font-extrabold'>2</h2>
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">We put them in our gallery</h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    We'll take a quick look at your photos to ensure they meet our guidelines before we allow them in <Link href={'/upload'} className='text-blue-600'>our gallery!</Link>
                  </p>
              </div>
              <div>
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-neutral-200 lg:h-12 lg:w-12 dark:bg-primary-900">
                   <h2 className='font-extrabold'>3</h2>
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">We put them in the yearbook!</h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    All photos in our gallery will be considered for placement in the yearbook.
                  </p>
              </div>
          </div>
      </div>
    </section>  
  )
}

export default Section1