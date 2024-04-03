import React from "react";
import Paragraphs from "../components/ShortComponets/Paragraphs";
import { Link } from "react-router-dom";
import BtnWithArroy from "../components/ShortComponets/BtnWithArroy";
import Footer from "../components/Footer";
import LogoHolder from "../components/LogoHolder";



function About() {
  return (
    <>
    <section className="min-h-screen mb-9">
      <h2 className="text-4xl   md:text-5xl mt-10 font-bold w-7/8 mb-4 pb-7 capitalize mx-auto text-center">
        {" "}
        About us
      </h2>
     
      <div className="flex flex-wrap about-header "></div>
      <div className=" mx-auto mt-6 pb-6 text-stretch  max-w-96 sm:w-full w-screen bg-white">
        <Paragraphs className={`pt-2 sm:pt-6 px-8`}>
          We create the Mystic Thyme to boost your healing power. Our organic
          herbs, and natural crystals come from all over the world. Find your
          Mystic Herbs or join our wellness weekends, where you can learn more
          about herbs, crystals and rituals. If you would like to see the
          suppliers farms in which the herbs grows.Feel free to{" "}
          <Link to="/contact"> send us a message</Link>.
        </Paragraphs>
        <Paragraphs className={`px-8 py-6`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
          assumenda tenetur autem nobis alias libero, odio fugiat necessitatibus
          est at voluptatum impedit recusandae architecto, cum magni dolores!
          Non omnis et sunt natus debitis quis perspiciatis. Quidem, enim rerum
          placeat aliquam magnam, culpa ratione excepturi veritatis, praesentium
          tempore iusto eum sapiente. Tenetur neque fuga earum facilis accusamus
          deserunt repudiandae consectetur corrupti.
        </Paragraphs>

         <div className=" flex justify-center">
          {" "}
          <BtnWithArroy className={`md:hidden`}>Shop Now</BtnWithArroy>
        </div> 
        
        
      </div>
      <div className='py-10'>
   
    </div>
    </section>
    <LogoHolder  ></LogoHolder>
   
    </>
  );
}

export default About;
