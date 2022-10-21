import React from "react";

import { DropDown } from "./DropDown";
import { DropDown1 } from "./DropDown1";
import { Drawer } from './Drawer';
import { useState } from "react";


const Header = () => {

  const [btnState, setBtnState] = useState(true);
  const handleChange = () => {
    setBtnState((btnState) => !btnState);
  };

  return (
    <>
      <div className={btnState ? " navbar" : ""} onClick={handleChange}>
        <img className="hamburger" src="images\icon-menu.svg" alt="heelo" />
      </div>

      
        <nav className="navbar">
          <ul>
            <li className="bold">snap</li>
            <li className="dropDown">
              <DropDown />
            </li>
            <li>  <DropDown1 /></li>
            <li> Careers </li>
            <li>About</li>
          </ul>
          <ul>
            <li>Login</li>
            <li className="reg">Register</li>
          </ul>
        </nav>
      
    </>
  );
};

export default Header;
