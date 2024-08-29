"use client"

import React, { useState } from 'react'
import axios from 'axios';
import { FileText, X } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Uploader = ({ files, handleFileChange, setFiles }) => {

  return (
    <div className='w-full flex items-center justify-center py-12 px-4 py-8 mx-auto'>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Add files</CardTitle>
          <CardDescription>Maximum 5 files.</CardDescription>
        </CardHeader>
        <CardContent >
          { !files.length ? (
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 8000x4000px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileChange} />
              </label>
            </div>
          ) : (
            <>
              {files.map((file, index) => (
                <div key={index} className="flex items-center space-x-4 rounded-md border p-4">
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
                    const newFiles = files.filter((_, i) => i !== index);
                    setFiles(newFiles);
                  }}>
                    <X />
                  </Button>
                </div>
              ))}
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mt-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">Add more files</span>
                <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileChange} />
              </label>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function bytesToMB(bytes) {
  let megabytes = bytes / 1024 / 1024;
  return megabytes.toFixed(2);
}

export default Uploader