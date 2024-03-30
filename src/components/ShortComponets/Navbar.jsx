import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar({link, nameLink, classNameLi, classNameLink}) {
    
    classNameLi=`${classNameLi}`
    classNameLink=`${classNameLink}`
     
        return (
          <li
           
            className={classNameLi}
          >
            <NavLink
              to={link}
              className={classNameLink}
            >
              {nameLink}
            </NavLink>
          </li>
        );
    
 
}

export default Navbar