import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  VStack,
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

export default function CreatePage() {
  const toast = useToast();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  // const [productCreated, setproductCreated] = useState(false);

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description:"Please provide the necessary fields!",
        status: "error",
        duration: 8000,
        isClosable: true
      })
    }else {
      setNewProduct({
        name: "",
        price: "",
        image: "",
      });
      toast({
        title: 'Success!',
        description: "The Product is created and saved successfully!",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    console.log("Success:", success);
    console.log("Message:", message);
  };
  return (
    <Container maxW={"container.sm"} size={"1xl"} textAlign={"center"} mb={8}>
      <VStack spacing={8}>
        <Heading as={"h1"}>Create New Product</Heading>

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

              <Button
                colorScheme="blue"
                type="submit"
                w={"full"}
                onClick={() => handleAddProduct()}
              >
                Add Product
              </Button>
            </VStack>
          </Box>
       
      </VStack>
    </Container>
  );
}
