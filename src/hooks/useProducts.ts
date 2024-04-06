import { ProductQuery } from "../App";
import useData from "./useData";


export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
}

const useProducts = (productQuery: ProductQuery) =>
  useData<Product>(
    "/products",
    'products',
  );

export default useProducts;
