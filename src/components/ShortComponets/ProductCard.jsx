import React from "react";

import { Link } from "react-router-dom";
import Paragraphs from "./Paragraphs";

import ProductBtn from "./ProductBtn";


function ProductCard({img,title, price, category, description,children,state, childrenClass,imgClass,categoryClass,divClass,goToCart,goToDetails}) {
  
 
 
 
 

  return (
    <> 
    <div className={divClass} >
    <div>
      <img className={imgClass} src={img} alt={`${title}  in the ${category}`} />
      <div>
      <div className="px-2">
      <Link to={goToDetails} state={state} className="cursor-pointer">
      <button className={`px-2 py-p float-right   rounded-lg text-white   ${categoryClass} `}>{category}</button>
      <h3 className="mb-2  text-l uppercase my-4">
     {title}
    </h3>
    <h6 className="font-bold">${price}.00</h6>
   
    <Paragraphs className={`text-md text-justify `}>{description}</Paragraphs>
      <p className={childrenClass}>{children}</p></Link>
      </div>
     
      
     
   
   
    </div>
    <Link to={goToCart}><div className="pt-8 mb-8 "><ProductBtn/></div></Link>
    
   
      </div>
      
     
    
  
     </div>
    </>
  );
}

export default ProductCard;
