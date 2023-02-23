import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import DefaultLayout from "./layout";
import { Checkout } from "./Pages/Checkout";
import { Home } from "./Pages/Home";
import { SucesssPage } from "./Pages/SucessPage";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/sucess" element={<SucesssPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
