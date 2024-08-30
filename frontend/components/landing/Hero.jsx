"use client"

import React, { useEffect, useState, useRef } from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

const Photos = ({ scrollPosition }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  const images = [
    { file_id: 'image1', filename: '_1300158_53207016183_o-SCALED.png', preview_width: 1300, preview_height: 866 },
    { file_id: 'image2', filename: '_1340137-enhanced-nr_53207013648_o-SCALED.png', preview_width: 1300, preview_height: 866 },
    { file_id: 'image3', filename: '_1340683_53207093329_o-SCALED.png', preview_width: 1300, preview_height: 866 },
    { file_id: 'image4', filename: '53205831167_715c9fa34b_k.jpg', preview_width: 2047, preview_height: 1365 },
  ];

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  const calculateRows = (images) => {
    const rows = [];
    let currentRow = [];
    let currentRowWidth = 0;

    images.forEach((image) => {
      const resizedWidth = image['preview_width'] / 4;
      const resizedHeight = image['preview_height'] / 4;
      const aspectRatio = resizedWidth / resizedHeight;

      if (currentRowWidth + resizedWidth <= containerWidth) {
        currentRow.push({ ...image, resizedWidth, resizedHeight });
        currentRowWidth += resizedWidth;
      } else {
        const scalingFactor = containerWidth / currentRowWidth;
        rows.push({ images: currentRow, scalingFactor });
        currentRow = [{ ...image, resizedWidth, resizedHeight }];
        currentRowWidth = resizedWidth;
      }
    });

    if (currentRow.length > 0) {
      const scalingFactor = containerWidth / currentRowWidth;
      rows.push({ images: currentRow, scalingFactor });
    }

    return rows;
  };

  return (
    <>
      <section className="bg-black dark:bg-white py-10">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-black">HOME OF <br /> MEMORIES @ VP</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg dark:text-black">View and upload photos year-round on VP's official photo gallery.</p>
                <a href="/gallery" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-700 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-700 dark:text-black dark:border-gray-300 dark:hover:bg-gray-100 dark:focus:ring-gray-100">
                    Go to Gallery
                </a> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            </div>                
        </div>
      </section>      

      <div ref={containerRef} className="-mt-10 max-w-screen-xl mx-auto">
        {calculateRows(images).map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row mb-4">
            {row.images.map((image) => (
              <div key={image.file_id} className="p-2">
                <LazyLoadImage
                  src={`/landing/${image.filename}`}
                  alt={image.filename}
                  style={{
                    width: image.resizedWidth * row.scalingFactor,
                    height: image.resizedHeight * row.scalingFactor
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default trackWindowScroll(Photos);
