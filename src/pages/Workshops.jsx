import React from 'react'
import Button from '../components/Button';
import ClearBtn from '../components/ShortComponets/ClearBtn';
import { Link } from 'react-router-dom';

function Workshops() {
  const [workshops, setWorkshops] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/workshops")
      //return a promise that we want to unpack it

      .then((res) => res.json())

      //return a promise that we want to unpack it

      .then((data) => setWorkshops(data.workshops));
  }, []);

  const workshopEl=workshops.filter(item=>item.placesAvailable).map(item=>{
    return(
      <div className=' '>
        <Link to="/contact">
       <div class="w-11/12 md:w-2/3 px-auto my-10 text-center mx-4 md:mx-auto rounded overflow-hidden shadow-lg grid  grid-cols-1  md:grid-cols-3">
       
      
  <img class="w-full md:h-full  md:px-0 sm:px-8  px-2 col-span-1" src={item.img} alt=""/>
  <div class="px-6 py-4   col-span-1 md:col-span-2">
    <div class="font-bold text-xl mb-2">{item.title}</div>
    <p class="text-gray-700 text-base">
  {item.description}
    </p>
    <span class=" w-2/3 md:col-span-2  col-span-1 px-3 py-1 text-sm font-bold text-gray-700 mr-2 my-2 ">cost: <span className="text-red-800 ">{item.price}/person</span></span> 

  </div>
  <div className='bg-red-200 order-first mx-2 sm:mx-8 md:order-none md:mx-0 col-span-1 md:w-full flex flex-col '>
  <span class="inline-block    text-md py-4 font-semibold text-red-800  "> {item.placesAvailable} places available</span>
 
        
        
        </div>
        <div className='col-span-1  md:col-span-2'>
          <ClearBtn classN={`bg-white mb-4 `}>Book Now</ClearBtn></div>
        
        
        
</div>
           
       
       </Link>
       </div>
    )
  })
  return(
    <section className="container">
      {workshopEl}
    </section>
  )
}

export default Workshops