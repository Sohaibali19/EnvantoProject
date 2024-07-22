import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudArrowUp, faAngleDown  } from '@fortawesome/free-solid-svg-icons'
import Jobs from '../Jobs/Jobs'
import Pages from '../Pages/Pages'

function Navbar() {
  return (
    <div className='  '>
                    <div
                        className=" justify-around items-center mt-4  lg:w-full lg:flex "
                        id="mobile-menu-2"
                    >
                        <div className="logo">
                            <img src='src/Images/logo-light.png' alt="logo-dark" className='w-full h-[18px]  ' />
                        </div>
                        <div className="ul">

                        
                        <ul className="flex flex-col mt-4   font-medium text-[14px] lg:flex-row lg:space-x-10 lg:mt-4 ">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-2 pl-2 duration-200 ${isActive ? "text-[#FFFFFFCC]" : "text-[#FFFFFFCC]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFFFFFCC] lg:p-0`
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/jobs"
                                className={({isActive}) =>
                                    ` py-2 pr-2 pl-2 duration-200   ${isActive ? "text-[#FFFFFFCC]" : "text-[#FFFFFFCC]"} border-b   lg:border-0 hover:text-[#FFFFFFCC] lg:p-0`
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
                                    `block py-2  duration-200 ${isActive ? "text-[#FFFFFFCC]" : "text-[#FFFFFFCC]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFFFFFCC] lg:p-0`
                                }
                                >
                                    <div className='flex justify-between items-center '>
                                        <Pages />
                                    </div>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/contact"
                                className={({isActive}) =>
                                    `block py-2  duration-200 ${isActive ? "text-[#FFFFFFCC]" : "text-[#FFFFFFCC]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFFFFFCC] lg:p-0`
                                }
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                            
                            
                         </ul>
                     </div>
                     <div className="post-job-button  ">
                        <button className='bg-[#2f55d4] text-white flex rounded-lg px-5 py-2 
                        '>
                            <FontAwesomeIcon icon={faCloudArrowUp} style={{color: "#ffffff", paddingTop:"4px", paddingRight:"4px"}} />
                            <p className='text-[16px] '>Post a Job</p>

                        </button>

                     </div>

                    </div>
                </div>

  )
}

export default Navbar