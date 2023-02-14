import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import DefaultLayout from "./layout";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
