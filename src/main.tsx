import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import "./i18n/index";
import { store } from "./store";
import { Provider } from "react-redux";
import CartContextProvide from "./Context/cartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <CartContextProvide>
          <App />
        </CartContextProvide>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
