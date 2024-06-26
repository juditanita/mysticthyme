import React from "react";

import ProductCard from "./ShortComponets/ProductCard.jsx";
import { Link } from "react-router-dom";
import Banner from "./Banner.jsx";
import { getProducts } from "../api";
import ErrorShort from "./ShortComponets/ErrorShort.jsx";



function Product() {

  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState(null);
  


  React.useEffect(() => {
    async function loadProducts() {

      try {
        const data = await getProducts();

        setProducts(data.slice(0,4));
      } catch (err) {
        console.log(err);
        setError(err);
      }
    }

    loadProducts();
  }, []);


  if(error){
    <ErrorShort children={`There was an error: ${error.message}`}/>
  }

  //get only the available items then go through
  const productElement = products.filter(item=>item.available).map((item) => {
    const { id, img, title, description, price, category, tags } = item;
  
      const singleTagEl = tags.map((singleTag, index) => {
        return (
          <p className="mr-2 mb-2 p-1 italic" key={index}>
            #{singleTag}
          </p>
        );
      }).flat();

      return (
        <div className="product-card w-2/3 sm:w-1/2 md:w-4/6 rounded-md text-left col-span-1 flex flex-col overflow-hidden mx-auto mb-6">
         
            <ProductCard
              key={id}
              img={img}
              description={description.split(" ",10).join(" ")}
              title={title}
              category={category}
              price={price}
              imgClass={`w-full product-img`}
              children ={"Read More..."}
              categoryClass={category==="Herbs"?"bg-green-500":category==="Mushroom"?"bg-yellow-600":"bg-indigo-400 "}
              childrenClass={`float-right text-red-700`}
              goToDetails={`/products/${item.id}`}
              goTo={"/products/cart"}
            />
          
            <div className="flex flex-wrap justify-end pe-3 mt-auto pt-3 text-xs font-light">
              {singleTagEl}
            </div>
         
        </div>
      );
    
  });

 return(
  <section className="section container ">
  
  <Link to="products">
   <Banner childrenH1="Best Selling Products" childrenPar="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facere. Lorem ipsum dolor sit amet consectetur"
    childrenBtn="Shop Now"/>
   </Link>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 p-3 mx-auto item-center mt-6">
    {productElement}
  </div>
</section>
 )
}

export default Product;
