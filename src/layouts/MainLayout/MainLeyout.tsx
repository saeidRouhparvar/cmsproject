import {
  Box,
  Grid,
  GridItem,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Button,
} from "@chakra-ui/react";
import SideBarLayout from "../sidebar/SideBarLayout";
import HeaderLayout from "../../components/header/HeaderLayout";
import Products from "../../pages/products/Products";
import { useState } from "react";

const MainLeyout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <Flex>
        <Flex flex={.25} display={{ base: "none", md: "block" }}>
          <SideBarLayout />
        </Flex>
        <Box display={{ base: "block", md: "none" }}>
          <Drawer
            size="full"
            autoFocus={false}
            placement="left"
            onClose={onClose}
            isOpen={isOpen}
          >
            <DrawerContent mt={"20px"}>
              <DrawerCloseButton />
              <SideBarLayout />
            </DrawerContent>
          </Drawer>
        </Box>

      <Flex
        flex={1}
        direction={"column"}
        bg={"#F8F7FC"}
        p={"15px"}
        borderRadius={{ md: "0px 25px 25px 0px ", sm: " 25px  " }}
      >
        <Flex
          onClick={onOpen}
          justify={"left"}
          display={{ base: "block", md: "none" }}
        >
          <Box>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4H21V6H3V4ZM3 19H21V21H3V19ZM3 14H21V16H3V14ZM3 9H21V11H3V9Z"
                fill="#666666"
              />
            </svg>
          </Box>
        </Flex>
        <HeaderLayout />
        <Products />
      </Flex>
    </Flex>
  );
};

export default MainLeyout;
