import React, { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

function TopHeader() {
        const [data, setData] = useState([])
        useEffect(() => {
            fetch('/https://themeforest.net/checkout/103105084/create_account')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
        }, [])    

  return (
    <div className="flex  justify-between items-center sticky bg-cover w-full   top-0 left-0  overflow-x-hidden  bg-[#262626]  text-[#545454] md:py-4 sm:py-3 md:px-6 sm:px-2 ">
    <Link to="/" className="flex items-center">
        <img
            src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"
            className="mr-3 md:h-[18px]  sm:h-[14px] brightness-100"
            alt="Logo"
        />
    </Link>
    <div className="flex  items-center ">
        {/* <Link
            to="#"
            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
            Buy Now
        </Link> */}
        <NavLink
            to="/https://themeforest.net/checkout/103105084/create_account"
            
            className="text-white  bg-[#82B440] hover:bg-[#8abd47] font-roboto focus:ring-4 focus:ring-orange-300 font-medium rounded-md text-[14px] text-sm px-[20px]  py-[6px]  mt-2  sm:mt-0 focus:outline-none"
        >
            Buy Now {data}
        </NavLink>
    </div>
</div>
  )
}

export default TopHeader