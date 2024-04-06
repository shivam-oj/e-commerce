import { SimpleGrid, Text } from "@chakra-ui/react";
import { ProductQuery } from "../App";
import useCarts from "../hooks/useCarts";
import CartProductCard from "./CartProductCard";
import ProductCardContainer from "./ProductCardContainer";
import ProductCardSkeleton from "./ProductCardSkeleton";


interface Props {
  productQuery: ProductQuery;
}

const CartGrid = ({ productQuery }: Props) => {
  const { data, error, isLoading } = useCarts(productQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <ProductCardContainer key={skeleton}>
            <ProductCardSkeleton />
          </ProductCardContainer>
        ))}
      {data.map((product) => (
        product.itemonbasket = false,
        <ProductCardContainer key={product.id}>
          <CartProductCard product={product} />
        </ProductCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default CartGrid;
