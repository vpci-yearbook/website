import React from 'react'
import { Button } from '../ui/button'
import { Dot } from 'lucide-react'

const Section1 = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-8 md:pb-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">YEARBOOK, YEAR-ROUND.</h1>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full h-60 md:-ml-4 lg:-ml-0" />
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Ever felt like the yearbook just wasn’t enough? It’s only released once a year, and let’s face it, you’re only interested in photos of you and your friends, but those are few and far between. It’s time for a change.
            </p>
            <Button className='w-24 p-2 rounded-full'>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1