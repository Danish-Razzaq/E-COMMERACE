// import React from "react";
import Image, { StaticImageData } from "next/image";
import Addtocart from "@/AddToCard";
import Link from "next/link";

import { urlForImage } from "../../../sanity/lib/image";

export default function product_cart(props: {
  title: string;
  category: string;
  tag: string;
  price: string;
  img:  any ;
  // bg: string;
  id: string;
}) {
  return (
    <>
    
      <Link href={`/products/${props.id}`}>
        <div className="flex flex-col justify-start items-start">
          <div className="flex  flex-col space-y-7  justify-start transition duration-700 ease-in-out   transform-none hover:scale-110 cursor-pointer ">
            <div
              className={`mt-8 w-60 h-60 pt-6 flex flex-col   space-y-3  text-[#212121] justify-center `}
            >

              <Image src={urlForImage(props.img).url()} alt="product" height={745}  width={700} />
            </div>
            <div className="space-y-0">
              <h3 className=" font-semibold ">{props.title}</h3>

              <p className="font-semibold text-[#898d96] ">{props.tag}</p>
              <p className="font-bold">{props.price}</p>
            </div>

         
          </div>
     
        </div>
      </Link>
    </>
  );
}
