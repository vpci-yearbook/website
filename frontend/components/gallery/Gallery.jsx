"use client"

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Photos() {
  const [images, setImages] = useState([]);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const ngrokUrl = 'https://0a9b-162-221-127-80.ngrok-free.app';
  const targetRowHeight = 200;
  const router = useRouter();

  useEffect(() => {
    const fetchPreviews = async () => {
      try {
        const response = await fetch('/api/images/previews');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching image previews:', error);
      }
    };

    fetchPreviews();
  }, []);

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

  const calculateRows = () => {
    const rows = [];
    let currentRow = [];
    let currentRowWidth = 0;

    images.forEach((image) => {
      console.log('image', image);
      const aspectRatio = image['preview_width'] / image['preview_height'];
      const adjustedWidth = aspectRatio * targetRowHeight;

      if (currentRowWidth + adjustedWidth <= containerWidth) {
        currentRow.push(image);
        currentRowWidth += adjustedWidth;
      } else {
        const rowHeight = targetRowHeight * (containerWidth / currentRowWidth);
        rows.push({ images: currentRow, height: rowHeight });
        
        currentRow = [image];
        currentRowWidth = adjustedWidth;
      }
    });

    if (currentRow.length > 0) {
      const rowHeight = targetRowHeight * (containerWidth / currentRowWidth);
      rows.push({ images: currentRow, height: rowHeight });
    }

    return rows;
  };

  const rows = containerWidth ? calculateRows() : [];

  console.log('containerWidth', containerWidth);
  console.log('rows', rows);

  return (
    <div className="w-full mx-auto" ref={containerRef}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row mb-4">
          {row.images.map((image) => (
            <div
              key={image.file_id}
              className="p-2 cursor-pointer"
              onClick={() => router.push(`/gallery/${image.file_id}`)}
            >
              <img
                src={`${ngrokUrl}/images/${image.file_id}/preview`}
                alt={image.filename}
                style={{ height: row.height, width: 'auto' }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
