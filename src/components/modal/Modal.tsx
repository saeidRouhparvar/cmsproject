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

interface Interface extends BoxProps {
  ModalTitle?: string;
  ModalDescription?: string;
  children?: any;
  type?: any;
  reset?: any;
}

const Modals = ({
  ModalTitle,
  ModalDescription,
  children,
  type,
  ...reset
}: Interface) => {
  //   const { onClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box {...reset}>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"28px"} fontWeight={600}>{ModalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize={"22px"} fontWeight={500} color={type === "delete" ? "#29CC97" : "#FF0303"}>
              {ModalDescription}
            </Text>
            <Box mt={"30px"}>
              <Button
                borderRadius={"10px"}
                bg={"#29CC97"}
                onClick={() => setIsOpen(false)}
              >
                OK
              </Button>
              <Button borderRadius={"10px"} bg={"#29CC97"} ms={"10px"}>
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
