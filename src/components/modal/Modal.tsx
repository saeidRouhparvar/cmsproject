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
} from "@chakra-ui/react";
import { useState } from "react";
import MainInput from "../form/MainInput";

const productPlaceholder = [
  { id: 1, placholder: "Product Name" },
  { id: 1, placholder: "Product Count" },
  { id: 1, placholder: "Product Price" },
  { id: 1, placholder: "Product Image" },
];

interface Interface extends BoxProps {
  ModalTitle?: string;
  ModalDescription?: string;
  children?: any;
  type?: any;
  onSubmit?: any;
  edit?: any;
  reset?: any;
}

const Modals = ({
  ModalTitle,
  ModalDescription,
  children,
  type,
  onSubmit,
  ...reset
}: Interface) => {
  //   const { onClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box {...reset}>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
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
            <Box mt={"30px"}>
              <Button
                borderRadius={"10px"}
                bg={"#29CC97"}
                onClick={() => setIsOpen(false)}
              >
                {type === "edit" ?
                  "Edit Product":"OK"
                }
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
