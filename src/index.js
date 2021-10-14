import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";

//dev-lby8zvb2.us.auth0.com
//0fGOG1NW8OZ2GRE5z8lKd7255Ul3IYeM

ReactDOM.render(
  <ChakraProvider>
    <Auth0Provider
      domain="dev-lby8zvb2.us.auth0.com"
      clientId="0fGOG1NW8OZ2GRE5z8lKd7255Ul3IYeM"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
