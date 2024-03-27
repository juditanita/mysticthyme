import React from 'react'
import { Link } from 'react-router-dom';

function Navbar({link, nameLink, classNameLi, classNameLink}) {
    
    classNameLi=`${classNameLi}`
    classNameLink=`${classNameLink}`
     
        return (
          <li
           
            className={classNameLi}
          >
            <Link
              to={link}
              className={classNameLink}
            >
              {nameLink}
            </Link>
          </li>
        );
    
 
}

export default Navbar