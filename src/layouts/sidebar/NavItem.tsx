import { Box, BoxProps, Flex } from "@chakra-ui/react";
import React from "react";
import { Routes } from "../../routes/routes";

interface Interface extends BoxProps {
  reset?: any;
  path?: any;
  children?: any;
  ShowInNav?: any;
}

const NavItem = ({ children }: Interface) => {
  return (
    <Flex
      h={"100vh"}
      w={"192px"}
      bg={"#FFFFFF"}
      borderLeftRadius={"25px"}
      direction={"column"}
    >
      <Box>{children}</Box>
    </Flex>
  );
};

export default NavItem;
