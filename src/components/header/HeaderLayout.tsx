import { Avatar, Box, Flex } from "@chakra-ui/react";
import Revenue from "./Revenue";
import Search from "../form/Search";
import { BallIcon, BlueCommentIcon } from "../../assets/Svg";

const HeaderLayout = () => {
  return (
    <Box mt={"29px"} ms={{ base: "0", md: "36px" }} pe={"10px"}>
      <Box mb={2}>Total Revenue</Box>
      <Box
        gap={3}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        w={"full"}
        alignItems={{ base: "", md: "center" }}
        justifyContent={"space-between"}
      >
        <Revenue />
        <Box ms={{ base: "0", md: "30px" }}>
          <Search />
        </Box>
        <Flex justify={"space-between"} align={"center"}>
          <Box ms={{ base: "", md: "42px" }} px={{ base: "20px", md: "0" }}>
          {BlueCommentIcon}
          </Box>
          <Box ms={"51px"}>
          {BallIcon}
          </Box>
          <Avatar ms={"42px"} />
        </Flex>
      </Box>
    </Box>
  );
};

export default HeaderLayout;
