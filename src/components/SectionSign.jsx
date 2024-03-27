import React from "react";
import ClearBtn from "./ShortComponets/ClearBtn";


function SectionSign() {
  const[subscrib,setSubscibe]=React.useState(false);
  const [signup,setSignUp]=React.useState({
    email:""}
  );
function handleSubmit(event){
  event.preventDefault();
  setSubscibe(true);
 
}
function handleChange(event){
const {name,value}=event.target;

setSignUp((prev)=>{
  
  return{
    ...prev,[name]:value
  }

})
}
  return (
    <section className="w-7/8 my-4 mx-auto px-4 py-4 mt-8 signup-container text-center">
      <h2 className="text-3xl font-bold md:text-4xl mb-3 ">Sign Up</h2>
      <p className="w-75 mx-auto text-gray-700 mb-6">
        Be the first to receive information about our new products and
        excluisive workshops.
      </p>
      <form onSubmit={handleSubmit} className="flex justify-center flex-col sm:flex-row mb-5 gap-y-4 sm:gap-y-0">
        <input
          className="w-full sm:w-4/5 sm:ml-5 pl-3 py-4 sm:py-2  mx-auto   border hover:border-indigo-300 text-sm font-semibold "
          type="email"
          placeholder="Your email"
          
          name="email"
          id="email"
          value={signup.email}
          onChange={handleChange}
      
        
        />
       
        <ClearBtn className={`w-1/2 sm:w-1/5 sm:-ml-2 `}>Subscribe</ClearBtn>
      </form>
      <div class="flex justify-center">
                    <div class="mr-8">
                        <p class="text-2xl font-bold">5k+</p>
                        <p class="text-sm">customers</p>
                    </div>
                    <div class="mr-8">
                        <p class="text-2xl font-bold">1+</p>
                        <p class="text-sm">workshops</p>
                    </div>
                    <div>
                        <p class="text-2xl font-bold">4k+</p>
                        <p class="text-sm">retreat</p>
                    </div>
                </div>
    </section>
  );
}

export default SectionSign;
