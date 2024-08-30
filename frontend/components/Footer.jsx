import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white flex flex-col-reverse md:flex-row justify-between p-8 sm:p-20'>
      <div>
        <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-black">yearbook @ VP.</h1>
        <p className="max-w-2xl mb-4 font-light text-gray-400 lg:mb-4 md:text-lg dark:text-black">
          © 2024 VPCI YEARBOOK COMMITTEE. ALL RIGHTS RESERVED.
        </p>
      </div>
      
      <div className='flex flex-row gap-4 pb-4 sm:pr-16'>
        <div className='flex flex-col'>
          <h3 className='mb-4'>SOCIALS</h3>
          <Link className='font-light' href={'https://www.instagram.com/vpci_yearbook/'}>Instagram</Link>
          <Link className='font-light' href={'#'}>Discord</Link>
        </div>

        <div className='flex flex-col'>
          <h3 className='mb-4'>PAGES</h3>
          <Link className='font-light' href={'/gallery'}>Gallery</Link>
          <Link className='font-light' href={'/about'}>About</Link>
          <Link className='font-light' href={'/upload'}>Upload</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
