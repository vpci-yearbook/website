import React from 'react'
import { Button } from '../ui/button'
import { Dot } from 'lucide-react'

const Section1 = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">HOME OF MEMORIES AT VP</h1>
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
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            <Button className='w-20 rounded-full' size='lg'>Button</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1