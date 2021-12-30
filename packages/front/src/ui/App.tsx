import str from "@pet-shop/core";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Router from "./routes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <div className="App">hello world {str}</div>
        {/* <Router /> */}
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
