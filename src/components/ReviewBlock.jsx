import React from 'react'
import ReviewCard from './ShortComponets/ReviewCard'

function ReviewBlock() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
      fetch("/api/products")
        //return a promise that we want to unpack it
  
        .then((res) => res.json())
  
        //return a promise that we want to unpack it
  
        .then((data) =>setProducts(data.products));
    }, []);


 console.log(products.get(reviews) )


 const productRevAll=products.filter((item,index)=>{item.reviews>0
  
   
 }
     ).
  

    
  return (
   <section className="container">
      <h3 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Read trusted reviews from our customers
    </h3>
    
    <div className="carousel w-full">
            
            <div id="item1" className="carousel-item w-full">
               {productRevAll}
              
                </div>
                </div>
   </section>
  )
}

export default ReviewBlock