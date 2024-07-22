import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, faCaretDown, faCaretUp, faSearch } from '@fortawesome/free-solid-svg-icons'
import LocationIcon from './LocationIcon';

function  Selected() {

   const [countries, setCountries] = useState(null); 
   const [open, setOpen] = useState(false);
   const [selected, setSelected] = useState("");
   

    useEffect( () => {
        fetch("https://restcountries.com/v2/all?fields=name")
        .then((res) => res.json())
        .then((data) => {
            setCountries(data);
        });

    }, []);
  return (
    <div className='flex justify-between items-center lg:py-1'>
        <LocationIcon />
    <div className='w-[90%]  right-0  ml-6 xl:mt-1 lg:mt-0 font-medium absolute text-[14px] top-0  cursor-pointer'>
    <div  
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded-lg text-gray-400  ${!selected && 'text-gray-400'
        }`}>
            {selected 
            ? selected?.length > 25 
                ? selected?.substring(0,25) + '...' 
                : selected  
            : 'Location'}
        <FontAwesomeIcon icon={faCaretDown}  style={{size: "14",color: "#6c717a"}}  className={`${open && 'rotate-180'}`}/>
        </div>
 
        <ul className={`w-[110%] right-0   absolute  bg-white mt-2  overflow-y-auto  ${open ? "max-h-60" : "max-h-0" 
        } `}
        >
            
            
            {
            countries?.map((country)  => (

            <li 
            key={country?.name}
            className={`p-2 text-sm hover:bg-gray-100 text-left hover: text-gray-800
                ${
                    country?.name === selected && ' bg-gray-200'
                } `}
                
                // ${
                // country?.name?.toLowerCase().startsWith(inputvalue)
                // ?'block'
                // : 'hidden'
                //  }
                
            
            onClick={() => {
                if(country?.name  !== selected){
                    setSelected(country?.name);
                    setOpen(false);
                }
            }}
             >
                {country?.name}
            </li>
            ))}
            
        
        </ul>
    </div>
    </div>
  )
}

export default Selected