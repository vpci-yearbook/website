"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Photos() {
  const [images, setImages] = useState([]);
  const ngrokUrl = 'https://0a9b-162-221-127-80.ngrok-free.app';
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

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.file_id}
            className="p-2 cursor-pointer"
            onClick={() => router.push(`/gallery/${image.file_id}`)}
          >
            <img
              src={`${ngrokUrl}/images/${image.file_id}/preview`}
              alt={image.filename}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
