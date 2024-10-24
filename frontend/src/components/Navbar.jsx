import React from "react";
import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Button, useColorMode } from "@chakra-ui/react";
import {CiSun} from 'react-icons/ci'
import {FaMoon, FaPlus} from 'react-icons/fa'
import { Link } from "react-router-dom";


export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode();
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
        <Link to={'/'}>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          Product Store
        </Text>
        </Link>
        <HStack>
          <Link to={'/createPage'}>
          <Button>
            <FaPlus />
          </Button></Link>
          
        <Button onClick={toggleColorMode}>
        {colorMode === 'light'? <CiSun />: <FaMoon  />}
      </Button>
        </HStack>
        

      </Flex>
    </Container>
  );
}
