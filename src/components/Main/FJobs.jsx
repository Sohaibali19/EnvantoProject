import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser, faEnvelope, faPhone,faDiamond, faComputer, faLandmark, faWandMagicSparkles, faBuilding, faLocationArrow, faTvAlt, faPerson, faAngleRight, faStar, faLocationDot, faAnglesRight, } from '@fortawesome/free-solid-svg-icons'


function FJobs() {
  return (
    <section className='FJobs flex flex-col   w-screen right-0 left-0 py-[100px] bg-[#f8f9fc] font-nunito'>
        <div className='container'>
                <div className='heading flex flex-col items-center justify-center mb-2 relative'>
                    <div className='pb-[48px] '>
                        <h4 className='text-[30px] flex   relative '>Find<h4 className='text-[30px]  underline  underline-offset-[30px] underline-w-[5px]  decoration-card-blue  decoration-blue-700'>&nbsp;Your&nbsp;</h4>Jobs</h4>
                        <div className="logo flex   justify-center relative">
                                <FontAwesomeIcon icon={faDiamond} style={{color: "#064ecb",position:"absolute", marginTop:'10px', marginRight: '0px'
                        }} />
                        </div>
                    </div>
                    <p className='text-[#8492A6] text-[16px] relative font-nunito '>
                        Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                    </p>
                </div>

                <div className=" flex justify-center items-center ">
                    <nav className='mt-6 text-[16px] w-[60%] bg-white text-[#3c4858] font-bold rounded-lg  px-0 flex justify-between '>
                            <div className='py-[11.2px] px-[64px]  bg-[#2f55d4] rounded-lg text-white'>
                                Recent Jobs
                            </div>
                            <div className='py-[11.2px] px-[64px]  rounded-lg '>
                                Featured Jobs
                            </div>
                            <div className='py-[11.2px] px-[64px]  rounded-lg '>
                                Part Time
                            </div>
                            <div className='py-[11.2px] px-[64px]  rounded-lg '>
                                Full Time
                            </div>
                    </nav>
                </div>

                {/* items  */}
                <div className='flex flex-col text-[16px] justify-center items-center font-nunito '>
                    <div className='container '>
                        {/* developer */}
                        <div className="dev mt-6 mx-24 hover:transition hover:ease-in-out  hover:-translate-y-2 hover:delay-500 duration-300 bg-white border-[1px] border-gray-[150] hover:border-[#2f55d4] rounded-lg text-[#8492a6] group ">
                            {/* top portion */}
                            <div className="top ">
                                <div className="label     bg-[#d8dff7]   w-[38.85px] h-[38.85px] group-hover:bg-[#2f55d4] rounded-tl-lg  rounded-br-full text-white ">
                                    <ul className="logo flex justify-center items-center  w-[28.85px] h-[28.85px]  rounded-tl-lg  rounded-br-full ">
                                        <li className='w-[28.85px] h-[28.85px]    flex justify-center items-center   '>
                                            <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", }} />
                                         </li>
                                    </ul>
                                </div>
                                <div className='p-6  flex flex-col '>
                                    <div className='flex justify-around items-center rounded-lg basis-[70%] mb-2'>
                                        <div className="bg-[url('src/Images/developer.png')] w-20 h-20 mt-[-40px]"></div>
                                        <div className='flex flex-col gap-3 text-[#8492a6]'>
                                            <h4 className='text-[20px] font-medium text-gray-600 '>Web Developer</h4>
                                            <h6> Web Technology Pvt.Ltd </h6>
                                        </div>

                                        <div className='flex justify-between items-center gap-3'>
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#2f55d4", }} /> 
                                            <p>Oakridge Lane Richerdson</p>
                                        </div>

                                        <div className='flex'>
                                            <p className='text-[#2f55d4]'>$</p>
                                            <p>100-1200/m</p>
                                        </div>

                                        <div>
                                            <p>Full Time</p>
                                        </div>

                                    </div>
                                    </div>

                            </div>
                            {/* bottom */}

                            <div className="bottom">
                            <div className='basis-[30%] p-4 bg-[#f8f9fc] w-full flex justify-between items-center rounded-lg '>
                                        <div>
                                                <p>Experience 1-2 Years</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <p className='text-gray-600 font-semibold'>Notes:</p>
                                            <p>Languages Only differs in their grammer.</p>
                                        </div>

                                        <div className='pr-16'>
                                            <button className='flex justify-between items-center gap-3 text-[#2f55d4]'>
                                                <p >Apply Now</p>
                                                <FontAwesomeIcon icon={faAnglesRight} style={{color: "#2f55d4", }} />
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        {/* php */}
                        <div className="dev mt-6 mx-24 hover:transition hover:ease-in-out  hover:-translate-y-2 hover:delay-300 duration-300 bg-white border-[1px] border-gray-[150] hover:border-[#2f55d4] rounded-lg text-[#8492a6] group">
                            {/* top portion */}
                            <div className="top ">
                                <div className="label     bg-[#d8dff7]  group-hover:bg-[#2f55d4] w-[38.85px] h-[38.85px]  rounded-tl-lg rounded-br-full text-white transform ">
                                    <ul className="logo flex justify-center items-center  w-[28.85px] h-[28.85px]  ">
                                        <li className='w-[28.85px] h-[28.85px]    flex justify-center items-center '>
                                    <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", }} />
                                         </li>
                                    </ul>
                                </div>
                                <div className='p-6  flex flex-col '>
                                    <div className='flex justify-around items-center rounded-lg basis-[70%] mb-2'>
                                        <div className="bg-[url('src/Images/php.png')] w-20 h-20 mt-[-40px]"></div>
                                        <div className='flex flex-col gap-3 text-[#8492a6]'>
                                            <h4 className='text-[20px] font-medium text-gray-600 '>PhP Developer</h4>
                                            <h6> Web Technology Pvt.Ltd </h6>
                                        </div>

                                        <div className='flex justify-between items-center gap-3'>
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#2f55d4", }} /> 
                                            <p>Berkshire Circle Knoxvile</p>
                                        </div>

                                        <div className='flex'>
                                            <p className='text-[#2f55d4]'>$</p>
                                            <p>900-1100/m</p>
                                        </div>

                                        <div>
                                            <p>Full Time</p>
                                        </div>

                                    </div>
                                    </div>

                            </div>
                            {/* bottom */}

                            <div className="bottom">
                            <div className='basis-[30%] p-4 bg-[#f8f9fc] w-full flex justify-between items-center rounded-lg '>
                                        <div>
                                                <p>Experience 1-2 Years</p>
                                        </div>
                                        {/* <div className='flex gap-2'>
                                            <p className='text-gray-600 font-semibold'>Notes:</p>
                                            <p>Languages Only differs in their grammer.</p>
                                        </div> */}

                                        <div className='pr-16'>
                                            <button className='flex justify-between items-center gap-3 text-[#2f55d4]'>
                                                <p >Apply Now</p>
                                                <FontAwesomeIcon icon={faAnglesRight} style={{color: "#2f55d4", }} />
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        {/* graphics */}

                        <div className="dev mt-6 mx-24 hover:transition hover:ease-in-out  hover:-translate-y-2 hover:delay-500 duration-300 bg-white border-[1px] border-gray-[150] hover:border-[#2f55d4] rounded-lg text-[#8492a6] group">
                            {/* top portion */}
                            <div className="top ">
                                <div className="label     bg-[#d8dff7]  group-hover:bg-[#2f55d4] w-[38.85px] h-[38.85px]  rounded-tl-lg rounded-br-full text-white transform z-[100]">
                                    <ul className="logo flex justify-center items-center  w-[28.85px] h-[28.85px]  ">
                                        <li className='w-[28.85px] h-[28.85px]    flex justify-center items-center '>
                                    <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", }} />
                                         </li>
                                    </ul>
                                </div>
                                <div className='p-6  flex flex-col '>
                                    <div className='flex justify-around items-center rounded-lg basis-[70%] mb-2'>
                                        <div className="bg-[url('src/Images/graphic.png')] w-20 h-20 mt-[-40px]"></div>
                                        <div className='flex flex-col gap-3 text-[#8492a6]'>
                                            <h4 className='text-[20px] font-medium text-gray-600 '>Graphic Designer</h4>
                                            <h6> Web Technology Pvt.Ltd </h6>
                                        </div>

                                        <div className='flex justify-between items-center gap-3'>
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#2f55d4", }} /> 
                                            <p>Sumner Street Anaheim</p>
                                        </div>

                                        <div className='flex'>
                                            <p className='text-[#2f55d4]'>$</p>
                                            <p>800-1000/m</p>
                                        </div>

                                        <div>
                                            <p>Part Time</p>
                                        </div>

                                    </div>
                                    </div>

                            </div>
                            {/* bottom */}

                            <div className="bottom">
                            <div className='basis-[30%] p-4 bg-[#f8f9fc] w-full flex justify-between items-center rounded-lg '>
                                        <div>
                                                <p>Experience 0-1 Years</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <p className='text-gray-600 font-semibold'>Notes:</p>
                                            <p>Languages Only differs in their grammer.</p>
                                        </div>

                                        <div className='pr-16'>
                                            <button className='flex justify-between items-center gap-3 text-[#2f55d4]'>
                                                <p >Apply Now</p>
                                                <FontAwesomeIcon icon={faAnglesRight} style={{color: "#2f55d4", }} />
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        {/* UI/UX */}
                        <div className="dev mt-6 mx-24 hover:transition hover:ease-in-out  hover:-translate-y-2 hover:delay-500 duration-300 bg-white border-[1px] border-gray-[150] hover:border-[#2f55d4] rounded-lg text-[#8492a6] group">
                            {/* top portion */}
                            <div className="top ">
                                <div className="label     bg-[#d8dff7]  group-hover:bg-[#2f55d4] w-[38.85px] h-[38.85px]  rounded-tl-lg rounded-br-full text-white transform">
                                    <ul className="logo flex justify-center items-center  w-[28.85px] h-[28.85px]  ">
                                        <li className='w-[28.85px] h-[28.85px]   flex justify-center items-center '>
                                    <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", }} />
                                         </li>
                                    </ul>
                                </div>
                                <div className='p-6  flex flex-col '>
                                    <div className='flex justify-around items-center rounded-lg basis-[70%] mb-2'>
                                        <div className="bg-[url('src/Images/ui.png')] w-20 h-20 mt-[-40px]"></div>
                                        <div className='flex flex-col gap-3 text-[#8492a6]'>
                                            <h4 className='text-[20px] font-medium text-gray-600 '>UI/UX Designer</h4>
                                            <h6> Web Themes Pvt.Ltd </h6>
                                        </div>

                                        <div className='flex justify-between items-center gap-3'>
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#2f55d4", }} /> 
                                            <p>Pnewood Drive Chichago</p>
                                        </div>

                                        <div className='flex'>
                                            <p className='text-[#2f55d4]'>$</p>
                                            <p>100-1200/m</p>
                                        </div>

                                        <div>
                                            <p>Freelancer</p>
                                        </div>

                                    </div>
                                    </div>

                            </div>
                            {/* bottom */}

                            <div className="bottom">
                            <div className='basis-[30%] p-4 bg-[#f8f9fc] w-full flex justify-between items-center rounded-lg '>
                                        <div>
                                                <p>Experience 1-2 Years</p>
                                        </div>
                                        {/* <div className='flex gap-2'>
                                            <p className='text-gray-600 font-semibold'>Notes:</p>
                                            <p>Languages Only differs in their grammer.</p>
                                        </div> */}

                                        <div className='pr-16'>
                                            <button className='flex justify-between items-center gap-3 text-[#2f55d4]'>
                                                <p >Apply Now</p>
                                                <FontAwesomeIcon icon={faAnglesRight} style={{color: "#2f55d4", }} />
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                            {/* Last container with numbers 1,2,3,4 */}
                        <div className=''> 
                            <div className="container flex justify-center items-center mt-6 pt-2 px-2 gap-3 text-[14px] text-[#8492a6] font-nunito">
                                <div className="logo  flex justify-center items-center w-10 h-10 mb-4 rounded-full bg-[#dee2e6] border-[#dee2e6]">
                                        
                                </div>
                                <div className="logo  flex justify-center items-center w-10 h-10 mb-4 cursor-pointer rounded-full bg-[#2f55d4] text-white border-gray-100">
                                        <p>1</p>
                                </div>
                                <div className="logo  flex justify-center items-center w-10 h-10 mb-4 cursor-pointer rounded-full bg-white hover:bg-[#edf0fb]  border-gray-200 border-2">
                                        <p>2</p>
                                </div>
                                <div className="logo  flex justify-center items-center w-10 h-10 mb-4 cursor-pointer rounded-full bg-white hover:bg-[#edf0fb]  border-gray-200 border-2">
                                        <p>3</p>
                                </div>
                                <div className="logo  flex justify-center items-center w-10 h-10 mb-4 cursor-pointer rounded-full bg-white hover:bg-[#edf0fb]  border-gray-200 border-2">
                                        <p>4</p>
                                </div>
                                <div className="logo  flex justify-center items-center w-10 h-10 mb-4 cursor-pointer rounded-full bg-white hover:bg-[#edf0fb]  border-gray-200 border-2">
                                <FontAwesomeIcon icon={faAnglesRight} style={{color: "#8492a6", }} />
                                </div>

                            </div>
                        </div>

                    </div>
             </div>
        </div>
    </section>
  )
}

export default FJobs