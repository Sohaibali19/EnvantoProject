import React, { useState } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'



 

export default function Categories() {
  const [selectedOption, setSelectedOption] = useState('');

  const list =[
    {
      value: 'Banking',
    }, {
      value: 'Marketing'
    }, {
      value: 'accounting'
    }, { 
      value: 'IT & Software'
    },
  ]

  return (
    <div className=" w-full  flex justify-between items-center object-cover border-none  ">
      
      <div className="icon mt-3 mb-2 ml-3 ">
             <FontAwesomeIcon icon={faTableList}  style={{color: "#6c717a",}} />
      </div>

      <div className='bg-white w-full  relative  flex flex-col items-center justify-center text-gray-400 rounded-md  '>
          <button onClick={() => setSelectedOption((prev) => !prev)}
          className='bg-[#ffffff33] relative w-full gap-3 rounded-md flex justify-between text-[13px] space-x-2 tracking-wide border-none px-4 py-1'>
          Categories...
         
            
            <FontAwesomeIcon icon={faCaretDown} style={{color: "#6c717a",}}  className = {`${selectedOption && 'rotate-180' }`}/>
            

          </button>
          {selectedOption && ( 
            <div className='bg-white text-gray-500 text-[14px] w-[110%] py-2 absolute mt-12  right-0  text-left '>
                {list.map((i) => (
                  <div key={i}>
                      <h3 className='hover:bg-gray-100'>{i.value}</h3>
                  </div>
                ))}
                
            </div>
           )}
          
      </div>
      </div>
  );
}