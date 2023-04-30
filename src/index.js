import React from "react";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App/>
    </ChakraProvider>
);