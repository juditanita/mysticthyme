import React from 'react'
import ProductCard from '../components/ShortComponets/ProductCard';
import { Link } from 'react-router-dom';




function ProductAll() {
    const [products, setProducts] = React.useState([]) 
    React.useEffect(() => { 

 

        fetch("/api/products") 

 

//return a promise that we want to unpack it 

            .then(res => res.json()) 

//return a promise that we want to unpack it 

            .then(data => setProducts(data.products)) 

    }, []) 

    
    
    const productElement= products.map(item=>{
        const { id, img, title, description, price,category,tags}=item;
       
        if(item.available){
            const singleTagEl=tags.map((singleTag,index)=>{return(
              
    
                <p className="mr-2 mb-2 p-1 italic" key={index}>#{singleTag}</p>
              
                 
                 
              
              
              )})

              return(  
                <div className='product-card w-2/3 sm:w-1/2 md:w-4/6 rounded-md text-left col-span-1 flex flex-col overflow-hidden mx-auto mb-6'>
               <Link to={`/products/${item.id}`}>
            <ProductCard 
                key={id} 
                img={img} 
                description={description} 
                title={title} 
                category={category}
              
             
                price={price}
                />
<div className="flex flex-wrap justify-end pe-3 mt-auto pt-3 text-xs font-light" >{singleTagEl}</div>
                
</Link> 
                </div>
                )
        }})
        
        return(
           
                <section className="section container ">
                    <h2 className='text-2xl font-bold text-center pb-4 '>Products</h2>
                    <div></div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 p-3 mx-auto item-center mt-6'>
                        {productElement}
                        
                         </div>
                   
                </section>
            
              )
        
    }



export default ProductAll