"use client";
import React, { useState } from "react";
import { PlusIcon } from "lucide-react";
import { Minus } from "lucide-react";


export const Quantity = () => {
  const [num, setNum] = useState(1);
  return (
    <div>
      <div className="flex space-x-5 ">
        <div className="flex space-x-7 space-y-4 ">
          <h4 className="text-base font-semibold mt-4 flex items-center justify-center ">
            Quantity
          </h4>
                  {/* Increment btn */}
          <button
            className="cursor-pointer  h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center"
            onClick={() => {
              setNum(num + 1);
            }}
          >
            <PlusIcon />
          </button>
          <div className="flex items-center">{num}</div>
          {/* decrement btn */}
          <button
            className="cursor-pointer  h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center"
            onClick={() => {
              setNum(num <= 1 ? 1 : num - 1);
            }}
          >
            <Minus />
          </button>
        </div>
      </div>
 
    </div>
  );
};

export default Quantity