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
}

const NavItem = ({ children, ShowInNav, parentPath, path,child }: Interface) => {
  const navigat = useNavigate();
  const [Show, SetShow] = useState(false)
  const [active,setActive] = useState(!active)

  if (!ShowInNav) {
    return null;
  }

  return (
    <Flex
      h={"100%"}
      w={"192px"}
      bg={
        !active ? "#FFFFFF" : "#000000"
      }
      borderLeftRadius={"25px"}
      direction={"column"}
      onClick={() => {
        if (child && child.length !== 0) {
            SetShow(!Show)
            
        } else {
            if (parentPath) {
                navigat((parentPath + path).replaceAll("/*", ""))
            } else {
                navigat(path)
            }
            // onClose()
        }

    }}
    >
      <Box>{children}</Box>
    </Flex>
  );
};

export default NavItem;
