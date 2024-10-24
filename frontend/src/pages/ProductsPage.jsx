import { Container, VStack, Text, SimpleGrid, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  console.log("Product Data Array:", products);

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack marginBottom={"20px"}>
        <Text
          fontSize={30}
          fontWeight={"bold"}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Current Store Products
        </Text>
      </VStack>

      {/* {products.length === 0 && (
        <VStack spacing={8}>
          <Text fontWeight={"bold"} textAlign={"center"} fontSize="xl">
            No Products Found <br />
            <Link to={"/createpage"}>
              <Text
                as={"span"}
                _hover={{ textDecoration: "underline" }}
                color={"blue.500"}
              >
                {" "}
                Create a Product
              </Text>
            </Link>
          </Text>
        </VStack>
      )} */}
      <SimpleGrid
        minChildWidth="330px"
        spacing="40px"
        justifyContent={"center"}
      >
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product._id}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
