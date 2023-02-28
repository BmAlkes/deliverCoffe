import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import DefaultLayout from "./layout";
import { Checkout } from "./Pages/Checkout";
import { Home } from "./Pages/Home";
import { SucesssPage } from "./Pages/SucessPage";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { fetchProducts } from "./store/products/product-slices";
import Login from "./Pages/Auth/login/Login";
import { Register } from "./Pages/Auth/register/Register";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/sucess" element={<SucesssPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
