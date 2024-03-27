import React from "react";
import { useParams } from "react-router-dom";
import Paragraphs from "../components/ShortComponets/Paragraphs";

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
    <div className="">
      <img src={product.img} alt="" />
      <h3>{product.title}</h3>
      <Paragraphs>{product.description}</Paragraphs>
      {product.tags.map(tag=><p>{tag}</p>)}
       <span>${product.price}</span> 
      <p>{product.available}</p>
      <div>{product.reviews.map(review=><p>{review}</p>)}</div>

    </div>:<div>Loading componet not ready yet</div>}
  </div>;
}

export default ProductDetails;
