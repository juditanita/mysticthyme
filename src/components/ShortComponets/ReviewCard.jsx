import React from "react";



function ReviewCard({ reviewName, reviewDetails, reviewCountry,randomPerson }) {
   
   

 return( <div>
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
    
    
  </div>)
}

export default ReviewCard;
