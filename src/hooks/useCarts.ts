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
  itemonbasket: boolean;
}

const useCarts = (productQuery: ProductQuery) =>
  useData<Product>(
    "/carts/1",
    'products',
  );

export default useCarts;
