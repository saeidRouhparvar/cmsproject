import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface Interface extends BoxProps {
  children?: any;
  reset?: any;
}

const MainBackground = ({ children, ...reset }: Interface) => {
  return (
  <Box
  bg={"#F8F7FC"}
  width={"1000px"}
  borderRadius={"25px"}
  m={"76px auto"}
  h={"100vh"}
  >
    {children}
    </Box>
  );
};

export default MainBackground;
