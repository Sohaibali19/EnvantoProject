import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faUser, faEnvelope, faPhone,faDiamond, faComputer, faLandmark, faWandMagicSparkles, faBuilding, faLocationArrow, faTvAlt, faPerson, faAngleRight, faBuildingColumns, faCalendar, faParagraph, faFile, faFileAlt, faCalendarCheck, faUserAlt, faUserGroup, faHeart, faMessage} from '@fortawesome/free-solid-svg-icons'


function  CareerAdvice() {
  return (
    <section className='popular-cat flex flex-col items-center w-screen right-0 left-0 py-[100px] bg-[#f8f9fc]'>
        <div className='container'>
              <div className='heading flex flex-col items-center mb-2 relative'>
              <div className='pb-[48px] '>
                        <h4 className='text-[30px] flex   relative '>Car<h4 className='text-[30px]  underline  underline-offset-[30px] underline-w-[5px]  decoration-card-blue  decoration-blue-700'>eer&nbsp;Ad</h4>vice</h4>
                        <div className="logo flex   justify-center relative">
                                <FontAwesomeIcon icon={faDiamond} style={{color: "#064ecb",position:"absolute", marginTop:'13px', marginRight: '0px'
                        }} />
                        </div>
                    </div>
                  <p className='text-[#8492A6] text-[16px] relative mx-[100px] text-center'>
                  Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                  </p>
                </div>


              <div className="categories font-nunito w-[100%] px-3 flex  items-center justify-center my-4 relative  mx-auto gap-3 py-[100px]">
                  {/* How Apps is the world to IT  */}
                    <div className="first-one  relative lg:w-[30%] md:w-[100%]    mt-6    bg-white border-2 border-gray-200 rounded-lg transition ease-in-out hover:-translate-y-2 delay-300 duration-300">

                    <div className='flex flex-col items-center   rounded-lg    pb-0 group'>
                            <div className=' relative flex justify-center items-center w-full h-[300px]  rounded-tr-lg rounded-tl-lg mb-4  overflow-hidden'>
                            <div className="bg-[url('src/Images/img-4.jpg')]  bg-cover bg-center w-full lg:h-full relative  rounded-tr-lg rounded-tl-lg">

                            <div className=' bg-[#282c32b3] w-full h-full flex flex-col justify-between text-white  absolute  group-hover:bottom-0 opacity-0 group-hover:opacity-80'>
                                <div className='flex justify-between items-center '>
                                    {/* Name and Date */}
                                    <div className='flex flex-col justify-center my-5 px-4'>
                                        <div className='flex justify-start items-center  gap-3 cursor-pointer'>
                                        <FontAwesomeIcon icon={faUser}  style={{color: "#edf0fb", }} />
                                            <div className='Name text-'>
                                                Dirio Walls
                                            </div>

                                        </div>
                                        <div className='flex items-center gap-3'>
                                        <FontAwesomeIcon icon={faCalendarCheck}  style={{color: "#edf0fb", }} />
                                        <p>29, April 2019</p>
                                        </div>

                                    </div>

                                </div>
                                {/* heart and messages */}
                                <div className='flex items-end justify-end pr-12 mb-3
                                gap-3'>
                                    <div className='flex  items-center gap-1'>
                                    <FontAwesomeIcon icon={faHeart}  style={{color: "#edf0fb", }} />
                                    <p>33</p>

                                    </div>

                                    <div className='flex  items-center gap-1'>
                                    <FontAwesomeIcon icon={faMessage}  style={{color: "#edf0fb", }} />
                                    <p>8</p>

                                    </div>
                                </div>
                            </div>

                            
        
                            </div>
                            </div>

                            
                      <div className='py-6 font-nunito flex items-start flex-col justify-start px-5'>       
                      <div>
                        <h4 className='text-[20px] mb-2 font-semibold text-black'>How Apps is the IT World</h4>
                      </div>


                        <div className=' '>
                            <p className='text-[16px] mb-4 text-[#8492a6]  text-left'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, totam rem aperiam
                            </p>
                        </div>

                        <div className=''>
                            <button className='flex justify-between items-center gap-2 text-[#8492a6]'>
                                    <p >Read More</p>
                                    <FontAwesomeIcon icon={faAngleRight} style={{color: "#8492a6", }} />
                            </button>
                        </div>
                        </div>

                        
                    </div>
                    </div>
                    
                  {/* Vestibulum Inte Ipsum */}
                  <div className="firstone  relative lg:w-[30%] md:w-[100%]    mt-6    bg-white border-2 border-gray-200 rounded-lg transition ease-in-out hover:-translate-y-2 delay-300 duration-300">
                  <div className='flex flex-col items-center   rounded-lg    pb-0 group'>
                            <div className=' relative flex justify-center items-center w-full h-[300px]  rounded-tr-lg rounded-tl-lg mb-4  overflow-hidden'>
                            <div className="bg-[url('src/Images/img-5.jpg')] relative bg-cover bg-center w-full h-full   rounded-tr-lg rounded-tl-lg">

                            <div className=' bg-[#282c32b3] w-full h-full flex flex-col justify-between text-white  absolute  group-hover:bottom-0 opacity-0 group-hover:opacity-80'>
                                <div className='flex justify-between items-center '>
                                    {/* Name and Date */}
                                    <div className='flex flex-col justify-center my-5 px-4'>
                                        <div className='flex justify-start items-center  gap-3 cursor-pointer'>
                                        <FontAwesomeIcon icon={faUser}  style={{color: "#edf0fb", }} />
                                            <div className='Name text-'>
                                                Dirio Walls
                                            </div>

                                        </div>
                                        <div className='flex items-center gap-3'>
                                        <FontAwesomeIcon icon={faCalendarCheck}  style={{color: "#edf0fb", }} />
                                        <p>29, April 2019</p>
                                        </div>

                                    </div>

                                </div>
                                {/* heart and messages */}
                                <div className='flex items-end justify-end pr-3 mb-3
                                gap-3'>
                                    <div className='flex  items-center gap-1'>
                                    <FontAwesomeIcon icon={faHeart}  style={{color: "#edf0fb", }} />
                                    <p>33</p>

                                    </div>

                                    <div className='flex  items-center gap-1'>
                                    <FontAwesomeIcon icon={faMessage}  style={{color: "#edf0fb", }} />
                                    <p>8</p>

                                    </div>
                                </div>
                            </div>

                            
        
                            </div>
                            </div>

                            
                      <div className='py-6 font-nunito flex items-start flex-col justify-center px-5'>       
                      <div>
                        <h4 className='text-[20px] mb-2 font-semibold text-black'>Vestibulum ante ipsum Primis</h4>
                      </div>


                        <div className=' '>
                            <p className='text-[16px] mb-4 text-[#8492a6]  text-left'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, totam rem aperiam
                            </p>
                        </div>

                        <div className=''>
                            <button className='flex justify-between items-center gap-2 text-[#8492a6]'>
                                    <p >Read More</p>
                                    <FontAwesomeIcon icon={faAngleRight} style={{color: "#8492a6", }} />
                            </button>
                        </div>
                        </div>

                        
                    </div>
                    </div>

                      {/* Maecenus termeisufd dfjdk;lj*/}
                      <div className="firstone  relative lg:w-[30%] md:w-full    mt-6   bg-white border-2 border-gray-200 rounded-lg transition ease-in-out hover:-translate-y-2 delay-300 ">
                      <div className='flex flex-col items-center   rounded-lg   pb-0 group'>
                            <div className=' relative flex justify-center items-center w-full h-[300px]  rounded-tr-lg rounded-tl-lg mb-4  overflow-hidden'>
                            <div className="bg-[url('src/Images/img-6.jpg')]  bg-cover bg-center w-full h-[300px]   rounded-tr-lg rounded-tl-lg">

                            <div className=' bg-[#282c32b3] w-full h-[300px] flex flex-col justify-between text-white  absolute  group-hover:bottom-0 opacity-0 group-hover:opacity-80'>
                                <div className='flex justify-between items-center '>
                                    {/* Name and Date */}
                                    <div className='flex flex-col justify-center my-5 px-4'>
                                        <div className='flex justify-start items-center  gap-3 cursor-pointer'>
                                        <FontAwesomeIcon icon={faUser}  style={{color: "#edf0fb", }} />
                                            <div className='Name text-'>
                                                Dirio Walls
                                            </div>

                                        </div>
                                        <div className='flex items-center gap-3'>
                                        <FontAwesomeIcon icon={faCalendarCheck}  style={{color: "#edf0fb", }} />
                                        <p>29, April 2019</p>
                                        </div>

                                    </div>

                                </div>
                                {/* heart and messages */}
                                <div className='flex items-end justify-end pr-3 mb-3
                                gap-3'>
                                    <div className='flex  items-center gap-1'>
                                    <FontAwesomeIcon icon={faHeart}  style={{color: "#edf0fb", }} />
                                    <p>33</p>

                                    </div>

                                    <div className='flex  items-center gap-1'>
                                    <FontAwesomeIcon icon={faMessage}  style={{color: "#edf0fb", }} />
                                    <p>8</p>

                                    </div>
                                </div>
                            </div>

                            
        
                            </div>
                            </div>

                            
                      <div className='py-6 font-nunito flex items-start flex-col justify-start px-5'>       
                      <div>
                        <h4 className='text-[20px] mb-2 font-semibold text-black'>Maecenus tempus telet eget</h4>
                      </div>


                        <div className=' '>
                            <p className='text-[16px] mb-4 text-[#8492a6]  text-left'>DSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, totam rem aperiam
                            </p>
                        </div>

                        <div className=''>
                            <button className='flex justify-between items-center gap-2 text-[#8492a6]'>
                                    <p >Read More</p>
                                    <FontAwesomeIcon icon={faAngleRight} style={{color: "#8492a6", }} />
                            </button>
                        </div>
                        </div>

                        
                    </div>
                    </div>
              </div>

               
        </div>
                
                
      

  </section>
  )
}


export default CareerAdvice