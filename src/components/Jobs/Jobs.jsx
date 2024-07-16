import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudArrowUp, faAngleDown  } from '@fortawesome/free-solid-svg-icons'


function Jobs() {
 const [isJob, setIsJob] = useState(false);
 const [hidden, setHidden] = useState(true);

 const options = [
      
  {label :"JOB LIST", value : 'JOB LIST'},
  {label :"JOB GRID", value : 'JOB GRID'},
  {label :"JOB DETAILS", value : 'JOB DETAILS'},
  {label :"JOB DETAILS-2", value : 'JOB DETAILS 2'},
]

  return (
    <div className=' w-full  relative  flex flex-col items-center rounded-md  '>
      
          <button 
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
          className=' relative w-full gap-2 rounded-md flex justify-between text-[14px] space-x-2 tracking-wide  px-4 '>
            
          JOBS
          <div className=''>
          <FontAwesomeIcon icon={faAngleDown} style={{color: "#ffffffcc", }} />
          </div>
          
          </button>

          {hidden ? null : ( 
            
              <div className='bg-white text-gray-600 text-[12px] font-bold w-[12vw]  absolute mt-[52px] py-6 px-4 flex flex-col justify-around rounded-lg left-0  text-left '>
                  {options.map((option, label) => (
                    <div key={label}>
                        <h3 className='hover:text-blue-500 rounded-lg py-2'>{option.label}</h3>
                    </div>
                  ))}
                  
              </div>
             
          )}
        
         
        </div>
    );
    }


export default Jobs