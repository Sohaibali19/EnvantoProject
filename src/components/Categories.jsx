import { Description, Field, Label, Select } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa6";
import clsx from 'clsx'
import LocationIcon from './LocationIcon';

export default function Example() {
  return (
    <div className='flex justify-between items-center'>
        <LocationIcon />
    
    <div className="w-full max-w-md px-4 py-2 bg-white ">
      <Field name='Sta'>
        
        <div className="relative " >
          <Select
          
            className={clsx(
              'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-black',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
              // Make the text of each option black on Windows
              '*:text-black'
            )}
          >
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </Select>
          <FaChevronDown
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 bg-gray-800"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>
    
    </div>
  )
}
