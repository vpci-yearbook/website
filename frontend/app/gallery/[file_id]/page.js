"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function ImageDetail() {
  const { file_id } = useParams();
  const router = useRouter();
  const ngrokUrl = 'https://0a9b-162-221-127-80.ngrok-free.app';

  const imageUrl = `${ngrokUrl}/images/${file_id}/full`;

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white flex justify-between items-center">
        <button
          onClick={() => router.push('/gallery')}
          className="px-4 py-2 bg-gray-800 bg-opacity-75 rounded hover:bg-opacity-100 transition"
        >
          Back to Gallery
        </button>
      </div>

      <img 
        src={imageUrl} 
        alt="Full Size Image" 
        className="max-h-screen w-auto"
      />
    </div>
  );
}
