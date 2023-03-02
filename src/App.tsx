import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout";
import { Checkout } from "./Pages/checkout/CheckOut";
import { Home } from "./Pages/home/Home";
import { SucesssPage } from "./Pages/sucessPage/SucessPage";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "./store/store";
import { useEffect } from "react";
import { fetchProducts } from "./store/products/product-slices";
import Login from "./Pages/Auth/login/Login";
import Register from "./Pages/Auth/register/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./script/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { userConverter } from "./converter/firestore.converter";
import { loginUser, logoutUser } from "./store/user/user.actions";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useAppDispatch();

  const isAutheticated = useAppSelector(
    (state) => state.userReducer?.isAuthenticated
  );

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigninOut = isAutheticated && !user;
      if (isSigninOut) {
        dispatch(logoutUser());
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
        dispatch(loginUser(userFromFireStore));
      }
    });
  }, [dispatch]);

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
