
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faUser, faEnvelope, faPhone,faDiamond, faComputer, faLandmark, faWandMagicSparkles, faBuilding, faLocationArrow, faTvAlt, faPerson, faAngleRight, faBuildingColumns, faCalendar, faParagraph, faFile, faFileAlt, faCalendarCheck, faUserAlt, faUserGroup, faHeart, faMessage, faBell, faBellConcierge, faBellSlash, faConciergeBell} from '@fortawesome/free-solid-svg-icons'

function Subscribe() {
  return (
    <section className='subscribe flex flex-col items-center  w-screen right-0 left-0 py-[100px] md:py-[100px] sm:py-[50px] text-[16px]  '>
        <div className='container'>
            <div className='row flex md:flex-row sm:flex-col lg:justify-around md:justify-around sm:justify-start items-center md:items-center sm:items-start px-0 md:px-0 sm:px-2'>
                <div className='left flex justify-start items-center  px-3 '>
                <div className="logo flex  justify-start items-center p-1">
                  <FontAwesomeIcon icon={faBell} size='xl' style={{color: "2f55d4", borderColor:"#8492a6"
                  }} />
                  <span className='text-[10px] bg-red-700 text-white mb-6 px-1.5 py-[1.5] rounded-md '>1</span>
                  
                  </div>
                    
                    <p className='lg:text-[20px] sm:text-[20px] font-semibold '>Your Job Notification</p>
                </div>

                {/* right form + button */}

                <div>
                    <div className='flex justify-start items-center'>
                        <form className='flex justify-start items-center'>
                            <div className='py-2 pl-3 pr-0 text-[12px] text-left mt-4'>
                                <input type='email' id='email' name='email' placeholder='Your Email:' className='border-2 rounded-tl-lg rounded-bl-lg border-gray-200  lg:py-3 sm:py-2 w-[620px] xl:w-[620px] lg:w-[500px] md:w-[250px] sm:w-[200px] pl-3 ' />
                            </div>
                            <div>
                                <button className='bg-[#2f55d4] hover:bg-blue-800  border-2 border-[#2f55d4] text-white  flex  rounded-lg px-5 lg:py-2 sm:py-1.5 mt-4  '>Subscribe

                                </button>
                            </div>

                        </form>
                    </div>
                </div>



            </div>



        </div>
    </section>
  )
}

export default Subscribe