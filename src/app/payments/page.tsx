import Product_cart from "@/components/carts/page";
import { getData } from "@/Data/fetching";


const Products= async () => {
  
  const data = await getData();
  const selectProduct = data.slice(3);

  return (
    <div className=" flex-grow   lg:mt-[110px]">
      <div className="  flex max-w-[1560px] flex-wrap justify-center gap-5 px-5  sm:p md:px-16 lg:px-20  ">
        {selectProduct.map((item) => {
          return (
            <Product_cart
              title={item.title}
              category={item.category}
              tag={item.tag}
              price={item.price}
              img={item.img}
              id={item._id}
              key={item._id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Products;
