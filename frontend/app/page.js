import Hero from '@/components/landing/Hero'
import Section1 from '@/components/landing/Section1'
import Section2 from '@/components/landing/Section2'
import Section3 from '@/components/landing/Section3'
import Nav from '@/components/Nav'
import { Separator } from '@/components/ui/separator'
import { Dot } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-slate-100'>
      <Nav />
      <Hero />
      <Separator />
      <div className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-row justify-end items-center'>
        <h2 className='text-2xl font-bold inline-flex items-center'><Dot size={60} />ABOUT</h2>
      </div>
      <Section1 />
      <Separator />
      <div className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-row justify-end items-center'>
        <h2 className='text-2xl font-bold inline-flex items-center'><Dot size={60} />GALLERY</h2>
      </div>
      <Section2 />
      <Separator />
      <div className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-row justify-end items-center'>
        <h2 className='text-2xl font-bold inline-flex items-center'><Dot size={60} />UPLOAD</h2>
      </div>
      <Section3 />
    </div>
  )
}

export default Home