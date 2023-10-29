import React from "react";
import Product_cart from "@/components/carts/page";
import Image from "next/image";
import feature from "public/feature.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getData } from "@/Data/fetching";


export default async function productsList() {
  const data = await getData();
  const product = data.slice(7, 10);
  return (
    <>
      <div className="  max-w-[1560px]">
        <h3 className="scroll-m-20 font-semibold tracking-tight flex mt-20 justify-center text-blue-600 ">
          PRODUCTS
        </h3>
        <h2 className=" scroll-m-20 flex justify-center mt-7 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Check What We Have
        </h2>
        
        <div className="flex max-lg:flex-col justify-center items-center ">
            {product.map((item) => (
              <Product_cart
                title={item.title}
                category={item.category}
                tag={item.tag}
                price={item.price}
                img={item.img}
                id={item._id}
                key={item._id}
              />
            ))}
        </div>
  
        <div className=" mt-36 flex lg:justify-end lg:items-end">
          <h1 className=" scroll-m-20 text-4xl  font-bold tracking-tight lg:text-5xl">
            Unique and Authentic <br /> Vintage Designer <br /> Jewellery
          </h1>
        </div>
        <div className="z-0 -mt-[104px] max-lg:flex-col flex w-full  lg:space-x-3  max-lg:px-[6%]  space-y-10 bg-[#eaeffa57]   pb-10 pt-32 md:-mt-[56px] md:pt-24 xl:flex-row xl:space-x-10 xl:space-y-0 pr-6 ">
          <div className="text-[60px] font-bold text-gray-200 sm:text-[75px] sm:font-bold md:text-8xl px-10 max-lg:px-2  md:font-extrabold absolute md:w-[200px] lg:w-[200px] sm:[100px]">
            {" "}
            Different form others
          </div>

          <div className=" lg:space-y-32 space-y-6 lg:w-[552px] ">
            <div className=" relative  flex  ">
              <div>
                {" "}
                <h3 className="font-semibold">Using Good Quality Materials</h3>
                <p className="font-light ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold flex-wrap">
                  100% Handmade Products
                </h3>
                <p className="font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex  relative space-x-7">
              <div>
                <h3 className="font-semibold">Modern Fashion Design</h3>
                <p className="font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Discount for Bulk Orders</h3>
                <p className="font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:space-x-6 ">
            <div className="flex lg:space-x-10  max-lg:flex-col">
              <Image src={feature} alt="img" width={300} height={400} />
              <div className="flex flex-col lg:space-y-28 space-y-7">
                <div className="font-light lg:w-60 max-lg:mt-6  ">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </div>
                <div className="flex  lg:items-end ">
                  <Link href="/products">
                    <Button className="hover:bg-black  border-l-2 border-t-2 border-gray-500  bg-[#212121] text-white lg:w-32 text-lg   px-4 py-8">
                      See All Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 flex flex-col justify-center items-center mt-40  mb-24">
          <div className="text-8xl max-lg:text-6xl font-extrabold absolute mt-5 text-gray-300 ">
            NewSletter
          </div>
          <h2 className="text-4xl font-extrabold relative">
            Subscribe Our Newsletter
          </h2>
          <p className="relative text-lg max-lg:text-base">
            Get the latest information and promo offers directly
          </p>
          <div className="flex relative  max-lg:flex-col max-lg:gap-3 items-end ">
            <input
              className=" w-[350px] h-10 border-2 max-lg:rounded-full border-[#212121]"
              type="text"
              placeholder="  Email"
            />
            <Button className=" ml-3 hover:bg-black bg-[#212121] text-white lw-fit max-lg:rounded-xl ">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
