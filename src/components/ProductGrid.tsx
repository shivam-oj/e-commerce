import { SimpleGrid, Text } from "@chakra-ui/react";
import { ProductQuery } from "../App";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardContainer from "./ProductCardContainer";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
  productQuery: ProductQuery;
}

const ProductGrid = ({ productQuery }: Props) => {
  const { data, error, isLoading } = useProducts(productQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
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
        <ProductCardContainer key={product.id}>
          <ProductCard product={product} />
        </ProductCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
