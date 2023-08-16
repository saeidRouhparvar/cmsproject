import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Revenue = () => {
  return (
    <Flex align={"center"}>
      <Box fontSize={"28px"} fontWeight={600}>$ 45,365.00</Box>
      <Flex fontSize={"12px"} fontWeight={500}>
        <Flex ms={"7px"} align={"center"}>
          <Box>
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 10L0.870835 0.249999L12.1292 0.25L6.5 10Z"
                fill="#FF4588"
              />
            </svg>
          </Box>
          <Box color={"#FF4588"}>$1,294</Box>
        </Flex>
        <Flex ms={"7px"} align={"center"}>
          <Box>
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.5 0L12.1292 9.75H0.870835L6.5 0Z" fill="#19C332" />
            </svg>
          </Box>
          <Box color={"#19C332"}>$1,294</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Revenue;
