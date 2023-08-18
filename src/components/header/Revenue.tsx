import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../assets/Svg";

const Revenue = () => {
  return (
    <Flex align={"center"}>
      <Box fontSize={"28px"} fontWeight={600}>
        $
      </Box>
      <Box fontSize={"28px"} fontWeight={600}>
        45,365.00
      </Box>
      <Flex fontSize={"12px"} fontWeight={500}>
        <Flex ms={"7px"} align={"center"}>
          <Box>{ArrowDownIcon}</Box>
          <Box color={"#FF4588"}>$1,294</Box>
        </Flex>
        <Flex ms={"7px"} align={"center"}>
          <Box>{ArrowUpIcon}</Box>
          <Box color={"#19C332"}>$1,294</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Revenue;
