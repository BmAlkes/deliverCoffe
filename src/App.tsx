import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout";
import { Checkout } from "./Pages/Checkout";
import { Home } from "./Pages/Home";
import { SucesssPage } from "./Pages/SucessPage";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "./store/store";
import { useContext, useEffect, useState } from "react";
import { fetchProducts } from "./store/products/product-slices";
import Login from "./Pages/Auth/login/Login";
import Register from "./Pages/Auth/register/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./script/firebase.config";
import { UserContext } from "./Context/userContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { userConverter } from "./converter/firestore.converter";

function App() {
  const { currentUser, isAutheticated, logoutUser, loginUser } =
    useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSigninOut = isAutheticated && !user;
    if (isSigninOut) {
      logoutUser();
    }

    const isSignIn = !isAutheticated && user;
    if (isSignIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, "users").withConverter(userConverter),
          where("id", "==", user.uid)
        )
      );
      const userFromFireStore = querySnapshot.docs[0]?.data();
      loginUser(userFromFireStore);
    }
  });
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
