import React from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

function CartItem({
  id,
  img,
  title,
  description,
  category,
  amount,
  toggleAmount,
  remove,
}) {
  return (
    <div className="md:grid grid-cols-3 items-strech py-8 md:py-10 lg:py-8 b">
      <div className="md:col-span-1  w-full mx-auto">
        <img
          src={img}
          alt={title}
          className="h-full object-center object-cover md:block w-11/12 md:w-10/12"
        />
      </div>

      <div className="md:col-span-2 flex justify-between w-11/12 ">
        <div className="grid-span-2 w-full   items-start justify-start  ">
          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
            {category}
          </p>
          <p className="text-2xl font-black leading-none text-gray-800">
            {title}
          </p>
          {/* button is increase and decrease */}
          <p className="text-base leading-relaxed text-gray-600 pt-2 w-full">
            {description}
          </p>

          <p
            className="text-xs leading-3 underline text-red-500 pt-6 cursor-pointer"
            onClick={() => remove(id)}
          >
            remove
          </p>
        </div>
        <div className="col-span-1 ml-4  md:items-center md:justify-end   pt-5 ">
          <div class="flex itemms-center ">
            <div className="flex flex-col   items-center gap-4">
              {/* increase amount */}
              <button
                className="text-2xl"
                onClick={() => toggleAmount(id, "inc")}
              >
                <RiArrowUpSLine />
              </button>
              {/* amount */}
              <p className="border-2 p-3">{amount}</p>
              {/* decrease amount */}
              <button
                className="text-2xl"
                onClick={() => toggleAmount(id, "dec")}
              >
                <RiArrowDownSLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
