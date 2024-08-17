import Filter from '@/components/gallery/Filter'
import Photos from '@/components/gallery/Gallery'
import Header from '@/components/gallery/Header'
import Nav from '@/components/Nav'
import React from 'react'

const Gallery = () => {
  return (
    <div>
      <Nav />
      <Header />
      <div className='max-w-screen-xl mx-auto grid grid-cols-2'>
        <Filter />
        <Photos />
      </div>
    </div>
  )
}

export default Gallery