import React, { useState } from 'react'
// import {FaAngleDown } from "react-icons/fa";

export const DropDown1 = () => {
  const[isActive,setIsActive] = useState(false);
    const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  }
  return (
    <>
    <div className='dropdown1'>
      <div className={isActive ? 'dropdown-btn1'  : ''} onClick={handleClick}> Company 
      <img src="\images\icon-arrow-down.svg" alt="" />
      
        </div> 
        {isActive &&( 
           <div className='dropdown-content1'> 
           <div className='dropdown-item1'> 
          History
   
           </div>
           <div className='dropdown-item1'> 
         Our Team
   
           </div>
           <div className='dropdown-item1'> 
         Blog
   
           </div>
         
   
           </div>
   

        )}
       
    </div>
    </>
  )
}

