import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ProductAdd from "./ProductAdd";

const ProductAddData = [
  { id: 1, title: "Enter Product Name" },
  { id: 2, title: "Enter Product Count" },
  { id: 3, title: "Enter Product Popularity" },
  { id: 4, title: "Enter Product Color Count" },
  { id: 5, title: "Enter Product Price" },
  { id: 6, title: "Enter Product Picture" },
  { id: 7, title: "Enter Product Sale Rate" },
];

function Products() {
  return (
    <Box w={"100%"} mt={"40px"} ps={"25px"}>
      <Box mb={"15px"} fontSize={"28px"} fontWeight={600}>
        Add New Product
      </Box>
      <Grid templateColumns={"repeat(2,1fr)"} gap={4}>
        {ProductAddData.map((addData: any) => (
          <ProductAdd title={addData.title} />
        ))}
        <Button bg={"#29CC97"}>Register Product</Button>
      </Grid>
    </Box>
  );
}

export default Products;
