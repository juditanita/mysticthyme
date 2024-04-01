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

  console.log(params);

  return (
    <div className="product-details-container">
      {product ? (
        <div className="container">
          <div className="pt-4 mx-6">
            <BackToAllArrow>all Products</BackToAllArrow>
          </div>

          <div className=" mx-6 my-12 md:text-left w-full">
            <ProductCard
              key={product.id}
              {...product}
              imgClass={`w-auto product-img md:mx-4`}
              divClass={`grid grid-cols-1  md:grid-cols-2 md:text-left mx-10`}
            />
            <div className="w-full flex ">
            
              <h4>Reviews</h4>
              {product.reviews ? (
                product.reviews.map((review) => {
                  return (
                    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                      <div class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
                        <ReviewCard key={review.revId} {...review} />
                      </div>
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
