import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  useToast,
} from "@chakra-ui/react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useProductStore } from "../store/product";

export default function ProductCard({ product }) {
  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();

//handleupdateproduct on progress
  const handeUpdateProduct = async(id) => {
    const { success, message } = await updateProduct(id);

    if (success === false) {
        toast({
          title: "Error",
          description: message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Success!",
          description: "Product Successfully Updated!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
  } 

  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);

    if (success === false) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success!",
        description: message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Card
      maxW="sm"
      marginX={"auto"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      transition={"all 0.3s"}
    >
      <CardBody>
        <Image src={product.image} alt={product.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.name}</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            minima. Voluptate ad a fuga odio vero deleniti et beatae expedita!
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ${product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue"
          onClick={()=> handleUpdateProduct(product._id)}
          >
            Edit <CiEdit />
          </Button>
          <Button
            variant="ghost"
            colorScheme="red"
            onClick={() => handleDeleteProduct(product._id)}
          >
            Delete <CiTrash />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
