import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
} from "firebase/firestore";
import { Product } from "../@types/product";
import { db } from "../script/firebase.config";

export const fetchProducts = async () => {
  return await fetchDataFromFirebase<Product>("products");
  // const productsFromFirestore: Product[] = [];
  // const querySnapshot = await getDocs(collection(db, "products"));
  // querySnapshot.forEach((doc: any) => {
  //   productsFromFirestore.push(doc.data());
  // });
  // return productsFromFirestore;
};

const fetchDataFromFirebase = async <T>(path: string): Promise<T[]> => {
  const listFromFirebase: T[] = [];
  const querySnapshot = await getDocs(collection(db, path));
  querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
    listFromFirebase.push(doc.data() as T);
  });
  return listFromFirebase;
};
