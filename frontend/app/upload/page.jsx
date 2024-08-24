"use client"

import Form from '@/components/upload/Form';
import Uploader from '@/components/upload/Uploader';
import Image from 'next/image';
import React, { useState } from 'react';

const Upload = () => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <Uploader />
      <Form />
    </div>
  );
};

export default Upload;
