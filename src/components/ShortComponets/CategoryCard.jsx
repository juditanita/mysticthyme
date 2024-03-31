import React from "react";
import Paragraphs from "./Paragraphs";
import Button from "../Button";

function CategoryCard({ catDescription, catImg, catTitle }) {
  let text = catDescription.split(" ",15);
const catDesc = text.join(" ");





  return (
   <>
      <img src={catImg} alt={`category of ${catTitle}`} className="cat-img " />

      <h2 className="mb-2 font-bold text-2xl">{catTitle}</h2>

      <Paragraphs className={`text-md text-justify px-2`}>
        {catDesc}...
      </Paragraphs>
      <div className=" mt-auto pt-3">
        <Button className={`mb-2 mt-3  bg-black text-white w-5/7 md:w-4/5 mx-auto`}>
          Shop Now
        </Button>
      </div>
     
      </>
  );
}

export default CategoryCard;
