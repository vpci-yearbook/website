import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Photos({ selectedTags }) {
  const [groupedImages, setGroupedImages] = useState([]);
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
        setGroupedImages(data);
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

  const calculateRows = (images) => {
    const rows = [];
    let currentRow = [];
    let currentRowWidth = 0;

    images.forEach((image) => {
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

  const filterImagesByTags = (images) => {
    if (selectedTags.length === 0) {
      return images;
    }
    return images.filter(image => 
      selectedTags.every(tag => image.tags.includes(tag))
    );
  }

  return (
    <div className="w-full mx-auto" ref={containerRef}>
      {groupedImages.map(([date, images]) => {
        const filteredImages = filterImagesByTags(images);
        if (filteredImages.length === 0) return null;

        return (
          <div key={date} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{date}</h2>
            {calculateRows(filteredImages).map((row, rowIndex) => (
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
      })}
    </div>
  );
}
