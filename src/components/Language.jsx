import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'


function Language() {
  const [isOpen, setIsOpen] = useState(false);
    
  const options = [
      
      {label :"English", value : 1},
      {label :"Spanish", value : 2},
      {label :"Hindi", value : 3},
      {label :"French", value : 4},
    ]
    return (
        <div className='bg-[#ffffff33] w-full  relative  flex flex-col items-center rounded-md  '>
          <button onClick={() => setIsOpen((prev) => !prev)}
          className='bg[#ffffff33] relative w-full gap-3 rounded-md flex justify-between text-[13px] space-x-2 tracking-wide border-2 px-4 py-1'>
          Language
          
            <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff",}} className = {`${isOpen && 'rotate-180' }`} />
    
          </button>
          {isOpen && ( 
            <div className='bg-white text-gray-500 text-[14px] w-full h-full mt-8 absolute text-left z-[1000] '>
                {options.map((option, label) => (
                  <div key={label}>
                      <h3 className='hover:bg-gray-100'>{option.label}</h3>
                  </div>
                ))}
                
            </div>
           )}
          
        </div>
    );
    }

export default Language