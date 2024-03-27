import React from 'react'

import BtnWithArroy from './ShortComponets/BtnWithArroy'
import { Link } from 'react-router-dom'
import Paragraphs from './ShortComponets/Paragraphs'


function AboutShort() {
  return (
    <section id="about" className='container about text-center'>
       
        
           
         
        <div className="right-side  hero-content mx-auto my-4 px-3 text-center  max-w-96 sm:w-full w-screen">
           
            <h2 className='text-4xl   md:text-5xl  font-bold w-7/8 mb-4 pb-7 capitalize mx-auto'> About us</h2>
            <Paragraphs className={`mb-1 text-pink-600 font-bold  pt-12 sm:pt-24`}>Thank you for visiting Mystic Thyme</Paragraphs>
          <Paragraphs className={`pt-2 sm:pt-6 px-8`}>
          We create the Mystic Thyme  to boost your healing power. Our organic herbs, and natural crystals come from all over the world.
                Find your Mystic Herbs or join our wellness weekends, where you can learn more 
                about herbs, crystals and rituals.
                 If you would like to see the suppliers farms in which the herbs grows.Feel free to <Link to="/contact"> send us a message</Link>.
          </Paragraphs>
         
        <div className=' flex justify-center'> <BtnWithArroy className={`md:hidden`  }>Learn More</BtnWithArroy></div>
     
     
        </div>
       
    </section>
  )
}

export default AboutShort