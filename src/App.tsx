import { Box, Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CartGrid from "./components/CartGrid";
import SortSelector from "./components/SortSelector";
import { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import bullseye from './assets/bulls-eye.webp';


export interface ProductQuery {
  id: number;
  title: string;
  sortOrder: string;
  searchText: string;
  itemonbasket: string;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>({} as ProductQuery);

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {
      <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setProductQuery({ ...productQuery, searchText })} />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={2}>
        <Image src={bullseye} />
        <Heading as='h1' marginY={5} fontSize='6xl' color='pink'>Products on deal only at E-Commerce.com</Heading>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <li key={productQuery.id}>{productQuery.title}</li>
            </Box>
            <SortSelector sortOrder={productQuery.sortOrder} onSelectSortOrder={(sortOrder) => setProductQuery({ ...productQuery, sortOrder })} />
          </Flex>
        </Box>
        <ProductGrid productQuery={productQuery} />
      </GridItem>
    </Grid>
    } />


    <Route path='/cart' element = {
      <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setProductQuery({ ...productQuery, searchText })} />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <Heading as='h1' marginY={5} fontSize='4xl'>Your Shopping Cart</Heading>
        </Box>
        <CartGrid productQuery={productQuery} />
      </GridItem>
    </Grid>
    } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
