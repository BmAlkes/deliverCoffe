import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import CartContextProvide from "./Context/cartContext";
import ProductContextProvider from "./Context/productContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import "./i18n/index";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <ProductContextProvider>
          <CartContextProvide>
            <App />
          </CartContextProvide>
        </ProductContextProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
