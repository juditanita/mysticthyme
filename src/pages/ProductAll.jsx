import React from "react";
import ProductCard from "../components/ShortComponets/ProductCard";
import { Link,useSearchParams } from "react-router-dom";
 



function ProductAll() {
  const [products, setProducts] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams() 
  const categoryFilter = searchParams.get("category") 

  const displayedProducts = categoryFilter 

        ? products.filter(product => product.category === categoryFilter) 

        : products 

 

  console.log(categoryFilter)
  React.useEffect(() => {
    fetch("/api/products")
      //return a promise that we want to unpack it

      .then((res) => res.json())

      //return a promise that we want to unpack it

      .then((data) => setProducts(data.products));
  }, []);

  const productElement = displayedProducts.map((item) => {
    const { id, img, title, description, price, category, tags } = item;
   
   

    if (item.available) {
      const singleTagEl = tags.map((singleTag, index) => {
        return (
          <p className="mr-2 mb-2 p-1 italic" key={index}>
            #{singleTag}
          </p>
        );
      });

      return (
        <div className="product-card w-2/3 sm:w-1/2 md:w-4/6 rounded-md text-left col-span-1 flex flex-col overflow-hidden mx-auto mb-6 pb-4">
  
            
            
            
            <ProductCard
              key={id}
              img={img}
              description={description.split(" ",10).join(" ")}
              title={title}
              category={category}
              price={price}
              imgClass={`w-full product-img -z-1`}
              categoryClass={category==="Herbs"?"bg-green-500":category==="Mushroom"?"bg-yellow-600":"bg-indigo-400 "}
              children ={"Read More..."}
              childrenClass={`float-right text-red-700`}
              goToDetails={`/products/${item.id}`}
              goTo={"/products/cart"}
            />
            
            <div className="flex flex-wrap justify-end pe-3  pt-3 mt-4 text-xs font-light">
              {singleTagEl}
            </div>
        
        </div>
      );
    }
  });

  return (
    <section className="section container ">
     
      <h1 className=" text-xl sm:text-2xl mt-10 font-bold text-center pb-4">Explore our Products </h1> 

<div className="flex flex-col w-1/4 ml-4  sm:w-auto sm:mx-auto sm:flex-row text-center flex-wrap justify-center gap-4 mb-20 mt-10"> 

    
  <button  

onClick={() => setSearchParams({category: "Herbs"})} 

className="bg-green-500 text-white px-4 py-2 rounded-md" 

>Herbs</button> 

    <Link  

        to="?category=Mushroom" 

        className="bg-yellow-600 text-white px-4 py-2 rounded-md" 

    >Mushroom</Link> 

    <Link  

        to="?category=Rituals" 

        className="bg-indigo-400 text-white px-4 py-2 rounded-md" 

    >Rituals</Link> 

    <Link  

        to="." 

       className=" py-2 font-semibold text-black" 

    >Clear Filters</Link> 
    </div>
      <div></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 p-3 mx-auto item-center mt-6">
        {productElement}
      </div>
    </section>
  );
}

export default ProductAll;
