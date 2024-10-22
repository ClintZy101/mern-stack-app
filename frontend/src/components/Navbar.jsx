import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Container maxW={"1400px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Product Store
        </Text>
      </Flex>
    </Container>
  );
}
