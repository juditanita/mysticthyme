import React from "react";

import Separator from "./Separator";

function ReviewBlock() {
  const [reviewsAll, setReviewsAll] = React.useState([]);

  const [randomReviews, setRandomReviews] = React.useState([]);
  const [reviewsItem, setReviewsItem] = React.useState([]);

  function generateRandomItem() {
    let randomN = reviewsAll[Math.floor(Math.random() * reviewsAll.length)];
    console.log(randomReviews.reviewsArr[0])
    return setRandomReviews(randomN);
    
  }

  const reviewsItemEl = reviewsItem.map((item) => {
    return (
      <div>
        <p key={item.revId}>{item.reviewDetails}</p>
        <small>{item.reviewName}</small>
      </div>
    );
  });

  React.useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setReviewsAll(data.products))
        
         
        
        //data.products[0].reviewsArr[0]))};
    // setReviewsItem(randomReviews.reviewsArr);
  }, []);

 console.log(reviewsAll)
  reviewsAll.map(item=>console.log(item.reviewsArr))
 setReviewsItem(randomReviews.reviewsArr);



  return (
    <section className="container">
      <div className="container px-4 mx-auto mt-8">
        <div className="max-w-6xl mx-auto">
          <Separator />
          <h3 className="text-center mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl px-6 pb-6">
            Read trusted reviews from our customers
          </h3>
          <p>{randomReviews.id}</p>
          <p>{reviewsAll.map((item) => item.reviewCountry)}</p>
         

          {reviewsItem && reviewsItemEl}

          <p></p>

          <div></div>

          <div></div>

          <div className="w-full text-center">
            <button
              onClick={generateRandomItem}
              className="bg-white border-2 p-4"
            >
              More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewBlock;
