import React from 'react'
import CategoryCard from './ShortComponets/CategoryCard';
import data from '../CardData.js';


function Category() {
    const cardElement= data.map((item)=>{

    const {id,description,img,title}=item;
    
    return(
        <div className='category-card w-2/3 gap-4 text-center col-span-1 flex flex-col overflow-hidden mx-auto  mb-6'>
        <CategoryCard key={id} 
        catImg={img} 
        catTitle={title} 
         catDescription={description}
        
        />
        </div>
    )})
  return (
    <section className='category-selector container grid  md:grid-cols-3 sm:grid-cols-2   p-4 mx-auto item-center  gap-7'>
       {cardElement}
      
     
    

    </section>
  )
}

export default Category