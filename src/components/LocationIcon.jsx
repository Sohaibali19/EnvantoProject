import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'


function LocationIcon() {
  return (
    <div className="icon relative mt-[12px] ml-3 mx-3 ">
      <FontAwesomeIcon icon={faLocationArrow}  style={{color: "#6c717a",size:'20'}} />
    </div>
  )
}

export default LocationIcon