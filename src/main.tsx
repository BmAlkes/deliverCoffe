import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import CartContextProvide from "./Context/cartContext";
import ProductContextProvider from "./Context/productContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import "./i18n/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ProductContextProvider>
        <CartContextProvide>
          <App />
        </CartContextProvide>
      </ProductContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
