import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, } from '@fortawesome/free-solid-svg-icons'

const Location = () => {
  const [selected, setSelected] = useState("");
return (
    <>
    <div className="w-full flex bg-none border-none">
    <div className="icon mt-3 mb-2 ml-3  ">
      <FontAwesomeIcon icon={faLocationArrow}  style={{color: "#6c717a",}} />
    </div>
  <ReactFlagsSelect 
    selected={selected}
    onSelect={(code) => setSelected(code)}
    placeholder ="Location"
    className=" w-full relative  text-[#ffffff33]"
    
    
  />
  </div>

  </>
);
}

export default Location;