import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";


export default async function Hero() {
 
  return (
    <div className=" flex-1 max-w-[1560px] flex-col space-y-24 ">
      <div className=" flex w-full flex-row items-center space-x-10 ">
        <div className="hero lg:w-2/5 space-y-9 mb-36 ">
          <Badge className="mt-10 w-fit rounded-sm  bg-blue-200    font-bold py-3  px-5   text-blue-500">
            Sale 75%
          </Badge>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl ">
            An Industrial Take on Streetwear
          </h1>
          <p className="lg:w-[75%] text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link href="/products">
            <Button className=" text-white border-r-2 border-b-2 border-gray-500  items-center justify-center lg:rounded-sm  md:rounded-xl rounded-lg text-sm font-medium transition-colors hover:bg-black py-6 inline-flex md:h-20 md:w-40 lg:h-16 lg:w-40   mt-10   space-x-2 bg-[#212121] lg:px md:px-6  sm:w-[50%]     ">
              <ShoppingCartIcon size={33} className="mr-3" />
              Start Shopping
            </Button>
          </Link>

          <div className="heroLabels flex  max-lg:flex-col gap-5 ">
            <div className="flex   max-lg:space-x-20 gap-5    ">
              <Image src="/hero1.png" alt="hero 1"  width={80} height={60}  />
              <Image src="/hero2.png" alt="hero 2"  width={80} height={60} />
            </div>
            <span className="flex   max-lg:space-x-20 gap-5">
              <Image src="/hero3.png" alt="hero3"  width={80} height={60} />
              <Image src="/hero4.png" alt="hero 4"  width={80} height={60} />
            </span>
          </div>
        </div>
        <div className="hidden basis-7/12 justify-end lg:flex mb-10 -pr-16 ">
          <div className="h-[575px] w-[575px] overflow-visible rounded-full bg-[#ffece3]">
            <Image
              src="/hero.png"
              alt="hero img"
              loading="lazy"
              width="628"
              height="604"
              decoding="async"
              
              data-nimg="1"
              className="mx-auto -mt-5 h-[604px] w-[628px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
