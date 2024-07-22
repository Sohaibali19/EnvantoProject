import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faUser, faEnvelope, faPhone,faDiamond, faComputer, faLandmark, faWandMagicSparkles, faBuilding, faLocationArrow, faTvAlt, faPerson, faAngleRight, } from '@fortawesome/free-solid-svg-icons'

function Pcat() {
  return (
    <section className='popular-cat flex flex-col  items-center  w-screen right-0 left-0 py-[100px]'>
        <div className='container'>
            <div className='heading flex flex-col items-center mb-2 relative'>
              <div className='pb-[48px] mb-2'>
                <h4 className='text-[30px] flex   relative '>Popu<h4 className='text-[30px]  underline  underline-offset-[30px] underline-w-[5px] w decoration-card-blue  decoration-blue-700'>lar Cat</h4>egories</h4>
                <div className="logo flex   justify-center relative">
                <FontAwesomeIcon icon={faDiamond} style={{color: "#064ecb",position:"absolute", marginTop:'13px', marginRight: '25px'
                }} />
                
                </div>
                </div>
                <p className='text-[#8492A6] text-[16px] relative mx-[168px] text-wrap '>
                Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                </p>



            </div>
            <div className="categories font-nunito  flex flex-wrap items-center justify-center my-6   gap-5 p-20 ">
               {/* Developer */}
              <div className="developer    w-[22%]   transition ease-in-out hover:-translate-y-2 hover:delay-300  duration-300">
                <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  py-6 px-5'>
                  <div className="logo  flex justify-center items-center w-14 h-14 m-4 rounded-full bg-[#edf0fb]">
                    
                        <FontAwesomeIcon icon={faUser}  style={{color: "#064ecb", }} />
                    
                
                  </div>
                  <p className='text-[#3c4858]  text-[18px] mb-2 font-nunito'>Developer</p>
                  <div className="jobs">
                    <p className='text-[#2eca8b] text-center text-[16px] font-nunito'>780 Jobs</p>
                  </div>
                </div>
              </div>
              {/* technology */}
              <div className="developer w-[22%] transition ease-in-out hover:-translate-y-2 hover:delay-300 duration-300  ">
                <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  py-6 px-5'>
                  <div className="logo  flex justify-center items-center w-14 h-14 rounded-full m-4 bg-[#edf0fb]">
                  <FontAwesomeIcon icon={faComputer}  style={{color: "#064ecb", }} />
                
                  </div>
                  <p className='text-[#3c4858] font-nunito text-[18px] mb-2'>Technology</p>
                  <div className="jobs">
                    <p className='text-[#2eca8b] text-center text-[16px]'>1270 Jobs</p>
                  </div>
                </div>
              </div>

                {/* Accounting / Finance */}
              <div className="developer w-[22%] transition ease-in-out hover:-translate-y-2 hover:delay-300  duration-300  ">
                <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  py-6 px-5'>
                  <div className="logo  flex justify-center items-center w-14 h-14 m-4 rounded-full bg-[#edf0fb]">
                  <FontAwesomeIcon icon={faWandMagicSparkles}  style={{color: "#064ecb", }} />
                
                  </div>
                  <p className='text-[#3c4858] text-[18px] mb-2'>Accounting / Finance</p>
                  <div className="jobs">
                    <p className='text-[#2eca8b] text-center text-[16px]'>780 Jobs</p>
                  </div>
                </div>
              </div>
                {/* Government */}
              <div className="developer w-[22%] transition ease-in-out hover:-translate-y-2 hover:delay-300  duration-300  ">
                <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  py-6 px-5'>
                  <div className="logo  flex justify-center items-center w-14 h-14 m-4 rounded-full bg-[#edf0fb]">
                  <FontAwesomeIcon icon={faLandmark}  style={{color: "#064ecb", }} />
                
                  </div>
                  <p className='text-[#3c4858] text-[18px] mb-2'>governement</p>
                  <div className="jobs">
                    <p className='text-[#2eca8b] text-center text-[16px]'>1270 Jobs</p>
                  </div>
                </div>
              </div>

                {/* Construction and facilitation */}
              <div className="developer w-[22%] transition ease-in-out hover:-translate-y-2 hover:delay-300  duration-300  ">
                <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  p-6'>
                  <div className="logo  flex justify-center items-center w-14 h-14 m-4 rounded-full bg-[#edf0fb]">
                  <FontAwesomeIcon icon={faBuilding}  style={{color: "#064ecb", }} />
                
                  </div>
                  <p className='text-[#3c4858] text-[18px] mb-2'>Construction and Facilitation</p>
                  <div className="jobs">
                    <p className='text-[#2eca8b] text-center text-[16px]'>2000 Jobs</p>
                  </div>
                </div>
              </div>

                {/* Telecommunication */}
              <div className="developer w-[22%] transition ease-in-out hover:-translate-y-2 hover:delay-300  duration-300  ">
                <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  p-6'>
                  <div className="logo  flex justify-center items-center w-14 h-14 m-4 rounded-full bg-[#edf0fb]">
                  <FontAwesomeIcon icon={faLocationArrow}  style={{color: "#064ecb", }} />
                
                  </div>
                  <p className='text-[#3c4858] text-[18px] mb-2'>Telecommunication</p>
                  <div className="jobs">
                    <p className='text-[#2eca8b] text-center text-[16px]'>780 Jobs</p>
                  </div>
                </div>
              </div>
                {/* Human Resources */}
              <div className="developer w-[22%]  hover:-translate-y-2 hover:delay-300  duration-300  ">
                <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  p-6'>
                  <div className="logo  flex justify-center items-center w-14 h-14 m-4 rounded-full bg-[#edf0fb]">
                  <FontAwesomeIcon icon={faPerson}  style={{color: "#064ecb", }} />
                
                  </div>
                  <p className='text-[#3c4858] text-[18px] mb-2'>Human Resources</p>
                  <div className="jobs">
                    <p className='text-[#2eca8b] text-center text-[16px]'>500 Jobs</p>
                  </div>
                </div>
              </div>

                {/* Design and Multimedia */}
              <div className="developer w-[22%] transition ease-in-out hover:-translate-y-2 hover:delay-300  duration-300  ]">
                <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  p-6'>
                  <div className="logo  flex justify-center items-center w-14 h-14 m-4 rounded-full bg-[#edf0fb]">
                  <FontAwesomeIcon icon={faTvAlt}  style={{color: "#064ecb", }} />
                
                  </div>
                  <p className='text-[#3c4858] text-[18px] mb-2'>Design and Multimedia</p>
                  <div className="jobs">
                    <p className='text-[#2eca8b] text-center text-[16px]'>1100 Jobs</p>
                  </div>
                </div>
              </div>

              <div className="div flex items center justify-center mt-5 ">
                <button className='hover:bg-[#2f55d4] bg-white  border-[1px] border-[#2f55d4] text-[#2f55d4] hover:text-white flex gap-4 rounded-lg px-5 py-2 mr-2 '>
                <p className='text-[16px] '>Browse All Categories</p>
                            <div className=''>
                            <FontAwesomeIcon icon={faAngleRight} size={10} style={{  paddingTop:"4px", paddingRight:"4px",}}  />
                            </div>      

                        </button>
                </div>


        
        </div>

                {/* Browse for all categories */}
                
      </div>

  </section>
  )
}

export default Pcat