// fetching.tsx
import { client } from "../../sanity/lib/client";
 import { ProductsType } from "./type";

export const getData = async ():Promise<ProductsType[]> => {
  
    const data = await client.fetch(`*[_type == "Products"]{
        _id,
        title,
        tag,
        category,
        price,
        img,

    }`);
    return data;
  } 

