import {
  Box,
  Table,
  Thead,
  Tbody,
  Flex,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import Modals from "../../components/modal/Modal";

const productData = [
  { id: 1, name: "Shoes", price: "26 ", count: "56", img: "" },
  { id: 2, name: "Bag", price: "43 ", count: "78", img: "" },
  { id: 3, name: "Pants", price: "12 ", count: "42", img: "" },
  { id: 4, name: "Shirt", price: "18 ", count: "89", img: "" },
  { id: 5, name: "Sucks", price: "6", count: "76", img: "" },
  { id: 6, name: "Polo Shirt", price: "32", count: "90", img: "" },
  { id: 7, name: "Short", price: "4", count: "17", img: "" },
  { id: 8, name: "Jean", price: "8", count: "88", img: "" },
  { id: 9, name: "Jacket", price: "89", count: "45", img: "" },
];

const ProductList = () => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Count</Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {productData.map((ptData: any) => (
              <Tr>
                <Td>{ptData.img}</Td>
                <Td>{ptData.name}</Td>
                <Td>{ptData.price + "$"}</Td>
                <Td>{ptData.count}</Td>
                <Td>
                  <Modals
                  ModalTitle="Details"
                  >
                    <Button
                      fontSize={"10px"}
                      mt={"18px"}
                      h={"20px"}
                      bg={"#29CC97"}
                    >
                      Details
                    </Button>
                  </Modals>
                </Td>
                <Td>
                  <Modals
                    ModalTitle="Edit"
                    ModalDescription="Please Enter New Product"
                    type={"edit"}
                  >
                    <Button
                      fontSize={"10px"}
                      mt={"18px"}
                      h={"20px"}
                      bg={"#29CC97"}
                    >
                      Edit
                    </Button>
                  </Modals>
                </Td>

                <Td>
                  <Modals
                    type={"delete"}
                    ModalTitle="Delete"
                    ModalDescription="Do you want to delete?"
                  >
                    <Button
                      fontSize={"10px"}
                      mt={"18px"}
                      h={"20px"}
                      bg={"#29CC97"}
                    >
                      Delete
                    </Button>
                  </Modals>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductList;
