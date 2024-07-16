import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, faCaretDown, faCaretUp, faSearch } from '@fortawesome/free-solid-svg-icons'
import LocationIcon from './LocationIcon';

function  Selected() {

   const [countries, setCountries] = useState(null); 
   const [open, setOpen] = useState(false);
   const [selected, setSelected] = useState("");
   const [inputvalue, setInputValue] = useState("");

    useEffect( () => {
        fetch("https://restcountries.com/v2/all?fields=name")
        .then((res) => res.json())
        .then((data) => {
            setCountries(data);
        });

    }, []);
  return (
    <div className='flex justify-between items-center'>
        <LocationIcon />
    <div className='w-[90%]  right-0  ml-6 mt-1 font-medium absolute text-[14px] top-0  cursor-pointer'>
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
            <div className='flex justify-start sticky top-0 bg-white'>
            <FontAwesomeIcon icon={faSearch} style={{size: '14', color:'#6c717a'}} className={`p-2 pt-3 bg-white bg-cover `}/>
                <input 
                type='text'
                value={inputvalue}
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}

                placeholder='Enter country name' className='placeholder:text-gray-400 
                 p-2 outline-none' />
            </div>
            
            {
            countries?.map((country)  => (

            <li 
            key={country?.name}
            className={`p-2 text-sm hover:bg-gray-100 text-left hover: text-gray-800
                ${
                    country?.name?.toLowerCase() === selected?.toLocaleLowerCase() && ' bg-gray-200'
                }
                
                ${
                country?.name?.toLowerCase().startsWith(inputvalue)
                ?'block'
                : 'hidden'
                 }`}
            
            onClick={() => {
                if(country?.name?.toLowerCase()  !== selected){
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