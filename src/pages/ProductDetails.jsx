import React from "react";
import { useParams,useLocation } from "react-router-dom";

import BackToAllArrow from "../components/ShortComponets/BackToAllArrow";
import ProductCard from "../components/ShortComponets/ProductCard";
import ReviewCard from "../components/ShortComponets/ReviewCard";
import { getProducts } from "../api";
import Loading from "../components/ShortComponets/Loading"
import ErrorShort from "../components/ShortComponets/ErrorShort";



function ProductDetails() {
  const {id} = useParams();
  const [product, setProduct] = React.useState(null);
  const location = useLocation() 
  const search = location.state?.search || "" 
  const category = location.state?.category || "" 

   

 const [error, setError] = React.useState(null); 

 const [loading, setLoading] = React.useState(false); 



  React.useEffect(() => {
    async function loadProductsDetails(){
      setLoading(true);
      try{
        const data= await getProducts(id)
        setProduct(data)
      }catch(err){
        setError(err)
      }finally{
        setLoading(false)
      }
    }
  loadProductsDetails()},[id])
   


 

  //stating

  if(loading){
    <Loading/>
  }

  if (error) {
    <ErrorShort children={`There was an error: ${error.message}`} />;
  }

  return (
    <div className="product-details-container">
      {product &&
      (
        <div className="container">
          <div className="pt-4 px-6 container">
            <BackToAllArrow linkGo={`..${search}`}  relWay={"path"}>See All {category}</BackToAllArrow>
          </div>

          <div className=" mx-6 my-12 md:text-left w-full">
            <ProductCard
              key={product.id}
              {...product}
              goToCart={"/cart"}
              categoryClass={product.category==="Herbs"?"bg-green-500":product.category==="Mushroom"?"bg-yellow-600":"bg-indigo-400 "}
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
      ) 
      }
    </div>
  );
}

export default ProductDetails;
