import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from "@/components/ui/textarea";

const Form = ({ formData, handleInputChange, handleUpload }) => {
  return (
    <div className="flex items-center justify-center py-12">
      <form onSubmit={handleUpload} className="mx-auto grid w-[450px] gap-6">
        <div className="grid gap-2">
          <h1 className="text-4xl font-bold">UPLOAD PHOTOS</h1>
        </div>
        <div className="grid gap-4">
          <div className='grid grid-cols-2 gap-4'>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Alec Li"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="photoContext">Photo context</Label>
            <Textarea
              id="photoContext"
              placeholder='e.g. "me and my friend joe"'
              required
              value={formData.photoContext}
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
