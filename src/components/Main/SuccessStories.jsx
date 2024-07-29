import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faUser, faEnvelope, faPhone,faDiamond, faComputer, faLandmark, faWandMagicSparkles, faBuilding, faLocationArrow, faTvAlt, faPerson, faAngleRight, faBuildingColumns, faCalendar, faParagraph, faFile, faFileAlt, faCalendarCheck, faUserAlt, faUserGroup, faQuoteLeft, faQuoteLeftAlt} from '@fortawesome/free-solid-svg-icons'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react'





function SuccessStories() {


    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      };

      responsive: [{
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          infinite: true,
          
          
          
        }
      }]


  return (
    <section className='Success-stories flex flex-col items-center  w-screen right-0 left-0 py-[100px] md:py-[100px] sm:py-[50px] '>
        <div className='container'>
              <div className='heading flex flex-col items-center mb-2 relative'>
              <div className='pb-[48px] '>
                        <h4 className='text-[30px] md:text-[30px] sm:text-[26px] flex   relative '>Our Su<h4 className='text-[30px] md:text-[30px] sm:text-[26px] underline  md:underline-offset-[30px] sm:underline-offset-[29px] underline-w-[5px]  decoration-card-blue  decoration-blue-700'>ccess&nbsp;</h4>Stories</h4>
                        <div className="logo flex   justify-center relative">
                                <FontAwesomeIcon icon={faDiamond} style={{color: "#064ecb",position:"absolute", marginTop:'13px', marginRight: '0px'
                        }} />
                        </div>
                    </div>
                  <p className='text-[#8492A6] text-[16px] relative mx-[100px] md:mx-[100px] sm:mx-[6px] text-center'>
                  Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                  </p>



              </div>


              {/* <div className="categories font-nunito  flex flex-wrap items-center justify-center my-7 px-[100px]  py-[100px]"> */}
             
                
                    <div className="main mx-auto  lg:w-[80%] md:w-full sm:w-[110vh] sm:px-0 md:px-10 ">
                        <div className='mt-20'>
                        <Slider  {...settings}>
                            {data.map((d) =>(
                                <div className="div bg-[#f8f9fc] p-6 rounded-lg text-[#8492a6]  font-nunito ">
                                    <p className='description mb-12 text-left'> {d.review}</p>
                                    <div className='w-full h-full'>
                        <div className="bottom flex  justify-between  items-center ">
                            <div className="div flex justify-around items-center gap-3 ">
                                    <div className='imagediv'>
                                        <img className='product--image sm:w-24 lg:w-16 h-16 rounded-full border-2 border-slate-600'
                                        src={d.image} alt='img-1' />
                                    </div>
                                    <div className='flex flex-col justify-start items-start'>     
                                        <h2 className='lg:text-[20px] md:text-[18px] font-semibold text-black mb-2 pt-1'>{d.name}</h2>
                                        <p className='text-sm'>{d.remarks}y</p>
                                    </div>
                            </div>
                            <div className='lg:mr-10 sm:mr-0'>
                            <FontAwesomeIcon icon={faQuoteLeftAlt} size='4x'  style={{color: "#edf0fb", }} />
                            </div>
                        </div>
                        </div>  
                                </div>
                            ))}
                    
                        
                    {/* <div className='card  bg-[#f8f9fc] relative  rounded-xl flex flex-col justify-between items-start text-[16px] font-nunito mr-4 ml-2 p-4 mb-6 text-[#8492a6]'>
                        <p className='description mb-12 text-left'> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consecteturqui adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                        <div className='w-full h-full'>
                        <div className="bottom flex  justify-between  items-center ">
                            <div className="div flex justify-around items-center gap-3 ">
                                    <div className='imagediv'>
                                        <img className='product--image w-16 h-16 rounded-full border-2 border-slate-600'
                                        src='src/Images/img-1.png' alt='img-1' />
                                    </div>
                                    <div className='flex flex-col justify-start items-start'>     
                                        <h2 className='text-[20px] font-semibold text-black mb-2 pt-1'>Muhammad Ali</h2>
                                        <p>Web Designer at XYZ Company</p>
                                    </div>
                            </div>
                            <div className='mr-10'>
                            <FontAwesomeIcon icon={faQuoteLeftAlt} size='xl' style={{color: "#edf0fb", }} />
                            </div>
                        </div>
                        </div>
                        
                    </div>

                    <div className='card  bg-[#f8f9fc] relative  rounded-xl flex flex-col justify-between items-start text-[16px] font-nunito mr-4 ml-2 p-4 mb-6 text-[#8492a6]'>
                        <p className='description mb-12 text-left'> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consecteturqui adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                        <div className='w-full h-full'>
                        <div className="bottom flex  justify-between  items-center ">
                            <div className="div flex justify-around items-center gap-3 ">
                                    <div className='imagediv'>
                                        <img className='product--image w-16 h-16 rounded-full border-2 border-slate-600'
                                        src='src/Images/img-1.png' alt='img-1' />
                                    </div>
                                    <div className='flex flex-col justify-start items-start'>     
                                        <h2 className='text-[20px] font-semibold text-black mb-2 pt-1'>Muhammad Ali</h2>
                                        <p>Web Designer at XYZ Company</p>
                                    </div>
                            </div>
                            <div className='mr-10'>
                            <FontAwesomeIcon icon={faQuoteLeftAlt} size='xl' style={{color: "#edf0fb", }} />
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    
                    <div className='card  bg-[#f8f9fc] relative rounded-xl  flex flex-col justify-between items-start text-[16px] font-nunito mr-4 ml-2 p-4 mb-6 text-[#8492a6]'>
                        <p className='description mb-12 text-left'> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consecteturqui adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                        <div className='w-full h-full'>
                        <div className="bottom flex  justify-between  items-center ">
                            <div className="div flex justify-around items-center gap-3 ">
                                    <div className='imagediv'>
                                        <img className='product--image w-16 h-16 rounded-full border-2 border-slate-600'
                                        src='src/Images/img-1.png' alt='img-1' />
                                    </div>
                                    <div className='flex flex-col justify-start items-start'>     
                                        <h2 className='text-[20px] font-semibold text-black mb-2 pt-1'>Muhammad Ali</h2>
                                        <p>Web Designer at XYZ Company</p>
                                    </div>
                            </div>
                            <div className='mr-10'>
                            <FontAwesomeIcon icon={faQuoteLeftAlt} size='xl' style={{color: "#edf0fb", }} />
                            </div>
                        </div>
                        </div>
                        
                    </div> */}

                    </Slider>
                    </div>
                    
                
                    </div> 
                
                


                  {/* register an account  */}
                    {/* <div className="RegisterAccount    w-[30%]     mt-6 pt-2 px-3 ">
                    <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  p-6 '>

                      <div className="logo flex justify-center items-center relative  w-[90px] h-[90px] rounded-full px-[39px] pb-[16px] my-3 mx-2 bg-[#edf0fb]">
                            <div className="bg-[url('src/Images/searchjob.png')] relative flex justify-center items-center   px-[8.425px]  w-[50px] h-[50px] rounded-full "> </div> 
                      
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
                    </div> */}
                    
                  {/* search your job */}
                  {/* <div className="searchJob    w-[30%]     mt-6 pt-2 px-3 ">
                    <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  p-6 '>
                      <div className="logo flex justify-center items-center relative  w-[90px] h-[90px] rounded-full px-[39px] pb-[16px] my-3 mx-2 bg-[#edf0fb]">
                            <div className="bg-[url('src/Images/searchjob.png')] relative flex justify-center items-center   px-[8.425px]  w-[50px] h-[50px] rounded-full "> </div> 
                      
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
                    </div> */}

                      {/* Apply for Job */}
                      {/* <div className="applyjob    w-[30%]   mt-6 pt-2 px-3 ">
                        <div className='flex flex-col items-center   bg-[#fbf9fc]  rounded-lg  p-6 '>
                        <div className="logo flex justify-center items-center relative  w-[90px] h-[90px] rounded-full px-[39px] pb-[16px] my-3 mx-2 bg-[#edf0fb]">
                            <div className="bg-[url('src/Images/applyjob.png')] relative flex justify-center items-center   px-[8.425px]  w-[50px] h-[50px] rounded-full "> </div> 
                      
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
                    </div> */}
              {/* </div> */}

               
        </div>
                
                
      

  </section>
  )
}


// create an array

const data =[
    {
        review: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consecteturqui adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam',
        image: 'src/Images/img-1.png',
        name: 'Kevin Stewart',
        remarks: "Web Designer at XYZ Company",

    },

    {
        review: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consecteturqui adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam',
        image: 'src/Images/img-2.png',
        name: 'Charles Garret',
        remarks: "Marketing Manager at XYZ Company",
    },

    {
        review: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consecteturqui adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam',
        image: 'src/Images/img-3.png',
        name: 'Parry Martinez',
        remarks: "Web Designer at XYZ Company",
    },
]


export default SuccessStories