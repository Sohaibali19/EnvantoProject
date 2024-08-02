import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faUser, faEnvelope, faPhone,faDiamond, faComputer, faLandmark, faWandMagicSparkles, faBuilding, faLocationArrow, faTvAlt, faPerson, faAngleRight, faBuildingColumns, faCalendar, faParagraph, faFile, faFileAlt, faCalendarCheck, faUserAlt, faUserGroup, faQuoteLeft, faQuoteLeftAlt} from '@fortawesome/free-solid-svg-icons'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";






function SuccessStories() {


    var settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      

      responsive: [
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false  
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false  
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false  
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false  
        }
      },
     
      
    ]
    };

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
             
                
                    
                        <div className='mt-20 '>
                        <Slider  {...settings}>
                          
                            {data.map((d) =>(
                              <div className='main md:mx-auto  lg:w-full md:w-full sm:w-[110vh]   md:px-0 lg:px-0   relative '>
                                <div className="div bg-[#f8f9fc] p-6 rounded-lg text-[#8492a6]  font-nunito ">
                                    <p className='description mb-12 text-left '> {d.review}</p>
                                    <div className='w-full h-full'>
                        <div className="bottom flex  justify-between  items-center ">
                            <div className="div flex justify-around items-center gap-3 ">
                                    <div className='imagediv'>
                                        <img className='product--image sm:w-24  lg:w-16 h-16 rounded-full border-2 border-slate-600'
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
                          </div>  ))}
                    
                        
                    
                    
                    </Slider>
                    
                    
                
                    </div> 
                
                


                  


               
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