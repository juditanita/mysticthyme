import React from 'react'
import { FiFacebook,FiInstagram } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";

function SocialMedia({className}) {
  className=`social-links bg-white text-pink-400   font-normal   items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 ${className}`
 
  return (
    <ul className="social-icons flex sm:align-center  ">
<li>
    <a href="www.facebook.com" > <FiFacebook className={className} /></a>
</li>
<li>
    <a href="www.facebook.com"> 
    <FiInstagram className={className}/></a>
</li>
<li>
    <a href="www.facebook.com">  <FaPinterest className={className}/></a>
</li>
   

   
</ul>
  )
}

export default SocialMedia