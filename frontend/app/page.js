import Hero from '@/components/landing/Hero'
import Section1 from '@/components/landing/Section1'
import Section2 from '@/components/landing/Section2'
import Nav from '@/components/Nav'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-slate-100'>
      <Nav />
      <Hero />
      <Section1 />
      <Separator />
      <Section2 />
    </div>
  )
}

export default Home