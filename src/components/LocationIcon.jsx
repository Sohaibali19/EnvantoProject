import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationArrow, faTableList, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'


function LocationIcon() {
  return (
    <div className="icon relative xl:mt-2 lg:mt-1 xl:ml-3 lg:ml-1 mx-3 ">
      <FontAwesomeIcon icon={faLocationArrow}  style={{color: "#6c717a",size:'20'}} />
    </div>
  )
}

export default LocationIcon