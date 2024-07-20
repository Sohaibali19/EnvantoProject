import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, faCaretDown, faCaretUp, faSearch } from '@fortawesome/free-solid-svg-icons'
import LocationIcon from './LocationIcon';

function  Categ( {selected, setSelected}) {

    
   const [isOpen, setIsOpen] = useState(false);
   
   
    const options = ['Accounting', 'Banking', 'IT & Software', 'marketing']

  return (
    <div className='flex justify-between items-center'>
        <div className="icon mt-3 mb-2 ml-3 ">
             <FontAwesomeIcon icon={faTableList}  style={{color: "#6c717a",}} />
      </div>
    <div className='w-[90%]  right-0  ml-6 mt-1 font-medium absolute text-[14px] top-0  cursor-pointer'>
        <div  className='bg-white w-full p-2 flex items-center justify-between rounded-lg text-gray-400 ' 
        onClick={(e) => setIsOpen(!isOpen)} >
          
         {selected 
         ? selected 
         : 'Categories...'}
        <FontAwesomeIcon icon={faCaretDown}  style={{size: "14",color: "#6c717a"}}  className={`${isOpen && 'rotate-180'}`}/>
        </div>
 {isOpen && (
        <div className='w-[110%] right-0   absolute  bg-white mt-2  overflow-y-auto'
        >
            {options.map(option => (
                <div onClick={(e) => {
                    setSelected(option)
                    setIsOpen(false)
                }}
                className='p-2 text-sm hover:bg-gray-100 text-left hover: text-gray-800'>
                {option}
                </div>


            ))}

            
           
        </div>
        )}
            
            
    </div>
    </div>
  )
}

export default Categ