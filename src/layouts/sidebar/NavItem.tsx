import { Box, BoxProps, Flex } from '@chakra-ui/react'
import React from 'react'

interface Interface extends BoxProps {
    reset?:any
    path?:any
    children?:any
    ShowInNav:?any
}

function NavItem({path, children, ShowInNav}:Interface) {
  return (
    <Flex h={"100vh"} w={"192px"} bg={"#FFFFFF"} borderLeftRadius={"25px"}>
<Box>
    {children}
</Box>
    </Flex>
  )
}

export default NavItem