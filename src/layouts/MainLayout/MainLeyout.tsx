import { Box, Flex } from "@chakra-ui/react";
import SideBarLayout from "../sidebar/SideBarLayout";
import HeaderLayout from "../../components/header/HeaderLayout";
import Products from "../../pages/products/Products";

const MainLeyout = () => {
  return (
    <Box>
      <Flex>
        <Box bg={"#FFF"}>
          <SideBarLayout />
        </Box>
        <Box px={"20px"}>
          <HeaderLayout />
          <Products />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainLeyout;
