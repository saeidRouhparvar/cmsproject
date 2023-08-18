import { Box, BoxProps, Flex, background } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Interface extends BoxProps {
  reset?: any;
  path?: any;
  children?: any;
  ShowInNav?: any;
  parentPath?: any;
  child?: any;
  Icon?: any;
  index?: any;
  isActive?: any;
}

const NavItem = ({
  children,
  ShowInNav,
  parentPath,
  path,
  child,
  Icon,
  isActive,
}: Interface) => {
  const navigat = useNavigate();
  const [Show, SetShow] = useState(false);

  if (!ShowInNav) {
    return null;
  }

  return (
    <Flex
    align={"right"}
      p={"20px"}
      borderLeftRadius={"5px"}
      direction={"column"}
      cursor={"pointer"}
      onClick={() => {
        if (child && child.length !== 0) {
          SetShow(!Show);
        } else {
          if (parentPath) {
            navigat((parentPath + path).replaceAll("/*", ""));
          } else {
            navigat(path);
          }
          // onClose()
        }
      }}
    >
      <Flex
        gap={"21px"}
        fontWeight={isActive ? 700 : 500}
        align={"center"}
        color={isActive ? "#2A4178" : "#A7B7DD"}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default NavItem;
