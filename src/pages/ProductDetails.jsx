import React from "react";
import { useParams } from "react-router-dom";

import BackToAllArrow from "../components/ShortComponets/BackToAllArrow";
import ProductCard from "../components/ShortComponets/ProductCard";
import ReviewCard from "../components/ShortComponets/ReviewCard";



function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, [params.id]);

 

  return (
    <div className="product-details-container">
      {product ? (
        <div className="container">
          <div className="pt-4 px-6 container">
            <BackToAllArrow linkGo={".."}>See All Products</BackToAllArrow>
          </div>

          <div className=" mx-6 my-12 md:text-left w-full">
            <ProductCard
              key={product.id}
              {...product}
              goTo={"/cart"}
              imgClass={`w-auto product-img mx-auto md:mx-4`}
              divClass={`grid grid-cols-1 mx-auto w-2/3 md:w-4/5 md:gap-8 md:grid-cols-2 md:text-left `}
            />
            <div className=" mx-12">
            
              <h3 className="text-center font-bold text-2xl pt-6 text-gray-900 mb-4 ">Reviews</h3>
              <span className="mb-6 grid place-items-center"> ({product.reviewsArr.length} review found)</span>
             
              {product.reviewsArr ? (
                product.reviewsArr.map((review) => {
                 
                  return (
                   
                      <div class="mt-8 mx-auto w-3/4">
                       
                         <ReviewCard key={review.revId} {...review} /> 
                      </div>
                  
                  );
                })
              ) : (
                <p>No product reviews</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading componet not ready yet</div>
      )}
    </div>
  );
}

export default ProductDetails;
