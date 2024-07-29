import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faUser, faEnvelope, faPhone,faDiamond, faComputer, faLandmark, faWandMagicSparkles, faBuilding, faLocationArrow, faTvAlt, faPerson, faAngleRight, faBuildingColumns, faCalendar, faParagraph, faFile, faFileAlt, faCalendarCheck, faUserAlt, faUserGroup} from '@fortawesome/free-solid-svg-icons'


function HItworks() {
  return (
    <section className='popular-cat flex flex-col items-center   w-screen right-0 left-0 py-[100px] md:py-[100px] sm:py-[50px]'>
        <div className='container'>
              <div className='heading flex flex-col items-center mb-2 relative'>
                  <div className='pb-[48px] '>
                        <h4 className='text-[30px] md:text-[30px] sm:text-[26px] flex   relative '>Ho<h4 className='text-[30px] md:text-[30px] sm:text-[26px] underline  md:underline-offset-[30px] sm:underline-offset-[29px]   decoration-card-blue  decoration-blue-700'>w&nbsp;It&nbsp;W</h4>orks</h4>
                        <div className="logo flex   justify-center relative">
                                <FontAwesomeIcon icon={faDiamond} style={{color: "#064ecb",position:"absolute", marginTop:'13px', marginRight: '12px'
                        }} />
                        </div>
                  </div>
                  <p className='text-[#8492A6] text-[16px] relative mx-[100px] md:mx-[100px] sm:mx-[6px] text-center'>
                  Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                  </p>
              </div>
              <div className="categories font-nunito  flex flex-row md:flex-row md:flex-wrap sm:flex-col items-start justify-center my-4  mx-auto lg:gap-3 md:gap-1 py-[100px]">
                  {/* register an account  */}
                    <div className="RegisterAccount    w-[30%] md:w-[30%] sm:w-full     mt-6 pt-2 px-3 ">
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
                  <div className="searchJob    w-[30%] md:w-[30%] sm:w-full     mt-6 pt-2 px-3 ">
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
                      <div className="applyjob    w-[30%] md:w-[30%] sm:w-full   mt-6 pt-2 px-3 ">
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
                            Nullam dictum felis eu pede mollis pretiumetus Integer tincidunt. Cras dapibus. semper nisi. viverra nulla ut Quisque rutrum.
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


                        
              
        </div>
                          {/* Last section of how it works */}
        <div className='w-full justify-center right-0 left-0'>
               <div className="bg-[url('src/Images/bg-counters.jpg')] bg-cover bg-center w-[100%] h-[320px] md:w-full md:h-[320px] sm:w-full sm:h-[450px] right-0 left-0 ">
                <div className='bg-[#5e77ccbf]  w-full h-[320px] md:w-full md:h-[320px] sm:w-full sm:h-[450px] z-0 flex items-center justify-center'>
                  <div className="container flex md:flex-row flex-row sm:flex-row   lg:justify-evenly  sm:justify-around items-center sm:text-[20px]  font-nunito">
                    <div className='flex sm:flex-col md:flex-row lg:flex-none  sm:gap-0 xl:gap-40 lg:gap-10'>
                      {/* first */}

                      <div className="companies flex  md:flex-row sm:flex-col  items-center py-6  px-2 text-white">
                          <div className="icon ">
                          <FontAwesomeIcon icon={faLandmark} lg:size='2xl' md:size='xl' sm:size='2xl' size='' style={{color:"#ffffff", marginRight:"16px"}}/>
                          </div>
                          <div className="company flex flex-col mt-4 md:mt-4 sm:mt-0 justify-start items-start md:justify-start md:items-start sm:justify-center sm:items-center">
                            <p className='lg:text-[42.25px] md:text-[36.25px] sm:text-[36.25px] mb-1  font-semibold '>120</p>
                            <p className='text-lg'>COMPANIES</p>
                          </div>

                      </div>

                      {/* second */}
                      <div className="companies flex  md:flex-row sm:flex-col  items-center py-6  px-2 text-white">
                          <div className="icon ">
                          <FontAwesomeIcon icon={faFileAlt} lg:size='2xl' md:size='xl' sm:size='2xl' size='' style={{color:"#ffffff", marginRight:"16px"}}/>
                          </div>
                          <div className="company flex flex-col mt-4 md:mt-4 sm:mt-0 justify-start items-start md:justify-start md:items-start sm:justify-center sm:items-center">
                            <p className='lg:text-[42.25px] md:text-[36.25px] sm:text-[36.25px] mb-1  font-semibold '>480</p>
                            <p className='text-lg'>APPLICATIONS</p>
                          </div>

                      </div>

                      
                    </div>

                    <div className='flex sm:flex-col md:flex-row xl:flex-none sm:gap-0 xl:gap-40'>
                    {/* third */}
                    <div className="companies flex  md:flex-row sm:flex-col  items-center py-6  px-2 text-white">
                          <div className="icon ">
                          <FontAwesomeIcon icon={faCalendarCheck} lg:size='2xl' md:size='xl' sm:size='2xl' size='' style={{color:"#ffffff", marginRight:"16px"}}/>
                          </div>
                          <div className="company flex flex-col mt-4 md:mt-4 sm:mt-0 justify-start items-start md:justify-start md:items-start sm:justify-center sm:items-center">
                            <p className='lg:text-[42.25px] md:text-[36.25px] sm:text-[36.25px] mb-1  font-semibold '>230</p>
                            <p className='text-lg'>JOBS POSTED</p>
                          </div>

                      </div>


                     {/* fourth */}
                     <div className="companies flex  md:flex-row sm:flex-col  items-center py-6  px-2 text-white">
                          <div className="icon ">
                          <FontAwesomeIcon icon={faUserGroup} lg:size='2xl' md:size='xl' sm:size='2xl' size='' style={{color:"#ffffff", marginRight:"16px"}}/>
                          </div>
                          <div className="company flex flex-col mt-4 md:mt-4 sm:mt-0 justify-start items-start md:justify-start md:items-start sm:justify-center sm:items-center">
                            <p className='lg:text-[42.25px] md:text-[36.25px] sm:text-[36.25px] mb-1  font-semibold '>200</p>
                            <p className='text-lg'>MEMBERS</p>
                          </div>

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