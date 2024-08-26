"use client"

import Filter from '@/components/gallery/Filter'
import Photos from '@/components/gallery/Gallery'
import Header from '@/components/gallery/Header'
import Nav from '@/components/Nav'
import React, { useState } from 'react'

const Gallery = () => {
  const [selectedTags, setSelectedTags] = useState([])

  return (
    <div>
      <Nav />
      <Header />
      <div className='max-w-screen-xl mx-auto grid grid-cols-[1fr_3fr] gap-4'>
        <Filter selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        <Photos selectedTags={selectedTags} />
      </div>
    </div>
  )
}

export default Gallery
