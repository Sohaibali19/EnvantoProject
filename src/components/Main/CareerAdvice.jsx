import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faUser, faEnvelope, faPhone,faDiamond, faComputer, faLandmark, faWandMagicSparkles, faBuilding, faLocationArrow, faTvAlt, faPerson, faAngleRight, faBuildingColumns, faCalendar, faParagraph, faFile, faFileAlt, faCalendarCheck, faUserAlt, faUserGroup, faHeart, faMessage} from '@fortawesome/free-solid-svg-icons'


function  CareerAdvice() {
  return (
    <section className='popular-cat flex flex-col  ml-[-155px] w-screen right-0 left-0 py-[100px] bg-[#f8f9fc]'>
        <div className='container'>
              <div className='heading flex flex-col items-center mb-2 relative'>
                  <h4 className='text-[30px] pb-[48px]  relative underline underline-offset-[30px] decoration-2 decoration-blue-700 '>How It Works</h4>
                  <div className="logo flex relative">
                  <FontAwesomeIcon icon={faDiamond} style={{color: "#064ecb",position:"absolute", marginTop:'-59px'
                  }} />
                  
                  </div>
                  <p className='text-gray-700 text-[16px] relative text-wrap mx-[48px] mb-1 '>
                  Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                  </p>



              </div>
              <div className="categories font-nunito w-[90%] px-5 flex flex-wrap items-start justify-center my-4 relative  mx-auto gap-3 py-[100px]">
                  {/* How Apps is the world to IT  */}
                    <div className="firstone  relative w-[30%]    mt-6  px-3  bg-white border-2 border-gray-200 rounded-lg transition ease-in-out hover:-translate-y-2 delay-300 ">
                    <div className='flex flex-col items-center   rounded-lg  px-6  pb-0'>
                            <div className=' relative flex justify-center items-center w-[400px] h-[300px]  rounded-tr-lg rounded-tl-lg mb-4 '>
                            <div className="bg-[url('src/Images/img-4.jpg')] bg-[#282c32b3] bg-cover bg-center w-full h-[300px]   rounded-tr-lg rounded-tl-lg">

                            <div className=' bg-[#282c32b3] w-full h-[300px] flex flex-col justify-between text-white mb-4   invisible hover:visible'>
                                <div className='flex justify-between items-center'>
                                    {/* Name and Date */}
                                    <div className='flex flex-col justify-center my-5 px-4'>
                                        <div className='flex justify-between items-center  gap-3 cursor-pointer'>
                                        <FontAwesomeIcon icon={faUser}  style={{color: "#edf0fb", }} />
                                            <div className='Name text-'>
                                                Muhammad Khan
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

                            
                      <div className='py-6 font-nunito flex items-start flex-col justify-start'>       
                      <div>
                        <h4 className='text-[20px] mb-2 font-semibold text-black'>How Apps is the IT World</h4>
                      </div>


                        <div className=' '>
                            <p className='text-[16px] mb-4 text-[#8492a6]  text-left'>Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut a, justo.
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
                    
                  {/* search your job */}
                  <div className="firstone  relative w-[30%]    mt-6  px-3  bg-white border-2 border-gray-200 rounded-lg transition ease-in-out hover:-translate-y-2 delay-300 ">
                    <div className='flex flex-col items-center   rounded-lg  px-6  pb-0'>
                            <div className=' relative flex justify-center items-center w-[400px] h-[300px]  rounded-tr-lg rounded-tl-lg mb-4 '>
                            <div className="bg-[url('src/Images/img-5.jpg')] bg-cover bg-center w-full h-[300px]   ">

                            <div className=' bg-[#282c32b3] w-full h-[350px] flex flex-col justify-between text-white   invisible hover:visible'>
                                <div className='flex justify-between items-center'>
                                    {/* Name and Date */}
                                    <div className='flex flex-col justify-center my-5 px-4'>
                                        <div className='flex justify-between items-center  gap-3 cursor-pointer'>
                                        <FontAwesomeIcon icon={faUser}  style={{color: "#edf0fb", }} />
                                            <div className='Name text-'>
                                                Muhammad Khan
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

                            
                      <div className='py-6 font-nunito flex items-start flex-col justify-start'>       
                      <div>
                        <h4 className='text-[20px] mb-2 font-semibold text-black'>Vestibulum Inte Ipsum Primis</h4>
                      </div>


                        <div className=' '>
                            <p className='text-[16px] mb-4 text-[#8492a6]  text-left'>Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut a, justo.
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

                      {/* Apply for Job */}
                      <div className="firstone  relative w-[30%]    mt-6  px-3  bg-white border-2 border-gray-200 rounded-lg transition ease-in-out hover:-translate-y-2 delay-300 ">
                    <div className='flex flex-col items-center   rounded-lg  px-6  pb-0'>
                            <div className=' relative flex justify-center items-center w-[400px] h-[300px]  rounded-tr-lg rounded-tl-lg mb-4 '>
                            <div className="bg-[url('src/Images/img-6.jpg')] bg-cover bg-center w-full h-[300px]   ">

                            <div className=' bg-[#282c32b3] w-full h-[350px] flex flex-col justify-between text-white   invisible hover:visible'>
                                <div className='flex justify-between items-center'>
                                    {/* Name and Date */}
                                    <div className='flex flex-col justify-center my-5 px-4'>
                                        <div className='flex justify-between items-center  gap-3 cursor-pointer'>
                                        <FontAwesomeIcon icon={faUser}  style={{color: "#edf0fb", }} />
                                            <div className='Name text-'>
                                                Muhammad Khan
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

                            
                      <div className='py-6 font-nunito flex items-start flex-col justify-start'>       
                      <div>
                        <h4 className='text-[20px] mb-2 font-semibold text-black'>Maecenus Tempus Tellus Eget</h4>
                      </div>


                        <div className=' '>
                            <p className='text-[16px] mb-4 text-[#8492a6]  text-left'>Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut a, justo.
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