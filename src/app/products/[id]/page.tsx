import { Quantity } from "@/components/Quantity";
import Image from "next/image";
import { getData } from "@/Data/fetching";
import { urlForImage } from "../../../../sanity/lib/image";
import AddToCart from "@/AddToCard";
import { ProductsType } from "@/Data/type";

//for Filter that show only this id data in which use click 
const getProductsDetail = async (id: string) => {
  const data = await getData();
  return data.filter((Products) => Products._id === id);
};

const sizeBtn = ["Xs", "S", "M", "L", "Xl"];

export default async function Page({ params }: { params: { id: string } }) {
  const result:ProductsType[] = await getProductsDetail(params.id);
  return (
    <div className=" flex-grow   lg:mt-[110px]  -mx-[5%]  bg-[#fbfbfb]">
      {result.map((Product) => {
        return (
          <>
            <div className="flex space-x-10  justify-center max-lg:flex-col  ">
            <div className='flex space-x-5 max-lg:px-6 mt-12'>
              {/* Left Im3ge */}
              <div key={Product._id} className="space-y-3 pt-2">
                <Image
                 src={urlForImage(Product.img).url()}
                  alt={Product.title}
                  className="lg:w-[130px] lg:h-[130px] w-[90px] rounded-md"
                  width={600}
                  height={700}
                />
                <Image
                 src={urlForImage(Product.img).url()}
                 width={600}
                  height={700}
                  alt={Product.title}
                  className="lg:w-[130px] lg:h-[130px] w-[90px] rounded-md max-lg:hidden"
                />
                <Image
                  src={urlForImage(Product.img).url()}
                  width={600}
                  height={700}
                  alt={Product.title}
                  className="lg:w-[130px] lg:h-[130px] w-[90px] rounded-md"
                />
              </div>
              {/* Big Right Image */}
              <div key={Product._id} >
                <Image
                  src={urlForImage(Product.img).url()}
                  width={600}
                  height={700}
                  alt={Product.title}
                   className="rounded-2xl lg:w-[600px] lg:h-[600px]"
                />
              </div>
              </div>
              {/* Right Content */}
              <div className="py-12   ">
                <h1 className="text-3xl ">{Product.title}</h1>
                <h2 className=" text-xl font-bold text-gray-400 " key={Product.tag} >
                  {Product.tag}
                </h2>
                <div className="mt-10 space-y-3">
                  <h3 className="text-sm font-semibold">SELECT SIZE</h3>
                  <div className="flex gap-5">
                    {/* loop into btn */}
                    {sizeBtn.map((item,index) => {
                      return (
                        <div className=" flex items-center justify-center h-10 w-10 rounded-full bg-slate-200 " key={index}>
                          <span className=" text-lg " >{item}</span>
                        </div>
                      );
                    })}
                  </div>
                  <Quantity />
                  {/* Total Prices */}
                  <div className=" mt-6">
                    <h5 className="text-lg font-semibold flex items-center  mt-7 mb-7 " key={Product.price}>
                      Total: {Product.price}
                    </h5>
                  </div>
                  <AddToCart />
                </div>
              </div>
            </div>
            <div className="flex justify-center py-5">
              <div className=" bg-white h-fit mb-16 lg:w-[1200px] py-20 max-lg:px-10 px-20 ">

           <div className="flex justify-start items-center">
               <div className="text-[110px] max-lg:text-6xl font-extrabold absolute text-gray-200 flex justify-start  items-center">Overview
              </div>
              <span className=" relative flex text-black font-bold lg:text-3xl text-2xl ">Product Information</span> 
           </div>


           <div className=" mt-20 bg-gray-100 h-1 "></div>
           <div className=" mt-14 flex  max-lg:flex-col lg:space-x-60  gap-3 ">
             <h1 className=" font-bold">PRODUCT DETAILS</h1>
             <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           </div>
           <div className=" mt-14 flex lg:space-x-52  max-lg:flex-col ">
             <h1 className=" font-bold">PRODUCT CARE</h1>
             <div className=" font-bold  ">
              <li>Hand wash using cold water.</li>
              <li>Do not using bleach.</li>
              <li>Hang it to dry.</li>
              <li>Iron on low temperature.</li>
             </div>
           </div>
            </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
