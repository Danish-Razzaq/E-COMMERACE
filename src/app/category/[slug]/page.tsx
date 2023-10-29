import Product_cart from "@/components/carts/page";
import { getData } from "@/Data/fetching";

const getProductsByCategory = async (category: string) => {

  const data = await getData();
  
  return data.filter((Products) => Products.category === category);
};

export default  async function Page({ params }: { params: { slug: string } }) {
  const result =  await getProductsByCategory(params.slug);
  return (
    <div className=" flex-grow   lg:mt-[110px]">
      <div className="  flex max-w-[1560px] flex-wrap justify-center gap-5 px-5  sm:p md:px-16 lg:px-20  ">
        {result.length > 0 ? (
           result.map((item) => {
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
          })
        ) : (
          <p className="mt-[15%]">! No Products Found</p>
        )}
      </div>
    </div>
  );
}
