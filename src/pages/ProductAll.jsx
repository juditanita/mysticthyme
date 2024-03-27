import React from 'react'
import ProductCard from '../components/ShortComponets/ProductCard';
import products from "../ProductData.js"

function ProductAll() {
    const productElement= products.map(item=>{
        const { img, title, description, price,category,tags}=item;
        if(item.available){
            const singleTagEl=tags.map((singleTag,index)=>{return(
              
    
                <p className="mr-2 mb-2 p-1 italic" key={index}>#{singleTag}</p>
              
                 
                 
              
              
              )})

              return(  
                <div className='product-card w-2/3 md:w-4/5 rounded-md text-left col-span-1 flex flex-col overflow-hidden mx-auto mb-6'>
                
            <ProductCard 
                key={item.id} 
                img={img} 
                description={description} 
                title={title} 
                category={category}
              
             
                price={price}
                />
<div className="flex flex-wrap justify-end pe-3 mt-auto pt-3 text-xs font-light" >{singleTagEl}</div>
                

                </div>
                )
        }
        
        return(
           
                <section className="section container ">
                    <h2 className='text-2xl font-bold text-center pb-4 '>Latest Products</h2>
                    <div className='grid md:grid-cols-2 gap-3 md:gap-5 p-3 mx-auto item-center mt-6'> {productElement}</div>
                   
                </section>
            
              )
        
    })

}

export default ProductAll