import React from "react";

function ReviewCard({ reviewName, reviewDetails, reviewCountry }) {
  return (
    <div id="item1" className="carousel-item w-full">
      <blockquote className="rounded-lg grid grid-cols-1 md:grid-cols-2 bg-gray-50 p-6 shadow-sm ">
        <div>
          <p className="mt-0.5 text-lg font-medium text-gray-900">
            {reviewName}
          </p>

          <span>{reviewCountry}</span>
        </div>
<div>   <p className="mt-4 text-gray-700 w-full">{reviewDetails}</p></div>
     
        <div className="flex justify-center w-full py-2 gap-2">
          {/* <a href="#item1" className="btn btn-xs">
            1
          </a> */}
        </div>
      </blockquote>
    </div>
  );
}

export default ReviewCard;
