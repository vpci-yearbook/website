"use client"

import Nav from '@/components/Nav';
import Form from '@/components/upload/Form';
import Uploader from '@/components/upload/Uploader';
import axios from 'axios';
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    photoContext: '',
    tags: []
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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
    if (!file) return;

    setLoading(true);

    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('email', formData.email);
    uploadData.append('name', formData.name);
    uploadData.append('photo_context', formData.photoContext);
    uploadData.append('tags', formData.tags.map(tag => tag.value).join(','));  // Convert tags array to comma-separated string

    try {
      const response = await axios.post('https://0a9b-162-221-127-80.ngrok-free.app/upload/', uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      
      toast({
        title: "Upload Successful",
        description: "Your file has been uploaded successfully.",
      });

      setFormData({
        email: '',
        name: '',
        photoContext: '',
        tags: []
      });
      setFile(null);

    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <Uploader file={file} handleFileChange={handleFileChange} />
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
