// import { ShoppingBag } from "lucide-react";
// import AddToCart from "@/AddToCard";


import { getData } from "@/Data/fetching";



export default async function Payment ({params}:{params:{id:string}}){

   const data = await getData();
   
   return (
     
      data.map((item)=>(item.img))

   )

}





















// const Payment = () => {
//   return (
//     <div className="p-5">
//       <h1 className=" text-3xl font-extrabold "> Shopping Cart </h1>

//       <div className=" flex flex-col justify-center items-center space-y-3">
//         {<ShoppingBag width={150} height={150} />}
//         <h2 className="text-2xl font-bold">Your shopping bag is empty</h2>
//       </div>
//     </div>
//   );
// };
// export default Payment;
