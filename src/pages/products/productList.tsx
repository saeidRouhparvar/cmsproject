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
import { useEffect, useState } from "react";
import Modals from "../../components/modal/Modal";
import EmptyError from "../../components/error/EmptyError";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [productID, setProductID] = useState(null);

  const getAllProducts = () => {
    fetch("http://localhost:3000/api/products/")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteHandler = () => {
    fetch(`http://localhost:3000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        getAllProducts();
        console.log(result);
      });
  };

  return (
    <Box>
      <TableContainer>
        {allProducts.length ? (
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
              {/* {productData.map((ptData: any) => ( */}

              {allProducts.map((product: any) => (
                <Tr>
                  <Td></Td>
                  <Td>{product.title}</Td>
                  <Td>{product.count}</Td>
                  <Td>{product.price + "$"}</Td>
                  <Td>{product.sale}</Td>
                  <Td>
                    <Modals ModalTitle="Details">
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
                      deleteAction={deleteHandler}
                    >
                      <Button
                        fontSize={"10px"}
                        mt={"18px"}
                        h={"20px"}
                        bg={"#29CC97"}
                        onClick={() => setProductID(product.id)}
                      >
                        Delete
                      </Button>
                    </Modals>
                  </Td>
                </Tr>
              ))}

              {/* ))} */}
            </Tbody>
          </Table>
        ) : (
          <EmptyError message={"No Products Found"} />
        )}
      </TableContainer>
    </Box>
  );
};

export default ProductList;
