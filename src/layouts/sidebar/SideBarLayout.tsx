import { Box } from "@chakra-ui/react";
import React from "react";
// import {Scrollbars} from "../../../node_modules/scr";
import NavItem from "./NavItem";
import MainBackground from "../../components/mainBg/MainBackground";
import { Routes } from "../../routes/routes";

const SideBarLayout = () => {
  const NavList = Routes.filter((item) => item.path === "/*")[0];
  return (
    <Box>
    
      {/* {NavList.map((item:any) => (
        <NavItem {...item}>
            {item.name}
        </NavItem>
      ))} */}
 
    </Box>
  );
};

export default SideBarLayout;
