import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, } from '@fortawesome/free-solid-svg-icons'
import {useForm} from 'react-hook-form'
import Location from './Location'
import Categories from './Categories'
import Selected from './Selected'
import Categ from './Categ'
import Example from './Categories'


function RegForm() {
    const {register, handleSubmit} = useForm();
    const [selected, setSelected] = useState("");
    
  return (
    <div className='Registration-form'>
        <div className="reg-form mb-3     flex  justify-around  items-center rounded-lg ">
            <form className='lg:flex  md:flex-shrink relative  justify-around items-center gap-6 xl:gap-6 lg:gap-6 md:gap-3 sm:gap-6  bg-[#ffffff33] lg:py-5 md:py-10 sm:py-5 xl:px-5 lg:px-5 md:px-10 sm:px-5 rounded-lg'>

            <div className='md:flex  lg:flex-none lg:gap-3 md:gap-3  md:mb-2 lg:mb-0 '>
            <div className='registration-form  ' >
                <div className=' total-form flex items-center relative  w-[304px] h-[44.5px] xl:w-[304px] xl:h-[44.5px] lg:w-[200px]   lg:[30px] md:w-[270px] md:h-[38px] sm:w-[304px] sm:h-[44.5px] sm:mb-2 md:mb-0 '>
                    <div className="jobs-keyboards flex bg-[#fff]  rounded-lg text-[13px] w-[304px] h-[44.5px] xl:w-[304px] lg:w-[200px] relative xl:h-[44.5px] lg:[30px] md:w-[270px] md:h-[38px]  sm:w-[304px] sm:h-[44.5px]">
                        <div className="icon mt-3 mb-2 ml-3 relative ">
                        <FontAwesomeIcon icon={faBriefcase}  style={{color: "#6c717a",}} />
                        </div>
                        <div className=''>
                        <input {...register("firstName")} type='text' className='xl:py-1.5 lg:py-1 xl:pr-[100px] lg:pr-[0px] pl-1.5  mx-3 mt-[10px] lg:mt-2 md:mt-2.5 outline-none rounded-lg  placeholder-[border-none] text-black' placeholder="Jobs keyboards..." />
                        </div>
                    </div>
                </div>
            </div>

            {/* Location */}
            <div className='registration-form  '  >
                <div className=' total-form flex items-center xl:w-[304px] lg:w-[200px] relative xl:h-[44.5px] lg:[30px] md:w-[270px] md:h-[38px] sm:w-[304px] sm:h-[44.5px] w-[304px] h-[44.5px] sm:mb-2 md:mb-0'>
                    <div className="jobs-keyboards flex items-center bg-[#fff]  rounded-lg  xl:w-[304px] lg:w-[200px] relative xl:h-[44.5px] lg:[44.5px]  md:w-[270px] md:h-[38px] sm:w-[304px] sm:h-[44.5px] w-[304px] h-[44.5px]">
                        
                        <div className='w-full border border-white rounded-lg'>
                        <Selected />
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>

            
            <div className='md:flex lg:flex-none lg:gap-3 md:gap-3 md:mb-0 lg:mb-0'>
            {/* Categories */}
            <div className='registration-form-2'  >
                <div className=' total-form-2 flex items-center xl:w-[304px] lg:w-[200px] relative xl:h-[44.5px] lg:[30px] md:w-[270px] md:h-[38px] sm:w-[304px] sm:h-[44.5px] w-[304px] h-[44.5px] sm:mb-2 md:mb-0'>
                    <div className="jobs-keyboards flex bg-[#fff]  rounded-lg items-center xl:w-[304px] lg:w-[250px] relative xl:h-[44.5px] lg:[30px] md:w-[270px] md:h-[38px]  sm:w-[304px] sm:h-[44.5px] w-[304px] h-[44.5px]">
                        <div className='w-full border-none cursor-pointer'>
                        <Categ selected={selected} setSelected={setSelected} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Button */}
                <div>
                <input type="submit" className='bg-[#2f55d4] text-white xl:py-[8px] lg:py-3 xl:px-[20px] lg:px-3 xl:w-[304px] lg:w-[200px] relative xl:h-[44.5px] lg:[30px] rounded-lg cursor-pointer text-[14px] md:w-[270px] md:h-[38px] sm:w-[304px] sm:h-[44.5px] w-[304px] h-[44.5px]' />
                </div>
                </div>    
        </form>
        </div>

    </div>
  )
}

export default RegForm