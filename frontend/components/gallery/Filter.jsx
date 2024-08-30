import React from 'react'
import { tagOptions } from '@/data'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

const Filter = ({ selectedTags, setSelectedTags }) => {
  const handleCheckboxChange = (tagValue) => {
    setSelectedTags(prevSelectedTags =>
      prevSelectedTags.includes(tagValue)
        ? prevSelectedTags.filter(value => value !== tagValue)
        : [...prevSelectedTags, tagValue]
    )
  }

  return (
    <>
      <div className="hidden md:block sticky z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
          Category
        </h6>
        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
          {tagOptions.map((tag, index) => (
            <li key={index} className="flex items-center">
              <input
                id={tag.value}
                type="checkbox"
                value={tag.value}
                checked={selectedTags.includes(tag.value)}
                onChange={() => handleCheckboxChange(tag.value)}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor={tag.value} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                {tag.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden fixed bottom-4 right-4 z-50"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            {tagOptions.map((tag, index) => (
              <li key={index} className="flex items-center">
                <input
                  id={tag.value}
                  type="checkbox"
                  value={tag.value}
                  checked={selectedTags.includes(tag.value)}
                  onChange={() => handleCheckboxChange(tag.value)}
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor={tag.value} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {tag.label}
                </label>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Filter
