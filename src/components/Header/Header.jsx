import React from 'react'
import TopHeader from './TopHeader'
import Middle from './Middle'
import Navbar from './Navbar'
import Home from '../Home/Home'
import RegForm from '../RegForm'
import Pcat from '../Main/Pcat'
import FJobs from '../Main/FJobs'
import HItworks from '../Main/HItworks'
import SuccessStories from '../Main/SuccessStories'
import Oclient from '../Main/Oclient'
import CareerAdvice from '../Main/CareerAdvice'
import Subscribe from '../Main/Subscribe'


function Header() {
  return (
    <div className='bg-none'>
        <div className='bg-[#282c32b3] w-screen  right-0 top-0 h-screen mt-[-40px] ml-[-155px] font-nunito z-0'>
          <div className="bg-[url('src/Images/bg-home.jpg')] bg-cover bg-center w-screen  h-full  bg-[#282c32b3] z-0 top-0 left-0  mb-4 ">
              <div className='bg-[#282c32b3] w-screen  h-screen z-0'>
                  <TopHeader />
                  <Middle />
                  <Navbar />
                  <Home />
                  <RegForm />
                </div>
            </div>  
      </div>
      <Pcat />
      <FJobs />
      <HItworks />
      <SuccessStories />
      <Oclient />
      <CareerAdvice />
      <Subscribe />
    </div> 
)
}

export default Header