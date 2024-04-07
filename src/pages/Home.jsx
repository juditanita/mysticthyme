import React from 'react'

import Hero from '../components/Hero'

import AboutShort from '../components/AboutShort'
import Banner from '../components/Banner'
import Category from '../components/Category'
import { Link } from "react-router-dom";
import Product from '../components/Product'

import MoodBoard from '../components/MoodBoard'
import LogoHolder from '../components/LogoHolder'
import ContactForm from '../components/pagecomponents/ContactForm'

import SectionSign from "../components/SectionSign"
import Separator from "../components/Separator"
import Button from '../components/Button'
import BtnWithArroy from '../components/ShortComponets/BtnWithArroy'





function Home() {
  
  return (
    <>
    <main className="main container z-1">
    <Hero/>  
  
    <div className=' w-full mt-6 pt-9 bg-white '>
    <Separator/> 
   
       <SectionSign/>
      
    </div>
   
    <AboutShort/>
    <div className='py-10'>
    <LogoHolder  className={`hidden`} >Chategories</LogoHolder>
    </div>
    <div className=' text-center'>
    <Category/>
      <Link to="products">
      <div className=' flex justify-center'> <BtnWithArroy className={`md:hidden`  }>Go Shopping</BtnWithArroy></div> 
        </Link>
    </div>

  
   
    
   
    
 <div className=' my-14 sm:my-20'><Product/></div>
  <div id="shammanic" className='p-8'>
   <Link to="workshops">
 <Banner classNameH1={`px-6`} childrenH1="Shammanic Workshop"
    childrenBtn="Get info"
    classNameBtn={`bg-white`}
    childrenPar="Join our most unforgettable events and retreats and learn the ancient perspective to harmoniously connect with the world and self."/>   
    </Link>
    
  
  
   </div>
 
  <ContactForm/>
 
 <div className="w-3/4 mx-auto my-8 ">  <MoodBoard /></div>
 
    
   </main>
  
   </>
  )
}

export default Home