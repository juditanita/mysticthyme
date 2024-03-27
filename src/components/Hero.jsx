import React from 'react'

import BtnWithArroy from './ShortComponets/BtnWithArroy';
import Paragraphs from './ShortComponets/Paragraphs';
import HeroImg from "../assets/website-imgs/aboutImg2.png"
import SectionSign from "./SectionSign"
import Separator from "./Separator"


function Hero() {
  return (
    <>
    <div className='grid mt-4 mb-10 grid-cols-1 md:grid-cols-2 hero-container mx-auto justify-items-center'>
        <div className="img-container lg:w-3/4 lg:text-center  ">
        <img src={HeroImg} alt="" className='img-hero w-6/7 lg:pb-8 pt-4 my-auto mx-auto h-5/6'/>
        
        </div>
        <div className='hero-content-right'>

        <div className="hero-content bg-white p-9 mx-auto my-4 text-center md:text-left max-w-96 w-5/6">
       <div className='mt-5 pt-5' >
        <span className='text-xl sm:text-xl lg:text-2xl font-light'>The healing power</span>

        <h1 className='text-4xl md:text-5xl sm:px-3 md:w-6/7 xl:text-7xl lg:w-11/12 font-bold w-7/8 mb-4  '>Welcome to Mystic Thyme Webshop</h1>
        </div>
        <Paragraphs className={`w-4/5 mx-auto px-auto md:mx-0`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium? Adipisci incidunt, tempora iure sunt quos, esse voluptates quibusdam sequi praesentium cupiditate saepe magni fugit velit! Cumque explicabo iusto laudantium.</Paragraphs>
        
        
       
       <BtnWithArroy>Explore More</BtnWithArroy>
        </div>
       
      
       </div>
    

    </div>
    <div className=' w-full mt-6 pt-9 bg-white'>
    <Separator/> 
       <SectionSign/>
      
    </div>
    </>
  )
}

export default Hero