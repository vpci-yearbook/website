"use client"

import React, { useState } from 'react'
import axios from 'axios';
import { FileText, X } from 'lucide-react';
import { Button } from '../ui/button';

const Uploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://0a9b-162-221-127-80.ngrok-free.app/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className='w-full px-4 py-8 mx-auto'>
        { !file ? (
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 8000x4000px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
        ) : (
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <FileText />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                {file.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {`${bytesToMB(file.size)} MB`}
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => {
              setFile(null);
            }}>
              <X />
            </Button>
          </div>
        )}
      <button onClick={handleUpload} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Upload</button>
    </div>
  )
}

function bytesToMB(bytes) {
  let megabytes = bytes / 1024 / 1024;
  return megabytes.toFixed(2);
}

export default Uploader