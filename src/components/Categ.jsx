import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'


function Categ() {
  const [isOpen, setIsOpen] = useState(false);
    
  const options = [
      
      {label :"English", value : 1},
      {label :"Spanish", value : 2},
      {label :"Hindi", value : 3},
      {label :"French", value : 4},
    ]
    return (
        <div className='bg-[#ffffff33] w-full  relative  flex  items-center rounded-md  '>
            <div className="icon mt-3 mb-2 ml-3 ">
             <FontAwesomeIcon icon={faTableList}  style={{color: "#6c717a",}} />
             </div>
          <div>   
          <button onClick={() => setIsOpen((prev) => !prev)}
          className='bg[#ffffff33] relative w-full gap-3 rounded-md flex justify-between text-[13px] space-x-5 tracking-wide border-2 px-4 py-1'>
          Categories
          
            <FontAwesomeIcon icon={faCaretDown} style={{color: "#6c717a",}} className = {`${isOpen && 'rotate-180' }`} />
    
          </button>
          {isOpen && ( 
            <div className='bg-white text-gray-500 text-[14px] w-full absolute mt-8  text-left z-[1000] '>
                {options.map((option, label) => (
                  <div key={label}>
                      <h3 className='hover:bg-gray-100'>{option.label}</h3>
                  </div>
                ))}
                
            </div>
           )}
          
        </div>
        </div>
    );
    }

export default Categ