import React from "react";
import { useState } from "react";


export const Drawer = () => {
  const [btnState, setBtnState] = useState(true);
  const handleChange = () => {
    setBtnState((btnState) => !btnState);
  };

  return (
    <>
   
      <div className={btnState ? " button" : ""} onClick={handleChange}>
      
        <img src="images\icon-menu.svg" alt="heelo" />
       
         
      </div>
    
    </>
  );
};
