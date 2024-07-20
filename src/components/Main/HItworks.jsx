import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faUser, faEnvelope, faPhone,faDiamond, faComputer, faLandmark, faWandMagicSparkles, faBuilding, faLocationArrow, faTvAlt, faPerson, faAngleRight, faBuildingColumns, faCalendar, faParagraph, faFile, faFileAlt, faCalendarCheck, faUserAlt, faUserGroup} from '@fortawesome/free-solid-svg-icons'


function HItworks() {
  return (
    <section className='popular-cat flex flex-col   w-screen right-0 left-0 py-[100px]'>
        <div className='container'>
              <div className='heading flex flex-col items-center mb-2 relative'>
                  <div className='pb-[48px] '>
                        <h4 className='text-[30px] flex   relative '>Ho<h4 className='text-[30px]  underline  underline-offset-[30px]   decoration-card-blue  decoration-blue-700'>w&nbsp;It&nbsp;W</h4>orks</h4>
                        <div className="logo flex   justify-center relative">
                                <FontAwesomeIcon icon={faDiamond} style={{color: "#064ecb",position:"absolute", marginTop:'13px', marginRight: '12px'
                        }} />
                        </div>
                  </div>
                  <p className='text-[#8492A6] text-[16px] relative mx-[168px] text-wrap'>
                  Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                  </p>
              </div>
              <div className="categories font-nunito  flex flex-wrap items-start justify-center my-4  mx-auto gap-3 py-[100px]">
                  {/* register an account  */}
                    <div className="RegisterAccount    w-[30%]     mt-6 pt-2 px-3 ">
                    <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  p-6 '>

                      <div className="logo flex justify-center items-center relative  w-[90px] h-[90px] rounded-full px-[39px] pb-[16px] my-3 mx-2 bg-[#edf0fb]">
                            <div className='w-[90px] h-[90px] flex justify-center items-center '>
                            <div className="bg-[url('src/Images/registeraccount.png')] w-[50px] h-[50px]  p-5 bg-top  bg-cover relative   rounded-full "> </div>
                            </div>

                      
                        </div>
                      <div>
                        <h5 className='text-[20px] mb-2 font-nunito '>Register an Account</h5>
                      </div>


                        <div>
                            <p className='text-[16px] mb-4 text-[#8492a6] '>
                            Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut a, justo.
                            </p>
                        </div>

                        <div className=''>
                            <button className='flex justify-between items-center gap-3 text-[#2f55d4]'>
                                    <p >Read More</p>
                                    <FontAwesomeIcon icon={faAngleRight} style={{color: "#2f55d4", }} />
                            </button>
                        </div>

                        
                    </div>
                    </div>
                    
                  {/* search your job */}
                  <div className="searchJob    w-[30%]     mt-6 pt-2 px-3 ">
                    <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  p-6 '>
                      <div className="logo flex justify-center items-center relative  w-[90px] h-[90px] rounded-full px-[39px] pb-[16px] my-3 mx-2 bg-[#edf0fb]">
                      <div className='w-[90px] h-[90px] flex justify-center items-center '>
                            <div className="bg-[url('src/Images/searchjob.png')] w-[50px] h-[50px]     bg-cover relative   rounded-full "> </div>
                            </div> 
                      
                        </div>
                      <div>
                        <h5 className='text-[20px] mb-2 font-nunito '>Search your Job</h5>
                      </div>


                        <div>
                            <p className='text-[16px] mb-4 text-[#8492a6] '>
                            Aliquam lorem ante dapibus in, viverra feugiatquis a tellus. Phasellus viverra nulla ut Quisque rutrum.
                            </p>
                        </div>

                        <div className=''>
                            <button className='flex justify-between items-center gap-3 text-[#2f55d4]'>
                                    <p >Read More</p>
                                    <FontAwesomeIcon icon={faAngleRight} style={{color: "#2f55d4", }} />
                            </button>
                        </div>

                        
                    </div>
                    </div>

                      {/* Apply for Job */}
                      <div className="applyjob    w-[30%]   mt-6 pt-2 px-3 ">
                        <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  p-6 '>
                        <div className="logo flex justify-center items-center relative  w-[90px] h-[90px] rounded-full px-[39px] pb-[16px] my-3 mx-2 bg-[#edf0fb]">
                        <div className='w-[90px] h-[90px] flex justify-center items-center '>
                            <div className="bg-[url('src/Images/applyjob.png')] w-[50px] h-[50px]  p-5 bg-center  bg-cover relative   rounded-full "> </div>
                            </div> 
                      
                        </div>
                      <div>
                        <h5 className='text-[20px] mb-2 font-nunito '>Apply for Job</h5>
                      </div>


                        <div>
                            <p className='text-[16px] mb-4 text-[#8492a6] '>
                            Nullam dictum felis eu pede mollis pretiumetus Integer tincidunt. Cras dapibus. semper nisi. 
                            </p>
                        </div>

                        <div className=''>
                            <button className='flex justify-between items-center gap-3 text-[#2f55d4]'>
                                    <p >Read More</p>
                                    <FontAwesomeIcon icon={faAngleRight} style={{color: "#2f55d4", }} />
                            </button>
                        </div>

                        
                    </div>
                    </div>
              </div>

               <div className="bg-[url('src/Images/bg-counters.jpg')] bg-auto bg-center w-full h-[300px]  bg-[#282c32b3] z-0 top-0 left-0  mb-4 ">
                <div className='bg-[#5e77ccbf] w-full h-[300px] z-0 flex items-center justify-center'>
                  <div className="container flex justify-evenly items-center sm:text-[16px] md:text-[20px] font-nunito">
                    {/* first */}
                    <div className="companies flex  justify-center items-center py-6 px-2 text-white">
                      <div className="icon ">
                      <FontAwesomeIcon icon={faLandmark} size='2xl'  style={{color:"#ffffff", marginRight:"16px"}}/>
                      </div>
                      <div className="company flex flex-col mt-4 justify-start items-start">
                        <p className='md:text-[42.25px] sm:text-[36.25px] mb-1 font-semibold '>120</p>
                        <p>COMPANIES</p>
                      </div>

                    </div>

                    {/* second */}
                    <div className="companies flex  justify-center items-center py-6 px-2 text-white">
                      <div className="icon ">
                      <FontAwesomeIcon icon={faFileAlt} size='2xl'  style={{color:"#ffffff", marginRight:"16px"}}/>
                      </div>
                      <div className="company flex flex-col mt-4 justify-start items-start">
                        <p className='md:text-[42.25px] sm:text-[36.25px] mb-1 font-semibold '>480</p>
                        <p>APPLICATIONS</p>
                      </div>
                    </div>

                    {/* third */}
                    <div className="companies flex  justify-center items-center py-6 px-2 text-white">
                      <div className="icon ">
                      <FontAwesomeIcon icon={faCalendarCheck} size='2xl'  style={{color:"#ffffff", marginRight:"16px"}}/>
                      </div>
                      <div className="company flex flex-col mt-4 justify-start items-start">
                        <p className='md:text-[42.25px] sm:text-[36.25px] mb-1 font-semibold '>120</p>
                        <p>JOBS POSTED</p>
                      </div>
                    </div>

                     {/* fourth */}
                     <div className="companies flex  justify-center items-center py-6 px-2 text-white">
                      <div className="icon ">
                      <FontAwesomeIcon icon={faUserGroup} size='2xl'  style={{color:"#ffffff", marginRight:"16px"}}/>
                      </div>
                      <div className="company flex flex-col mt-4 justify-start items-start">
                        <p className='md:text-[42.25px] sm:text-[36.25px] mb-1 font-semibold '>200</p>
                        <p>MEMBERS</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
        </div>
                
                
      

  </section>
  )
}


export default HItworks