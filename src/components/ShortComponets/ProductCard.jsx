import React from "react";

import { Link } from "react-router-dom";
import Paragraphs from "./Paragraphs";

import ProductBtn from "./ProductBtn";


function ProductCard({img,title, price, category, description,children, childrenClass,imgClass,categoryClass,divClass,goTo,goToDetails}) {
  
 
 
 
 

  return (
    <> <div className={divClass} >
      <img className={imgClass} src={img} alt={`${title}  in the ${category}`} />
      <div>
      <div className="px-2">
      <button className={`px-2 py-p float-right   rounded-lg text-white   ${categoryClass} `}>{category}</button>
      <h3 className="mb-2  text-l uppercase my-4">
     {title}
    </h3>
    <h6 className="font-bold">${price}.00</h6>
   
   <Link to={goToDetails}> <Paragraphs className={`text-md text-justify `}>{description}</Paragraphs>
      <p className={childrenClass}>{children}</p></Link>
     
      
     
   
   
    </div>
    <Link to={goTo}><div className="pt-8 mb-4"><ProductBtn/></div></Link>
    
   
      </div>
      
     
    
  
     </div>
    </>
  );
}

export default ProductCard;
