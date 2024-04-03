import React from 'react'
import BackToAllArrow from '../components/ShortComponets/BackToAllArrow'
import imgOne from"../assets/website-imgs/2.png"
import CartItem from '../components/ShortComponets/CartItem'


function Cart() {

  return (
    
    <div class="container mx-auto mt-10">
    <div class="sm:flex shadow-md my-10">
      <div class="  w-full  sm:w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h3 class="font-semibold text-2xl">Shopping Cart</h3>
          <h4 class="font-semibold text-2xl">3 Items</h4>
        </div>
       <CartItem img={imgOne} amount={3} category="Mushroom" title="Lion`s Main" price="2" description={"on her anchor spirits scallywag rigging brigantine topmast chase guns lee."}/>
  
       
       
         <div className="pt-4 px-6 container">
            <BackToAllArrow linkGo={".."} >continue shopping</BackToAllArrow>
          </div>
      </div>
      <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
        <h4 className="font-semibold text-2xl border-b pb-8">Order Summary</h4>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm ">Items {} (card item count all)</span>
          <span className="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
          <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
        </div>
        <div className="py-10">
          <label
                for="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
          <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
        </div>
        <button className="bg-gray-800 hover:bg-red-600 px-5 py-2 text-sm text-gray-200 tracking-wide uppercase">
              Apply
            </button>
        <div className 
        ="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
        
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
       
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cart
