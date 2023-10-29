"use client";

import { HammerIcon, SearchIcon, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Link from "next/link";
import Logo  from '../../../public/logo.webp'
import { AlignRight } from "lucide-react";

//For Drawer 
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";

const Header = () => {

  const cartValue = useSelector(
    (state: RootState) => state.counterSlice.totalQuantity
  );
  return (
    <nav className=" z-[10] max-w-[1560px]  fixed top-0 left-0 right-0 bg-white px-8 py-8 sm:px-4 md:px-8 md:py-8 lg:px-8 flex justify-between">
   
        <div className="">
            <Link href={""}> <Image src={Logo} alt="Logo" /></Link>
        </div>
      

      
      <div className="hidden ml-auto flex-grow items-center justify-evenly px-5 lg:flex">
  
        <ul className="flex space-x-10 font-medium">
          <li>
            <Link href="category/female">Female</Link>{" "}
          </li>
          <li>
            <Link href="category/male">Male</Link>{" "}
          </li>
          <li>
            <Link href="category/kids">Kids</Link>{" "}
          </li>
         
          <li>
            {" "}
            <Link href="/products">All Products</Link>{" "}
          </li>
        </ul>
        <div className="flex items-center mr-8">
          <div className="flex SearchBar border w-fit border-gray-200 rounded-[6px] h-7 items-center text-gray-600 font-serif space-x-2 pt-2">
            <div className="rounded-2xl pb-3 p-1">
              <SearchIcon />
              
            </div>
            <div className="pr-3 md:pr-20 h-3 mb-5">
              <input
                type="text"
                className="border-none outline-none"
                placeholder="What you looking for"
              />
            </div>
          </div>
          <div className="flex items-center  absolute right-1 pr-10 ">
            <Link href="payments">
              <div className="h-14 w-14 rounded-full relative justify-center items-center flex bg-gray-100">
                <ShoppingCart className="w-8 h-8" />
                <span
                  className="  h-4 w-4 bg-red-700 absolute
              rounded-full right-2 top-1 flex items-center text-sm text-white left-auto justify-center   "
                >
                  {cartValue}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='z-100'>

  
      <Sheet >
      <SheetTrigger> 
              <AlignRight className="lg:hidden" size={32} />
          
          </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
      <SheetDescription>
      
      <ul className="flex flex-col justify-center items-center space-y-4 font-medium mt-[20%]">
        <li className="py-3">
        <Link href="payments">
              <div className="h-14 w-14 rounded-full relative justify-center items-center flex bg-gray-100">
                <ShoppingCart className="w-8 h-8" />
                <span
                  className="  h-4 w-4 bg-red-700 absolute
              rounded-full right-2 top-1 flex items-center text-sm text-white left-auto justify-center   "
                >
                  {cartValue}
                </span>
              </div>
            </Link>
        </li>
          <li>
            <Link href="category/female">Female</Link>{" "}
          </li>
          <li>
            <Link href="category/male">Male</Link>{" "}
          </li>
          <li>
            <Link href="category/kids">Kids</Link>{" "}
          </li>
          
          <li>
            {" "}
            <Link href="/products">All Products</Link>{" "}
          </li>
        </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  </div>
    </nav>
  );
};

export default Header;
