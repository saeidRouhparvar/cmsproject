import { Box, BoxProps } from "@chakra-ui/react";

interface Interface extends BoxProps {
  reset?: any;
  message?: string;
}

const emptyError = ({ message, ...reset }: Interface) => {
  return (
    <Box bg={"red"} {...reset}>
      {message}
    </Box>
  );
};

export default emptyError;
