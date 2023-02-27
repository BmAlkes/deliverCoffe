import { collection, getDocs } from "firebase/firestore";
import { Product } from "../@types/product";
import { db } from "../script/firebase.config";

export const fetchProducts = async () => {
  const productsFromFirestore: Product[] = [];
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc: any) => {
    productsFromFirestore.push(doc.data());
  });
  return productsFromFirestore;
};
