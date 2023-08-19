import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  BoxProps,
  Text,
  Box,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import MainInput from "../form/MainInput";

const productPlaceholder = [
  { id: 1, placholder: "Product Title" },
  { id: 1, placholder: "Product Price" },
  { id: 1, placholder: "Product Count" },
  { id: 1, placholder: "Product Image" },
  { id: 1, placholder: "Product Popularity" },
  { id: 1, placholder: "Product Sales" },
  { id: 1, placholder: "Product Colors" },
];

interface Interface extends BoxProps {
  ModalTitle?: string;
  ModalDescription?: string;
  children?: any;
  type?: any;
  onSubmit?: any;
  edit?: any;
  onClick?: () => void;
  deleteAction?: any;
  name?:any
  count?:any
  price?:any
  sale?:any
  color?:any
  popularity?:any
  sale?:any
  reset?: any;
}

const Modals = ({
  ModalTitle,
  ModalDescription,
  children,
  type,
  onSubmit,
  onClick,
  deleteAction,
  name,
  count,
  price,
  sale,
  color,
  popularity,
  ...reset
}: Interface) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box {...reset}>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent border={"3px solid black.300"} p={"20px"}>
          <ModalHeader fontSize={"28px"} fontWeight={600}>
            {ModalTitle}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontSize={"22px"}
              fontWeight={500}
              color={type === "delete" ? "#FF0303" : "#29CC97"}
            >
              {ModalDescription}
            </Text>
            {type === "edit" &&
              productPlaceholder.map((item: any) => (
                <MainInput mt={"30px"} title={item.placholder} />
              ))}
            {type === "detail" && (
              <Flex direction={"column"} gap={4}>
                <Flex gap={3} align={"center"} borderBottom={"2px solid gray"} pb={5}>
                  <Box fontSize={"22px"} fontWeight={500}>
                    Name :
                  </Box>
                  <Box>{name}</Box>
                </Flex>
                <Flex gap={3} align={"center"}  borderBottom={"2px solid gray"} pb={5}>
                  <Box fontSize={"22px"} fontWeight={500}>
                    Count :
                  </Box>
                  <Box>{count}</Box>
                </Flex>
                <Flex gap={3} align={"center"}  borderBottom={"2px solid gray"} pb={5}>
                  <Box fontSize={"22px"} fontWeight={500}>
                    Price :
                  </Box>
                  <Box>{price + "$"}</Box>
                </Flex>
                <Flex gap={3} align={"center"}  borderBottom={"2px solid gray"} pb={5}>
                  <Box fontSize={"22px"} fontWeight={500}>
                    Color :
                  </Box>
                  <Box>{color}</Box>
                </Flex>
                <Flex gap={3} align={"center"}  borderBottom={"2px solid gray"} pb={5}>
                  <Box fontSize={"22px"} fontWeight={500}>
                    Popularity :
                  </Box>
                  <Box>{popularity}</Box>
                </Flex>
                <Flex gap={3} align={"center"}  >
                  <Box fontSize={"22px"} fontWeight={500}>
                    Sale :
                  </Box>
                  <Box>{sale}</Box>
                </Flex>
              </Flex>
            )}
            <Box mt={"30px"}>
              <Button
                borderRadius={"10px"}
                bg={"#29CC97"}
                onClick={() => {
                  setIsOpen(false);
                  deleteAction();
                }}
              >
                {type === "edit" ? "Edit Product" : "OK"}
              </Button>
              <Button
                borderRadius={"10px"}
                bg={"#29CC97"}
                ms={"10px"}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box onClick={() => setIsOpen(true)}>{children}</Box>
    </Box>
  );
};
export default Modals;
