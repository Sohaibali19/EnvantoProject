import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, } from '@fortawesome/free-solid-svg-icons'
import {useForm} from 'react-hook-form'
import Location from './Location'
import Categories from './Categories'
import Selected from './Selected'
import Categ from './Categ'


function RegForm() {
    const {register, handleSubmit} = useForm();
    
  return (
    <div className='Registration-form'>
        <div className="reg-form  mb-3   flex  justify-around  items-center rounded-lg ">
            <form className='flex relative  justify-around items-center gap-6 bg-[#ffffff33] py-5 px-5 rounded-lg'>
            <div className='registration-form  ' >
                <div className=' total-form flex w-[304px] relative h-[44.5px] '>
                    <div className="jobs-keyboards flex bg-[#fff]  rounded-lg text-[13px] ">
                        <div className="icon mt-3 mb-2 ml-3 relative ">
                        <FontAwesomeIcon icon={faBriefcase}  style={{color: "#6c717a",}} />
                        </div>
                        <div className=''>
                        <input {...register("firstName")} type='text' className='py-1.5 pr-[100px] pl-1.5  m-2 outline-none rounded-lg  placeholder-[border-none] text-black' placeholder="Jobs keyboards..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className='registration-form  '  >
                <div className=' total-form flex w-[304px] relative h-[44.5px]'>
                    <div className="jobs-keyboards flex bg-[#fff] w-full rounded-lg   ">
                        
                        <div className='w-full border border-white rounded-lg'>
                        <Selected />
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='registration-form-2'  >
                <div className=' total-form-2 flex w-[304px] relative h-[44.5px]'>
                    <div className="jobs-keyboards flex bg-[#fff] w-full rounded-lg  ">
                        <div className='w-full border-none cursor-pointer'>
                        <Categories />
                        </div>
                    </div>
                </div>
            </div>

            <input type="submit" className='bg-[#2f55d4] text-white py-[8px] px-[20px] w-[304px] relative h-[44.5px] rounded-lg cursor-pointer text-[14px] ' />
        </form>
        </div>

    </div>
  )
}

export default RegForm