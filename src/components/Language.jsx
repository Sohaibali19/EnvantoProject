import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'


function Language(selected, setSelected) {
  const [isOpen, setIsOpen] = useState(false);
    
  const options = [
      
      "English", 
      "Spanish",
      "Hindi", 
      "French", 
    ]
    return (
        <div className='bg-[#ffffff33] w-full  relative  flex flex-col items-center rounded-md  '>
          <button onClick={(e) => setIsOpen(!isOpen)}
          className='bg[#ffffff33] relative w-full gap-3 rounded-md flex justify-between text-[13px] space-x-2 tracking-wide border-2 px-4 py-1'>
          Language
          
            <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff",}} className = {`${isOpen && 'rotate-180' }`} />
    
          </button>
          {isOpen && ( 
            <div className='bg-white text-gray-500 text-[14px] w-full h-full mt-8 absolute text-left z-[100] '>
                {options.map(option => (
                  <div onClick={(e) => {
                    setSelected(option)
                    setIsOpen(false)
                  }} >
                      <h3 className='hover:bg-gray-100'>{option}</h3>
                  </div>
                ))}
                
            </div>
           )}
          
        </div>
    );
    }

export default Language