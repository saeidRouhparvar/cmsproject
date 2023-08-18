import { Box, Button, Grid } from "@chakra-ui/react";
import ProductList from "./productList";
import MainInput from "../../components/form/MainInput";

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
    <Box mt={"40px"} ps={{ base: "", md: "25px" }} w={"full"}>
      <Box mb={"15px"} fontSize={"28px"} fontWeight={600}>
        Add New Product
      </Box>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        gap={4}
      >
        {ProductAddData.map((addData: any) => (
          <MainInput title={addData.title} />
        ))}
        <Button borderRadius={"15px"} bg={"#29CC97"}>
          Register Product
        </Button>
      </Grid>
      <Box mt={"60px"}>
        <ProductList />
      </Box>
    </Box>
  );
}

export default Products;
