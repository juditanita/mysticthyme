import React from "react";

import Separator from "./Separator";
import reviews from "../reviews.js";

function ReviewBlock() {
  const [reviewsAll, setReviewsAll] = React.useState([]);
  setReviewsAll(reviews);
  console.log(reviewsAll)


  return (
    <section className="container">
      <div className="container px-4 mx-auto mt-8">
        <div className="max-w-6xl mx-auto">
          <Separator />
          <h3 className="text-center mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl px-6 pb-6">
            Read trusted reviews from our customers
          </h3>

          <p></p>

          <div></div>

          <div></div>

      
        </div>
      </div>
    </section>
  );
}

export default ReviewBlock;
