"use client"

import Nav from '@/components/Nav';
import Form from '@/components/upload/Form';
import Uploader from '@/components/upload/Uploader';
import axios from 'axios';
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const Upload = () => {
  const [files, setFiles] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    photoContext: '',
    tags: []
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => {
      const uniqueFiles = new Map();
      [...prevFiles, ...newFiles].forEach((file) => {
        uniqueFiles.set(file.name, file);
      });
      return Array.from(uniqueFiles.values());
    });
  };
      
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleTagsChange = (selectedOption) => {
    setFormData(prevState => ({
      ...prevState,
      tags: selectedOption
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!files.length) return;
  
    setLoading(true);
  
    const uploadData = new FormData();
    files.forEach(file => {
      uploadData.append('files', file);
    });
    uploadData.append('email', formData.email);
    uploadData.append('name', formData.name);
    uploadData.append('photo_context', formData.photoContext);
    uploadData.append('tags', formData.tags.map(tag => tag.value).join(','));
  
    try {
      const response = await axios.post('https://0a9b-162-221-127-80.ngrok-free.app/upload/', uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Files uploaded successfully:', response.data);
  
      toast({
        title: "Upload Successful",
        description: "Your files have been uploaded successfully.",
      });
  
      setFormData({
        email: '',
        name: '',
        photoContext: '',
        tags: []
      });
      setFiles([]);
  
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <Nav />
      <div className="px-4 lg:px-6 max-w-screen-xl mx-auto lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] gap-4">
        <Form
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          handleTagsChange={handleTagsChange}
          handleUpload={handleUpload}
          loading={loading}
        />
        <Uploader files={files} handleFileChange={handleFileChange} setFiles={setFiles} />
      </div>

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">How does this work?</h2>
                <p class="mb-4 font-light">
                  You submit your photos. They'll appear in our online gallery, and we'll consider putting them in the yearbook!
                </p>
                <p class="mb-4 font-light">
                  We'll take a quick look at your photos before we put them in our gallery, to make sure they fit these guidelines:
                </p>
                <ul class="list-disc list-inside mb-4 font-light">
                  <li>
                      You must be a current student at VPCI.
                  </li>
                  <li>
                      The subject of your photos must be related to VPCI in some way.
                  </li>
                  <li>
                      Your photo must relate to the current school year. 
                  </li>
                </ul>
                <p class="mb-4 font-medium">
                  Great choices are: photos of your club activities, classes, or school events.
                </p>
                <p class="mb-4 font-light">
                  We want as many of your photos as possible. Let's go VP!
                </p>
                <p class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                    QUESTIONS? CONTACT US.
                </p>
                <p class="mb-4 font-light">
                  vp.yearbook@gmail.com
                </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Upload;
