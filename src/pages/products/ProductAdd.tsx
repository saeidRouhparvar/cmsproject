import { Box, BoxProps, Input } from "@chakra-ui/react";
import React from "react";

interface Interface extends BoxProps {
  reset?: any;
  title?: string;
}

const ProductAdd = ({ title, ...reset }: Interface) => {
  return (
    <Input
      bg={"#FFF"}
      boxShadow={"box-shadow: 0px 2px 10px 0px rgba(175, 137, 255, 0.15)"}
      borderRadius={"15px"}
      p={"10px"}
      placeholder={title}
      _focusVisible={{border:0}}
      {...reset}
    />
    
  );
};

export default ProductAdd;
