import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleCreate = () => {
    console.log(newProduct)
  }
  return (
    <Container
      maxW={"container.sm"}
      size={"1xl"}
      textAlign={"center"}
      mb={8}
    >
      <VStack spacing={8}>
        <Heading as={"h1"}>Create Product</Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.700")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              name="name"
              value={newProduct.name}
              placeholder="Product Name"
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              name="price"
              type="number"
              value={newProduct.price}
              placeholder="Price"
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              name="image"
              value={newProduct.image}
              placeholder="Image URL"
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button colorScheme="blue" w={'full'}
            onClick={()=> handleCreate()}
            >
                Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
