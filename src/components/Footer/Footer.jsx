import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, faCaretDown, faAngleRight, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer className="bg-[#202942]  w-full left-0 right-0  text-[#ADB5BD]   font-nunito">
            <div className="mx-auto w-full  p-4 py-6 lg:py-8">
                <div className="lg:flex sm:flex-col lg:flex-row justify-around mt-5  md:justify-around">
                    <div className=" flex basis-1/4 items-right   flex-col text-[16px] mb-6 px-3 pb-2 mx-0 mt-0   md:mb-0">
                        <Link to="/" className="flex ">
                            <img
                                src="https://themesdesign.in/jobya/images/logo-light.png"
                                className=" ml-[72px] h-[20px]"
                                alt="Logo"
                            />
                        </Link>
                        <p className='text-[16px]  mt-6 mb-4 ml-[72px] text-left text-wrap'>At vero eas et accusamus etiusto odio disnissim os ducimus qui blanditiis praesentium</p>
                        <div className="flex mt-4 lg:ml-16 sm:ml-16  space-x-2   sm:mt-0">
                        <Link to="#" className=" mr-[5px] mb-[5px] border border-r-1 border-[#ADB5BD] rounded-full p-2 hover:bg-blue-500 hover:text-white  ">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                      
                        <Link to="#" className="mr-[5px] mb-[5px] border border-r-1 border-[#ADB5BD] rounded-full p-2 hover:bg-blue-500 hover:text-white">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="mr-[5px] mb-[5px] border border-r-1 border-[#ADB5BD] rounded-full p-2 hover:bg-blue-500 hover:text-white">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="mr-[5px] mb-[5px] border border-r-1 border-[#ADB5BD] rounded-full p-2 hover:bg-blue-500 hover:text-white">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">google account</span>
                        </Link>
                    </div>
                    </div>
                    <div className="md:flex md:justify-around md:gap-0   basis-[75%] sm:gap-0 sm:flex">
                        <div>
                            <h2 className="mb-6  font-semibold text-[18px] text-white ">Company</h2>
                            <ul className="text-[#adb5bd] flex flex-col items-start text-[16px]  ml-0 mb-3">
                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center'>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      About Us
                                    </div>
                                    
                                    </Link>
                                </li>
                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex   gap-3 items-center'>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      Media & Press
                                    </div>
                                    
                                    </Link>
                                </li>

                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center'>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      Career
                                    </div>
                                    
                                    </Link>
                                </li>

                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center'>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      Blog
                                    </div>
                                    
                                    </Link>
                                </li>

                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center'>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      pricing
                                    </div>
                                    
                                    </Link>
                                </li>

                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center'>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      Marketing
                                    </div>
                                    
                                    </Link>
                                </li>

                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center'>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      CEOs
                                    </div>
                                    
                                    </Link>
                                </li>

                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center'>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      Agencies
                                    </div>
                                    
                                    </Link>
                                </li>

                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center'>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      Our Apps
                                    </div>
                                    
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                        <h2 className="mb-6  font-semibold text-[18px] text-white ">Resources</h2>
                        <ul className="text-[#adb5bd] flex flex-col items-start text-[16px]   mb-3">
                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center '>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      Support
                                    </div>
                                    
                                    </Link>
                                </li>
                                
                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center '>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      Privacy Policy
                                    </div>
                                    
                                    </Link>
                                </li>

                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center '>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      Terms
                                    </div>
                                    
                                    </Link>
                                </li>

                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center '>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      Accounting
                                    </div>
                                    
                                    </Link>
                                </li>

                                <li className="mb-3">
                                  
                                  <Link to="/" className="hover:text-white">
                                  <div className='flex gap-3 items-center '>
                                  <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                    Billings
                                  </div>
                                  
                                  </Link>
                                </li>

                                <li className="mb-3">
                                  
                                    <Link to="/" className="hover:text-white">
                                    <div className='flex gap-3 items-center '>
                                    <FontAwesomeIcon icon={faAngleRight} size="sm" style={{color: "#adb5bd",}} />
                                      F.A.Q.
                                    </div>
                                    
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className='flex flex-col items-start'>
                        <h2 className="mb-6  font-semibold text-[18px] text-white ">Business Hours</h2>
                        <ul className="text-[#adb5bd] flex flex-col items-start text-[16px]  mb-3">
                                <li className="mb-3">
                                    <Link to="#" className="hover:text-white">
                                        Monday - Friday : 09:00 to 17:00
                                    </Link>
                                </li>

                                <li className="hover:text-white mb-3">
                                    Saturday: 10:00 to 15:00
                                </li>

                                <li
                                className="hover:text-white mb-3">
                                    Sunday: Day Off(Holiday)
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="flex justify-center">
                    <p className="text-sm text-[#adb5bd] content-center text-[16px] ">
                        © 2019-2020 
                       
                        Jobya.Design with&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faHeart} style={{color: "red",}} />
                        &nbsp;&nbsp;by Themesdesigns.
                    </p>
                    
                </div>
            </div>
        </footer>
    );
}