import React from "react";

import Separator from "./Separator";

function ReviewBlock() {
  const [reviews, setReviews] = React.useState([]);
  const [randomNumber,setRandomNumber]=React.useState(0);
  //   const [revMessage, setRevMessage]=React.useState()
  //   const [reviewsArr,setReviewsArr]=React.useState([])

 function randomNumberGenerator(item){
    const randomN = Math.floor(Math.random() * item.length);
    setRandomNumber(randomN)
 }

  const fetchReviews = React.useCallback(async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
     let item=data.products
     item=randomNumberGenerator(item);
      console.log(data.products[1].reviews.length);
    } catch (e) {
      console.log(e);
    }
  });

  fetchReviews();
  //   React.useEffect(() => {
  //     fetch("/api/products")
  //       //return a promise that we want to unpack it

  //       .then((res) => res.json())

  //       //return a promise that we want to unpack it

  //       .then((data) =>
  //         setReviews(
  //           data.products.map((item) => {
  //             return item.reviews;
  //           })
  //         )
  //       );
  //   }, []);

  const reviewPart = reviews.map((item) => {
    const itemRev = item?.map((rev) => {
      const { reviewName, reviewCountry, reviewDetails } = rev;

      return (
        <div>
          <div className="w-full md:w-6/7 mx-auto py-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
                  <div className="max-w-md mx-auto p-4 lg:mx-0">
                    <img src="" alt="" />
                    <h5 className="text-lg font-medium text-red-800 mb-1">
                      {reviewName}
                    </h5>
                    <span className="font-muted text-sm">{reviewCountry}</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3 xl:w-auto ">
                  <div className="max-w-md mx-auto lg:mx-0 mb-8 ">
                    <p className="text-base ">{reviewDetails}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return <div>{itemRev}</div>;
  });

  return (
    <section className="container">
      <div className="container px-4 mx-auto mt-8">
        <div className="max-w-6xl mx-auto">
          <Separator />
          <h3 className="text-center mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl px-6 pb-6">
            Read trusted reviews from our customers
          </h3>
          <div>{reviewPart}</div>
          <div className="w-full text-center">
            <button onClick={randomNumberGenerator} className="bg-white border-2 p-4">
              More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewBlock;
