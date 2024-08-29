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
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <Uploader files={files} handleFileChange={handleFileChange} setFiles={setFiles} />
        <Form
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          handleTagsChange={handleTagsChange}
          handleUpload={handleUpload}
          loading={loading}
        />
      </div>
    </>
  );
};

export default Upload;
