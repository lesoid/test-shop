import { IProduct } from "~~/types/IProduct";
export async function getProd():Promise<IProduct> {
    const { data:product } = await useFetch('https://fakestoreapi.com/products/1')
 return  product.value as IProduct
} 

