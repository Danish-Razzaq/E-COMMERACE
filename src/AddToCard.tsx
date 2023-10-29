"use client";
import { useDispatch } from "react-redux";
import { cartAction } from "./store/counter/counterSlice";
import { ShoppingCart } from "lucide-react";
import { Button } from "./components/ui/button";
import toast from "react-hot-toast";

const AddToCart = () => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartAction.Addcart({ quantity: 1 }));
    toast.success("added to cart");
  };
  // const removeItem = () => {
  //   dispatch(cartAction.RemoveFromcart({ quantity :1}));
  // };
  // const resetCart =()=>{
  //   dispatch(cartAction.clearCart({}))
  // }
  return (
    <>
      <div className=" flex space-x-3 mt-4">
        <Button
          className="bg-[#212121] px-7 py-6 border-l-2 border-t-2 border-gray-400 text-white rounded-sm hover:bg-slate-700"
          onClick={addItem}
        >
          <ShoppingCart /> <span className="ml-2">Add to cart </span>
        </Button>
        ,
        {/* <Button
      className="bg-black text-white rounded-lg hover:bg-slate-700"
      onClick={removeItem}
      >
      Remove to cart
    </Button>
    <Button
      className="bg-black text-white rounded-lg hover:bg-slate-700"
      onClick={resetCart}
      >
      Remove All Item
    </Button> */}
      </div>
    </>
  );
};
export default AddToCart;
