import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudArrowUp, faAngleDown  } from '@fortawesome/free-solid-svg-icons'


function Pages() {
 const [isJob, setIsJob] = useState(false);
 const [hidden, setHidden] = useState(false);

 const options = [
      
  {label :"ABOUT US", value : 'JOB LIST'},
  {label :"SERVICES", value : 'JOB GRID'},
  {label :"TEAM", value : 'JOB DETAILS'},
  {label :"FAQS", value : 'JOB DETAILS 2'},
  {label :"CANDIDATES", value : 'JOB DETAILS 2'},
  {label :"BLOGS", value : 'JOB DETAILS 2'},
  {label :"EMPLOYERS", value : 'JOB DETAILS 2'},
  {label :"USER PAGES", value : 'JOB DETAILS 2'},
  {label :"COMPONENTS", value : 'JOB DETAILS 2'},

]

  return (
    <div className=' w-full  relative  flex flex-col items-center rounded-md  '>
      
          <button 
          onMouseEnter={() => setHidden(true)}
          onMouseLeave={() => setHidden(false)}
          className=' relative w-full gap-2 rounded-md flex justify-between text-[14px] space-x-2 tracking-wide  px-4 '>
            
          PAGES
          <div className=''>
          <FontAwesomeIcon icon={faAngleDown} style={{color: "#ffffffcc", }} />
          </div>
          
          </button>

          {hidden && ( 
            
              <div className='bg-white text-gray-600 text-[12px] font-bold w-[12vw] z-[1000] absolute mt-[52px] py-6 px-4 flex flex-col justify-around rounded-lg left-0  text-left '>
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


export default Pages