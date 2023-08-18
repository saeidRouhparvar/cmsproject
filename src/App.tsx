import { Box } from "@chakra-ui/react";
import MainLeyout from "./layouts/MainLayout/MainLeyout";

function App() {
  // const router = useRoutes(Routes);

  return (
    <Box p={"1rem"} m={"30px auto"} maxW={"1440px"}>
      <MainLeyout />
    </Box>
  );
}

export default App;
