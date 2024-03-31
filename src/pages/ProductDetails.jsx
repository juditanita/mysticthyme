import React from "react";
import { useParams } from "react-router-dom";
import Paragraphs from "../components/ShortComponets/Paragraphs";
import BackToAllArrow from "../components/ShortComponets/BackToAllArrow";
import ProductCard from "../components/ShortComponets/ProductCard";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct]=React.useState(null)
 
  

  React.useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, [params.id]);

  console.log(params);
 
  return <div className="product-details-container">
    {product?
    <div className="container">
      <div className="pt-4 mx-6">
      <BackToAllArrow>all Products</BackToAllArrow>
      </div>
      
      <div className=" mx-6 my-12 md:text-left">  
      <ProductCard  key={product.id} {...product}
        imgClass={`w-auto product-img md:mx-4`} divClass={`grid grid-cols-1  md:grid-cols-2 md:text-left mx-10`}/>
        <h4>Reviews</h4>
        {
product.reviews?(product.reviews.map(review=>{
  return(
  <p>{review}</p>)})):(<p>No product reviews</p>)
        }
     
      </div>
    
     
      

    </div>:<div>Loading componet not ready yet</div>}
  </div>;
}

export default ProductDetails;
