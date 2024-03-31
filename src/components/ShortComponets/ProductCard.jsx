import React from "react";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";
import Paragraphs from "./Paragraphs";
import ClearBtn from "./ClearBtn";


function ProductCard({img,title, price, category, description,children, childrenClass,imgClass,divClass}) {
  
 
 
 
 

  return (
    <> <div className={divClass} >
      <img className={imgClass} src={img} alt={`${title}  in the ${category}`} />
      <div>
      <div className="px-2">
      <h3 className="mb-2  text-l uppercase my-4">
     {title}
    </h3>
   
      <Paragraphs className={`text-md text-justify `}>{description}</Paragraphs>
      <p className={childrenClass}>{children}</p>
      <hr  className="bg-black mt-6 "/>
     
   
   
    </div>
    <ul className="product-actionbtns flex justify-around text-l gap-3 pt-4 mx-3 "> 
      <li><h6 className="font-bold">${price}.00</h6></li>
      <li>
      <Link to="" className="flex items-center text-xl gap-2 font-bold  ">
     <ClearBtn  > <LiaCartPlusSolid />
     </ClearBtn>
     
    
     </Link>
      </li>
      <li className={" text-xl hover:text-pink-500 hover:text-bold  "}> 
        <IoMdShare/>
      </li>
     

     </ul>
      </div>
      
     
    
  
     </div>
    </>
  );
}

export default ProductCard;
