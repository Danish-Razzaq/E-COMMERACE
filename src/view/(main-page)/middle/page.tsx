import React from "react";
import Image from "next/image";
import promotion1 from "../../../../public/promotion1.webp";
import promotion2 from "../../../../public/promotion2.webp";
import promotion3 from "../../../../public/promotion3.webp";
import { Button } from "@/components/ui/button";

export default function Middle() {
  return (
    <>
    <div className="max-w-[1560px]">

  
      <h3 className="   scroll-m-20 font-semibold tracking-tight flex lg:mt-14 justify-center text-blue-600">
        Promotions
      </h3>
      <h2 className="scroll-m-20 flex justify-center mt-7 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Our Promotions Events
      </h2>
      <div className=" flex justify-between max-lg:flex-col ">
        <div className="flex flex-col justify-between gap-5">
          <div className="mt-8 w-fit pl-9 pr-7 pt-6 flex justify-center items-center bg-gray-400">
            <div>
              <h1 className="scroll-m-20 flex justify-center mt-7 w-32 pb-2 text-3xl font-semibold first:mt-0">
                GET UP TO 60%
              </h1>
              <p className="lg:w-20">For the summer season</p>
            </div>
            <div>
              <Image src={promotion1} alt="promotion1" />
            </div>
          </div>
          <div className=" pl-9 pr-7 pt-6 space-y-3 flex flex-col justify-center items-center bg-[#212121] text-white">
            <div className="pt-4 flex justify-center   items-center ">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                GET 30% Off
              </h1>
            </div>
            <p className="">USE PROMO CODE</p>
            <div className="pb-6 ">
              <Button className="cursor-pointer rounded-xl hover:bg-[#474747]  bg-[#474747]  text-sm font-semibold">
                DANIEWEEKENDSALE
              </Button>
            </div>
          </div>
        </div>
        <div  className="flex justify-center ">
          <div className="mt-8 w-fit pr-7 pt-6 flex flex-col pl-10 space-y-3 bg-[#efe1c7] text-[#212121]">
            <div>
              <h1 className="scroll-m-20 flex flex-col justify-center mt-7 pb-2 mb-2 first:mt-0">
                Flex Sweatshirt
              </h1>
              <p>
                <span className="line-through"> $100.00 </span>
                <span className="ml-3 font-semibold">$75.00</span>
              </p>
            </div>
            <div>
              <Image src={promotion2} alt="promotion2" />
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="mt-8 w-fit pr-7 pt-6 flex flex-col pl-10 space-y-3 bg-[#d7d7d9] text-[#212121] justify-center">
            <div>
              <h1 className="scroll-m-20 flex flex-col mt-7 pb-2 first:mt-0">
                Flex Push Button Bomber
              </h1>
              <p>
                <span className="line-through">$225.00 </span>
                <span className="ml-3 font-semibold">$190.00</span>
              </p>
            </div>
            <div>
              <Image src={promotion3} alt="promotion3" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
