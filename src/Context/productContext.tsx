import { createContext, useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../script/firebase.config";

interface Products {
  coffees: [];
  id: string;
  name: [];
  imageUrl: string;
  price: number;
  phrase: string;
}
interface IProductContext {
  fetchProducts: () => Promise<void>;
  listProduct: Products[];
}

interface ProductContextProps {
  children: React.ReactNode;
}
export const ProductContext = createContext<IProductContext>({
  listProduct: [],
  fetchProducts: () => Promise.resolve(),
});

const ProductContextProvider: React.FC<ProductContextProps> = ({
  children,
}) => {
  const [listProduct, setProductList] = useState<Products[]>([]);
  const fetchProducts = async () => {
    try {
      const productsFromFirestore: Products[] = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc: any) => {
        productsFromFirestore.push(doc.data());
      });
      setProductList(productsFromFirestore);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ listProduct, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
