import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from "@/components/ui/textarea";
import Select from 'react-select'
import { tagOptions } from '@/data';
import { Loader2 } from "lucide-react"

const Form = ({ formData, handleInputChange, handleTagsChange, handleUpload, loading }) => {
  return (
    <div className="flex items-center justify-center pt-6">
      <form onSubmit={handleUpload} className="mx-auto grid w-full gap-6">
        <div className="grid gap-4">
          <div className='grid grid-cols-2 gap-4'>
            <div className="grid gap-2">
              <Label htmlFor="email">Email <span className='text-red-600'>*</span></Label>
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
              <Label htmlFor="name">Full name <span className='text-red-600'>*</span></Label>
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
            <Label htmlFor="photoContext">Photo context <span className='text-red-600'>*</span></Label>
            <Textarea
              id="photoContext"
              placeholder='e.g. "me and my friend joe"'
              required
              value={formData.photoContext}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tags">Tags <span className='text-red-600'>*</span></Label>
            <Select
              isMulti
              name="tags"
              options={tagOptions}
              className="w-full"
              value={formData.tags}
              onChange={handleTagsChange}
            />
          </div>
          <Button type="submit" className="w-20" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : 'Submit'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
