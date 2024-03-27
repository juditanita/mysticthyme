import React from "react";
import MoodBoardImg from "../assets/website-imgs/moodboardA.png"



function MoodBoard() {
  

  return (
    <section className="container ">
      <h1 className="text-4xl font-bold pt-8 mt-10 md:text-5xl text-center">MoodBoard</h1>
  
  <div className="text-center moodboard-container mt-6 bg-red-100 py-3"><img src={MoodBoardImg}alt="energising mood" /></div>

       
    </section>
  );
}

export default MoodBoard;
