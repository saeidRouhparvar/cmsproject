import { Box, BoxProps } from "@chakra-ui/react";

interface Interface extends BoxProps {
  reset?: any;
  message?: any;
}

const EmptyError = ({ message, ...reset }: Interface) => {
  return (
    <Box
      mt={"50px"}
      w={"full"}
      p={"30px"}
      fontSize={"28px"}
      fontWeight={600}
      bg={"red.300"}
      textAlign={"center"}
      borderRadius={"15px"}
      border={"2px solid red"}
      {...reset}
    >
      {message}
    </Box>
  );
};

export default EmptyError;
