import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudArrowUp, faAngleDown, faBars  } from '@fortawesome/free-solid-svg-icons'
import Jobs from '../Jobs/Jobs'
import Pages from '../Pages/Pages'

function Navbar() {
  return (
    <div className='  '>
                    <div
                        className=" lg:justify-around md:justify-between items-center lg:mt-4 md:mt-[-68px]  md:absolute lg:relative lg:bg-transparent md:bg-white lg:bg-none lg:w-full lg:flex  md:flex md:w-full"
                        id="mobile-menu-2"
                    >
                        <div className="logo">
                            <img src='src/Images/logo-dark.png' alt="logo-dark" className='lg:w-full md:w-[10%] lg:h-[18px] md:h-[18px] lg:relative md:absolute  md:-mt-3 lg:ml-0 md:ml-7 lg:mt-0    ' />
                        </div>
                        {/* <div className="logo">
                            <img src='src/Images/logo-dark.png' alt="logo-dark" className='lg:w-full md:w-[10%] lg:h-[18px] md:h-[14px] md:visible lg:invisible  ' />
                        </div> */}

                        
                        
                       
                       
                        <div className="ul">

                        
                        
                        <ul className="flex flex-col md:justify-around md:items-center  my-3  font-medium  text-[14px] lg:flex-row lg:space-x-10 md:space-x-0 lg:mt-4 md:mt-10 lg:rounded-none md:rounded-xl   lg:px-0 md:px-5    lg:relative md:absolute lg:ml-0 md:ml-16 lg:visible md:invisible ">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 lg:pr-2 lg:pl-2 duration-200 ${isActive ? "lg:text-[#FFFFFFCC]" : "lg:text-[#FFFFFFCC]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFFFFFCC] lg:p-0`
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/jobs"
                                className={({isActive}) =>
                                    ` py-2 pr-2 pl-2 duration-200   ${isActive ? "lg:text-[#FFFFFFCC]" : "lg:text-[#FFFFFFCC]"} border-b   lg:border-0 hover:text-[#FFFFFFCC] lg:p-0`
                                }
                                >
                                    <div className='flex justify-between items-center '>
                                        <Jobs />
                                        
                                    </div>
                                    
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/pages"
                                className={({isActive}) =>
                                    `block py-2  duration-200 ${isActive ? "lg:text-[#FFFFFFCC]" : "lg:text-[#FFFFFFCC]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFFFFFCC] lg:p-0`
                                }
                                >
                                    <div className='flex justify-between items-center md:text-black  lg:text-[#FFFFFFCC]'>
                                        <Pages />
                                    </div>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/contact"
                                className={({isActive}) =>
                                    `block py-2  duration-200 ${isActive ? "lg:text-[#FFFFFFCC]" : "lg:text-[#FFFFFFCC]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFFFFFCC] lg:p-0`
                                }
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                            
                            
                         </ul>
                     </div>
                     
                     <div className=''>
                     
                     <div className=' absolute   lg:ml-0 md:visible lg:invisible md:mt-5 md:mr-10    '>
                        <FontAwesomeIcon icon={faBars} size='2xl' style={{color: "black", paddingTop:"4px", paddingRight:"4px"}} className='' />
                        </div>
                        <div className="post-job-button  lg:pb-0 md:pb-4">
                        <button className='bg-[#2f55d4] text-white flex rounded-lg px-5  py-2 lg:mt-0 md:mt-5 lg:mr-0 md:mr-36  lg:ml-0 md:ml-10
                        '>
                            <FontAwesomeIcon icon={faCloudArrowUp} style={{color: "#ffffff", paddingTop:"4px", paddingRight:"4px"}} />
                            <p className='text-[16px] '>Post a Job</p>

                        </button>

                     </div>
                     </div>
                     

                    </div>
                </div>

  )
}

export default Navbar