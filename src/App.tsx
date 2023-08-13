import { useState } from "react";
import { Box } from "@chakra-ui/react";
import SideBarLayout from "./layouts/sidebar/SideBarLayout";
import MainBackground from "./components/mainBg/MainBackground";

function App() {
  return (
    <>
      <MainBackground>
        <SideBarLayout />
      </MainBackground>
    </>
  );
}

export default App;
