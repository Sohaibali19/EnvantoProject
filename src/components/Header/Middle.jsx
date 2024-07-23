import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Language from '../Language'
import {  faUser, faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons'



function Middle() {
  const [selected, setSelected] = useState("");
  return (
    <div className='  py-4 bg-[#ffffff33]  bg-opacity-80  md:invisible lg:visible '>
            
            <div className='flex justify-between items-center text-white px-36 '>
                    <div className="number+email flex  space-x-5 ">
                    <div className='flex text-[13px] justify-center items-center space-x-1'>
                            
                            <FontAwesomeIcon icon={faPhone}  style={{color: "f8f9fc",}}/>

                            <p className='text-[13px] text-[#f8f9fc]'>+1 800 123 45 67</p>
                          </div>
                        <div className='flex text-[13px] justify-center items-center space-x-1'>
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "f8f9fc",}}/>
                          <p className=' text-[#f8f9fc]'>Support@mail.com</p>
                        </div>
                    </div>

                    <div className='flex space-x-5  '>


                        <div className="binnysimpson flex justify-around items-center text-[13px] gap-2">
                        <div className="icon   ml-3  ">
                        <FontAwesomeIcon icon={faUser}  style={{color: "white", size:"8px"}} />
                        </div>
                           <p className=' '>Binny Simpson</p> 
                         </div>
                        <div class="flex  justify-center items-center">

                        <Language  selected={selected} setSelected={setSelected}/>
                        
                        </div>

                    </div>
            </div>
                        
    
    </div>
  )
}

export default Middle