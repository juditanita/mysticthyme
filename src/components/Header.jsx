import React from "react";

import { Link } from "react-router-dom";
import Button from "./Button";

import { IoSearchSharp } from "react-icons/io5";

import "../Layout/Layout.css";
import SocialMedia from "./SocialMedia";

import LogoHolder from "./LogoHolder";

function Header() {
  const links = [
    {
      nameLink: "Home",
      link: "/",
    },
    {
      nameLink: "Shop",
      link: "/shop",
    },
    {
      nameLink: "About",
      link: "/about",
    },
    {
      nameLink: "Workshops",
      link: "/workshops",
    },
    {
      nameLink: "Contact",
      link: "/contact",
    },
  ];
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen((prev) => !prev);
  }

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 767) {
        setOpen(false);
        
      }
    });
  }, []);


  const [showInTop, setShowInTop] = React.useState(true);




  React.useEffect(() => {
   window.addEventListener("resize", () => {
     const windWidth = window.innerWidth;
   
     if (windWidth <= 640) {
       setShowInTop(false);
       
     }
    });
 }, []);

 function closeMenu(){
  setOpen(false)
  return
 }

  return (
    <header className="shadow-md w-full  relative top-3 left-0">
          <div className="bg-red-100 flex   place-items-center justify-between w-screen  text-sm md:text-base announcement md:flex-row">
       {showInTop&& <SocialMedia  />}
       <p>20% of Discount of your first order</p>
       {showInTop&& <IoSearchSharp />}
    
   
  
    </div>
     
      <LogoHolder />
      <div className="md:flex item-center  justify-evenly bg-white py-4 px-7 md:px-10 mt-4 ">
        {/*==== menu button=== */}
        <div
          className="ml-6 mt-3 cursor-pointer font-bold hover:text-pink-800 text-3xl md:hidden"
          onClick={handleClick}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        
        </div>
        
        <ul
          id="menu"
          className={`md:flex md:items-center shadow-xl md:shadow-none md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "block menu-list" : "hidden"
          }`}
        >
            

          {links.map(({ nameLink, link }) => {
            return (
              <li
                key={nameLink}
                className="m-6 md:m-0 md:ml-8 text-l md:text-xl"
              >
                <Link
                  to={link}
                  className=" hover:text-pink-500 duration-500 hover:font-bold "
                  onClick={closeMenu}
                >
                  {nameLink}
                </Link>
              </li>
            );
          })}
          <Button
            className={`mb-3 ml-2 hover:text-pink-800  bg-black text-white hover:bg-pink-200 md:ml-8  md:mt-0 font-bold md:mb-0 hidden sm:block`}
          >
            Subscribe
          </Button>

        
          <div className=" pb-3  border-t-2  border-red-200 bg-red-100 border-opacity-25 absolute  z-[-1] sm:hidden px-5 flex place-items-center justify-between w-screen text-sm">
       
    
       <SocialMedia className={`text-base`}   />
       <Button
            className={`mb-3  hover:text-pink-800   md:mt-0 uppercase tracking-wide pb-0  font-bold md:mb-0 `}
          >
            Subscribe
          </Button>
      
      <IoSearchSharp className="text-xl" />
    
   
  
    
            
              </div>
         
        
        </ul>
       
       
       
       
      </div>
      
    </header>
  );
}

export default Header;