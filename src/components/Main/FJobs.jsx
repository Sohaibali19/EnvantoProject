import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser, faEnvelope, faPhone,faDiamond, faComputer, faLandmark, faWandMagicSparkles, faBuilding, faLocationArrow, faTvAlt, faPerson, faAngleRight, faStar, faLocationDot, faAnglesRight, } from '@fortawesome/free-solid-svg-icons'


function FJobs() {
  return (
    <section className='FJobs flex flex-col  items-center w-screen right-0 left-0 py-[100px] md:py-[100px] sm:py-[50px] bg-[#f8f9fc] font-nunito'>
        <div className='container'>
                <div className='heading flex flex-col items-center justify-center mb-2 relative'>
                    <div className='pb-[48px] '>
                        <h4 className='text-[30px] md:text-[30px] sm:text-[26px] flex   relative '>Find<h4 className='text-[30px] md:text-[30px] sm:text-[26px]  underline  md:underline-offset-[30px] sm:underline-offset-[28px] underline-w-[5px]  decoration-card-blue  decoration-blue-700'>&nbsp;Your&nbsp;</h4>Jobs</h4>
                        <div className="logo flex   justify-center relative">
                                <FontAwesomeIcon icon={faDiamond} style={{color: "#064ecb",position:"absolute", marginTop:'10px', marginRight: '0px',
                        }}  />
                        </div>
                    </div>
                    <p className='text-[#8492A6] text-[16px] relative  text-center mx-[100px] md:mx-[100px] sm:mx-[6px] '>
                        Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                    </p>
                </div>

                <div className=" md:flex flex sm:flex-col sm:items-center justify-center sm:mx-3 mx-0 md:mx-0">
                    <nav className='mt-6 lg:text-[16px] md:text-[14px] lg:w-[80%] xl:[70%] md:w-[80%] sm:w-full bg-white text-[#3c4858] font-bold rounded-lg   flex md:flex-row sm:flex-col lg:justify-between  md:justify-around text-center'>
                            <div className='py-[11.2px]   lg:px-[40px] md:px-[40px]  bg-[#2f55d4] rounded-lg text-white'>
                                Recent Jobs
                            </div>
                            <div className='py-[11.2px]  lg:px-[40px] md:px-[40px]  rounded-lg text-center '>
                                Featured Jobs
                            </div>
                            <div className='py-[11.2px]   lg:px-[40px] md:px-[40px]  rounded-lg '>
                                Part Time
                            </div>
                            <div className='py-[11.2px] lg:px-[40px] md:px-[40px]  rounded-lg '>
                                Full Time
                            </div>
                    </nav>
                </div>

                {/* items  */}
                <div className='flex flex-col text-[16px] justify-center items-center font-nunito '>
                    <div className='container '>
                        {/* Web-developer */}
                        <div className="dev mt-6 lg:mx-24 md:mx-20 hover:transition sm:mx-3  mx-0 hover:ease-in-out  hover:-translate-y-2 hover:delay-500 duration-300 bg-white border-[1px] border-gray-[150] hover:border-[#2f55d4] rounded-lg text-[#8492a6] group ">
                            {/* top portion */}
                            <div className="top ">
                                <div className="label     bg-[#d8dff7]   w-[38.85px] h-[38.85px] group-hover:bg-[#2f55d4] rounded-tl-lg  rounded-br-full text-white ">
                                    <ul className="logo flex  justify-center items-center  w-[28.85px] h-[28.85px]  rounded-tl-lg  rounded-br-full ">
                                        <li className='w-[28.85px] h-[28.85px]    flex justify-center items-center   '>
                                            <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", }} />
                                         </li>
                                    </ul>
                                </div>

                                <div className='py-6 lg:px-6 md:px-6  sm:px-6 flex  flex-col'>
                                    <div className='flex md:flex-row sm:flex-col justify-around  lg:items-center md:items-start rounded-lg basis-[80%] mb-2 md:gap-1 sm:gap-2'>
                                        <div className="bg-[url('src/Images/developer.png')]  sm:w-20 sm:h-20  w-20 h-20 mt-[-40px]  lg:px-0 md:px-[42px] sm:ml-24 md:ml-0"></div>
                                        <div className='flex flex-col text-start md:gap-3 gap-3 sm:gap-2 text-[#8492a6] lg:ml-0 md:ml-5 md:-mt-7 lg:mt-0'>
                                            <h4 className='lg:text-[20px] md:text-[18px] sm:text-xl  font-semibold text-gray-600 '>Web Developer</h4>
                                            <h6 className='sm:text-lg'> Web Technology Pvt.Ltd </h6>
                                        </div>

                                        <div className='flex md:justify-between md:items-center sm:justify-start justify-between items-start gap-3  lg:mt-0 md:-mt-5'>
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#2f55d4", }} /> 
                                            <p className='md:text-sm '>Oakridge Lane Richerdson</p>
                                        </div>

                                        <div className='flex text-sm lg:mt-0 md:-mt-5'>
                                            <p className='text-[#2f55d4]'>$</p>
                                            <p>100-1200/m</p>
                                        </div>

                                        <div className='lg:mt-0 md:-mt-5 text-sm'>
                                            <p>Full Time</p>
                                        </div>

                                    </div>
                                    </div>

                            </div>
                            {/* bottom */}

                            <div className="bottom">
                            <div className='basis-[30%] lg:p-4 md:p-2 sm:p-4 bg-[#f8f9fc] w-full flex md:flex-row flex-row sm:flex-col md:justify-between sm:justify-start sm:items-start justify-between items-center md:items-center rounded-lg gap-3 text-[16px]'>
                                        <div className=' sm:text-[16px] '>
                                                <p>Experience: 1-2 Years</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <p className='text-gray-600 font-semibold md:text-sm sm:text-[16px]'>Notes:</p>
                                            <p className='md:text-sm sm:text-[16px]'>Languages Only differs in their grammer.</p>
                                        </div>

                                        <div className='lg:pr-16 md:pr-2'>
                                            <button className='flex md:flex-col lg:flex-row sm:flex-row justify-between  items-center gap-3 text-sm text-[#2f55d4]'>
                                                <p >Apply Now</p>
                                                <FontAwesomeIcon icon={faAnglesRight} style={{color: "#2f55d4",  }} />
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        {/* php */}
                        <div className="dev mt-6 lg:mx-24 md:mx-20 hover:transition sm:mx-3  mx-0 hover:ease-in-out  hover:-translate-y-2 hover:delay-500 duration-300 bg-white border-[1px] border-gray-[150] hover:border-[#2f55d4] rounded-lg text-[#8492a6] group ">
                            {/* top portion */}
                            <div className="top ">
                                <div className="label     bg-[#d8dff7]   w-[38.85px] h-[38.85px] group-hover:bg-[#2f55d4] rounded-tl-lg  rounded-br-full text-white ">
                                    <ul className="logo flex  justify-center items-center  w-[28.85px] h-[28.85px]  rounded-tl-lg  rounded-br-full ">
                                        <li className='w-[28.85px] h-[28.85px]    flex justify-center items-center   '>
                                            <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", }} />
                                         </li>
                                    </ul>
                                </div>

                                <div className='py-6 lg:px-6 md:px-6  sm:px-6 flex  flex-col'>
                                    <div className='flex md:flex-row sm:flex-col justify-around  lg:items-center md:items-start rounded-lg basis-[80%] mb-2 md:gap-1 sm:gap-2'>
                                        <div className="bg-[url('src/Images/php.png')]  sm:w-20 sm:h-20  w-20 h-20 mt-[-40px]  lg:px-0 md:px-[42px] sm:ml-24 md:ml-0"></div>
                                        <div className='flex flex-col text-start md:gap-3 gap-3 sm:gap-2 text-[#8492a6] lg:ml-0 md:ml-5 md:-mt-7 lg:mt-0'>
                                            <h4 className='lg:text-[20px] md:text-[18px] sm:text-xl  font-semibold text-gray-600 '>Php Developer</h4>
                                            <h6 className='sm:text-lg'> Web Themes Pvt.Ltd </h6>
                                        </div>

                                        <div className='flex md:justify-between md:items-center sm:justify-start justify-between items-start gap-3  lg:mt-0 md:-mt-5'>
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#2f55d4", }} /> 
                                            <p className='md:text-sm '>Berkshire Circle Knoxville</p>
                                        </div>

                                        <div className='flex text-sm lg:mt-0 md:-mt-5'>
                                            <p className='text-[#2f55d4]'>$</p>
                                            <p>900-1100/m</p>
                                        </div>

                                        <div className='lg:mt-0 md:-mt-5 text-sm'>
                                            <p>Full Time</p>
                                        </div>

                                    </div>
                                    </div>

                            </div>
                            {/* bottom */}

                            <div className="bottom">
                            <div className='basis-[30%] lg:p-4 md:p-2 sm:p-4 bg-[#f8f9fc] w-full flex md:flex-row flex-row sm:flex-col md:justify-between sm:justify-start sm:items-start justify-between items-center md:items-center rounded-lg gap-3 text-[16px]'>
                                        <div className=' sm:text-[16px] '>
                                                <p>Experience: 2 - 3  Years</p>
                                        </div>
                                       

                                        <div className='lg:pr-16 md:pr-2'>
                                            <button className='flex md:flex-col lg:flex-row sm:flex-row justify-between  items-center gap-3 text-sm text-[#2f55d4]'>
                                                <p >Apply Now</p>
                                                <FontAwesomeIcon icon={faAnglesRight} style={{color: "#2f55d4",  }} />
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>


                       

                        {/* graphics */}

                        <div className="dev mt-6 lg:mx-24 md:mx-20 hover:transition sm:mx-3  mx-0 hover:ease-in-out  hover:-translate-y-2 hover:delay-500 duration-300 bg-white border-[1px] border-gray-[150] hover:border-[#2f55d4] rounded-lg text-[#8492a6] group ">
                            {/* top portion */}
                            <div className="top ">
                                <div className="label     bg-[#d8dff7]   w-[38.85px] h-[38.85px] group-hover:bg-[#2f55d4] rounded-tl-lg  rounded-br-full text-white ">
                                    <ul className="logo flex  justify-center items-center  w-[28.85px] h-[28.85px]  rounded-tl-lg  rounded-br-full ">
                                        <li className='w-[28.85px] h-[28.85px]    flex justify-center items-center   '>
                                            <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", }} />
                                         </li>
                                    </ul>
                                </div>

                                <div className='py-6 lg:px-6 md:px-6  sm:px-6 flex  flex-col'>
                                    <div className='flex md:flex-row sm:flex-col justify-around  lg:items-center md:items-start rounded-lg basis-[80%] mb-2 md:gap-1 sm:gap-2'>
                                        <div className="bg-[url('src/Images/graphic.png')]  sm:w-20 sm:h-20  w-20 h-20 mt-[-40px]  lg:px-0 md:px-[42px] sm:ml-24 md:ml-0"></div>
                                        <div className='flex flex-col text-start md:gap-3 gap-3 sm:gap-2 text-[#8492a6] lg:ml-0 md:ml-5 md:-mt-7 lg:mt-0'>
                                            <h4 className='lg:text-[20px] md:text-[18px] sm:text-xl  font-semibold text-gray-600 '>Graphic Designer</h4>
                                            <h6 className='sm:text-lg'> Web Technology Pvt.Ltd </h6>
                                        </div>

                                        <div className='flex md:justify-between md:items-center sm:justify-start justify-between items-start gap-3  lg:mt-0 md:-mt-5'>
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#2f55d4", }} /> 
                                            <p className='md:text-sm '>Summer Street Anaheim</p>
                                        </div>

                                        <div className='flex text-sm lg:mt-0 md:-mt-5'>
                                            <p className='text-[#2f55d4]'>$</p>
                                            <p>800-1000/m</p>
                                        </div>

                                        <div className='lg:mt-0 md:-mt-5 text-sm'>
                                            <p>Part Time</p>
                                        </div>

                                    </div>
                                    </div>

                            </div>
                            {/* bottom */}

                            <div className="bottom">
                            <div className='basis-[30%] lg:p-4 md:p-2 sm:p-4 bg-[#f8f9fc] w-full flex md:flex-row flex-row sm:flex-col md:justify-between sm:justify-start sm:items-start justify-between items-center md:items-center rounded-lg gap-3 text-[16px]'>
                                        <div className=' sm:text-[16px] '>
                                                <p>Experience: 0 - 1  Years</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <p className='text-gray-600 font-semibold md:text-sm sm:text-[16px]'>Notes:</p>
                                            <p className='md:text-sm sm:text-[16px]'>Languages Only differs in their grammer.</p>
                                        </div>

                                        <div className='lg:pr-16 md:pr-2'>
                                            <button className='flex md:flex-col lg:flex-row sm:flex-row justify-between  items-center gap-3 text-sm text-[#2f55d4]'>
                                                <p >Apply Now</p>
                                                <FontAwesomeIcon icon={faAnglesRight} style={{color: "#2f55d4",  }} />
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        

                        {/* UI/UX */}
                        <div className="dev mt-6 lg:mx-24 md:mx-20 hover:transition sm:mx-3  mx-0 hover:ease-in-out  hover:-translate-y-2 hover:delay-500 duration-300 bg-white border-[1px] border-gray-[150] hover:border-[#2f55d4] rounded-lg text-[#8492a6] group ">
                            {/* top portion */}
                            <div className="top ">
                                <div className="label     bg-[#d8dff7]   w-[38.85px] h-[38.85px] group-hover:bg-[#2f55d4] rounded-tl-lg  rounded-br-full text-white ">
                                    <ul className="logo flex  justify-center items-center  w-[28.85px] h-[28.85px]  rounded-tl-lg  rounded-br-full ">
                                        <li className='w-[28.85px] h-[28.85px]    flex justify-center items-center   '>
                                            <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", }} />
                                         </li>
                                    </ul>
                                </div>

                                <div className='py-6 lg:px-6 md:px-6  sm:px-6 flex  flex-col'>
                                    <div className='flex md:flex-row sm:flex-col justify-around  lg:items-center md:items-start rounded-lg basis-[80%] mb-2 md:gap-1 sm:gap-2'>
                                        <div className="bg-[url('src/Images/ui.png')]  sm:w-20 sm:h-20  w-20 h-20 mt-[-40px]  lg:px-0 md:px-[42px] sm:ml-24 md:ml-0"></div>
                                        <div className='flex flex-col text-start md:gap-3 gap-3 sm:gap-2 text-[#8492a6] lg:ml-0 md:ml-5 md:-mt-7 lg:mt-0'>
                                            <h4 className='lg:text-[20px] md:text-[18px] sm:text-xl  font-semibold text-gray-600 '>Web Developer</h4>
                                            <h6 className='sm:text-lg'> Web Themes Pvt.Ltd </h6>
                                        </div>

                                        <div className='flex md:justify-between md:items-center sm:justify-start justify-between items-start gap-3  lg:mt-0 md:-mt-5'>
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#2f55d4", }} /> 
                                            <p className='md:text-sm '>Pinewood Drive Chicago</p>
                                        </div>

                                        <div className='flex text-sm lg:mt-0 md:-mt-5'>
                                            <p className='text-[#2f55d4]'>$</p>
                                            <p>1000-1200/m</p>
                                        </div>

                                        <div className='lg:mt-0 md:-mt-5 text-sm'>
                                            <p>Freelancer</p>
                                        </div>

                                    </div>
                                    </div>

                            </div>
                            {/* bottom */}

                            <div className="bottom">
                            <div className='basis-[30%] lg:p-4 md:p-2 sm:p-4 bg-[#f8f9fc] w-full flex md:flex-row flex-row sm:flex-col md:justify-between sm:justify-start sm:items-start justify-between items-center md:items-center rounded-lg gap-3 text-[16px]'>
                                        <div className=' sm:text-[16px] '>
                                                <p>Experience: 1-2 Years</p>
                                        </div>
                                        

                                        <div className='lg:pr-16 md:pr-2'>
                                            <button className='flex md:flex-col lg:flex-row sm:flex-row justify-between  items-center gap-3 text-sm text-[#2f55d4]'>
                                                <p >Apply Now</p>
                                                <FontAwesomeIcon icon={faAnglesRight} style={{color: "#2f55d4",  }} />
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