import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faUser, faEnvelope, faPhone,faDiamond, faComputer, faLandmark, faWandMagicSparkles, faBuilding, faLocationArrow, faTvAlt, faPerson, faAngleRight, } from '@fortawesome/free-solid-svg-icons'

function Oclient() {
  return (
    <section className='popular-cat flex flex-col  ml-[-155px] w-screen right-0 left-0 py-[100px] '>
        <div className='container'>
            <div className='heading flex flex-col items-center mb-2 relative'>
                <h4 className='text-[30px] pb-[48px]  relative underline underline-offset-[30px] decoration-2 decoration-blue-700 '>Our Client's</h4>
                <div className="logo flex relative">
                <FontAwesomeIcon icon={faDiamond} style={{color: "#064ecb",position:"absolute", marginTop:'-59px'
                }} />
                
                </div>
                <p className='text-gray-700 text-[16px] relative text-wrap mx-12 mb-1'>
                Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                </p>
            </div>
            
            <div className="categories font-nunito  flex flex-wrap items-start justify-around my-7 text-[16px] mx-auto gap-5 p-20">
             
            <div className="chocolate">
                <img  className="mt-6 pt-2 px-3 w-[142px]" src='src/Images/coffee.png' alt='coffee' />
            </div>

            <div className="chocolate">
                <img  className="mt-6 pt-2 px-3 w-[142px]" src='src/Images/fisherman.png' alt='coffee' />
            </div>
            <div className="chocolate">
                <img  className="mt-6 pt-2 px-3 w-[142px]" src='src/Images/mount.png' alt='coffee' />
            </div>

            <div className="chocolate">
                <img  className="mt-6 pt-2 px-3 w-[142px]" src='src/Images/mountain.png' alt='coffee' />
            </div>

            <div className="chocolate">
                <img  className="mt-6 pt-2 px-3 w-[142px]" src='src/Images/coffee.png' alt='coffee' />
            </div>

            <div className="chocolate">
                <img  className="mt-6 pt-2 px-3 w-[142px]" src='src/Images/fisherman.png' alt='coffee' />
            </div>


        
            </div>

                
                
      </div>

  </section>
  )
}

export default Oclient