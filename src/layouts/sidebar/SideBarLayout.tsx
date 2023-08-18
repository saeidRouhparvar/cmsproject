import { Flex, Box } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { Routes } from "../../routes/Routes";
import { useState } from "react";
import { Scrollbars } from "rc-scrollbars";
import { OnOfIcon } from "../../assets/Svg";

const SideBarLayout = () => {
  const sideList: any = Routes.filter((item: any) => item.path === "/*")[0]
    .child;
  const [active, setActive] = useState(false);

  return (
    // <Scrollbars style={{width: "100%", height: "100vh"}} >
    <Box h={"2000px"} bg={"F8FAFF"}
    >
      <Flex
        direction={"column"}
        gap={{ base: "25px", md: "52px" }}
        borderLeftRadius={"25px"}
      >
        <Flex align={"center"} justify={"center"} mt={"20px"}>
          {OnOfIcon}
        </Flex>
        {sideList.map((sideListItem: any, index: any) => (
          <Box onClick={() => setActive(index)}>
            <NavItem
              isActive={index == active}
              display={"flex"}
              {...sideListItem}
              key={sideListItem.name}
            >
              <Box>{sideListItem.icon}</Box>
              <Box>{sideListItem.name}</Box>
            </NavItem>
          </Box>
        ))}
      </Flex>
    </Box>
    // </Scrollbars>
  );
};

export default SideBarLayout;
