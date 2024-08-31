"use client"

import { CircleArrowRight } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Section2 = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  const images = [
    { file_id: 'image1', filename: '_1300158_53207016183_o-SCALED.png', preview_width: 1300, preview_height: 866 },
    { file_id: 'image2', filename: '_1340137-enhanced-nr_53207013648_o-SCALED.png', preview_width: 1300, preview_height: 866 },
    { file_id: 'image3', filename: '_1340683_53207093329_o-SCALED.png', preview_width: 1300, preview_height: 866 },
    { file_id: 'image4', filename: 'DSC_1550.04-15-2024_22-37-52-SCALED.png', preview_width: 2047, preview_height: 1365 },
    { file_id: 'image5', filename: '53205831167_715c9fa34b_k.jpg', preview_width: 2047, preview_height: 1365 },
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
      const resizedWidth = image['preview_width'] / 10;
      const resizedHeight = image['preview_height'] / 10;
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
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 flex flex-col md:flex-row sm:py-16 lg:px-6">
        <div
          className="flex-1 relative cursor-pointer"
          onClick={() => router.push(`/gallery`)}
          ref={containerRef} 
        >
          {calculateRows(images).map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row">
              {row.images.map((image) => (
                <div key={image.file_id} className="p-1">
                  <img
                    src={`/landing/${image.filename}`}
                    alt={image.filename}
                    style={{
                      width: image.resizedWidth * row.scalingFactor,
                      height: image.resizedHeight * row.scalingFactor,
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
          <div className="absolute -bottom-8 left-1 bg-black p-4">
            <p className="text-white text-xl">
              CHECK OUT
              <br />
              THE GALLERY!
              <span className="mt-2 flex flex-row items-center gap-2">
                <span className="bg-white h-[0.2px] w-16" />
                <CircleArrowRight color="white" />
              </span>
            </p>
          </div>
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
            11,267 PHOTOS PRESERVED
          </h1>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            We’re VP’s official online photo gallery - now serving 11,267 photos, updated year-round.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
