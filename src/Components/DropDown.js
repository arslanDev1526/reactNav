import React, { useState } from 'react'


export const DropDown = () => {
  const[isActive,setIsActive] = useState(false);
    const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  }
  return (
    <>
    <div className='dropdown'>
      <div className={isActive ? 'dropdown-btn'  : ''} onClick={handleClick}> Feature 
      <img src="\images\icon-arrow-down.svg" alt="" />
      </div> 
     
        
        {isActive &&( 
           <div className='dropdown-content'> 
           <div className='dropdown-item'> 
           <img src="\images\icon-todo.svg" alt="" />
          
           Todo list
   
           </div>
           <div className='dropdown-item'> 
           <img src="\images\icon-calendar.svg" alt="" />
          Calender
   
           </div>
           <div className='dropdown-item'> 
           <img src="\images\icon-reminders.svg" alt="" />
          Reminder
   
           </div>
           <div className='dropdown-item'> 
           <img src="\images\icon-planning.svg" alt="" />
           Planning
   
           </div>
   
           </div>
   

        )}
       
    </div>
    </>
  )
}
