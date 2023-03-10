import {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

interface CartProduct extends Product {
  quantity: number;
}

interface InformationClientProps {
  name: string;
  street: string;
  number: number;
  complement: string;
  city: string;
  phone: number;
}

interface ICartContext {
  products: CartProduct[];
  addProductToCart: (product: Product, quantity: number) => void;
  removeProductFromCart: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
  productsTotalPrice: Number;
  deliver: number;
  clientInformation?: InformationClientProps;
  paymentMethod: (method: string) => void;
  dataClient: (data: InformationClientProps) => void;
  paymentMethodClient: string;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {},
  productsTotalPrice: 0,
  deliver: 10,
  clientInformation: {
    city: "",
    complement: "",
    name: "",
    number: 0,
    phone: 0,
    street: "",
  },
  paymentMethod: () => {},
  dataClient: () => {},
  paymentMethodClient: "",
});

const CartContextProvide: React.FC<ChildrenProps> = ({ children }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [clientInformation, setClientInformation] =
    useState<InformationClientProps>();
  const [paymentMethodClient, setPaymentMethodClient] = useState("");
  const deliver = 10;
  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem("cartProducts")!
    );

    setProducts(productsFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(products));
  }, [products]);

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity + deliver;
    }, 0);
  }, [products]);

  const addProductToCart = (product: Product, quantity: number) => {
    //verificar se o produto ja esta no carrinho

    const productAlreadyInCart = products.some(
      (item) => item.id === product.id
    );

    // se estiver aumentar quantidade
    if (productAlreadyInCart) {
      return setProducts((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
    // se nao adiciona-lo
    setProducts((prevState) => [...prevState, { ...product, quantity }]);
  };

  const removeProductFromCart = (ProductId: string) => {
    setProducts((products) =>
      products.filter((product) => product.id !== ProductId)
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  const decreaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const dataClient = (data: InformationClientProps) => {
    const inform = {
      name: data.name,
      street: data.street,
      number: data.number,
      complement: data.complement,
      city: data.city,
      phone: data.phone,
    };
    setClientInformation(inform);
  };

  const paymentMethod = (type: string) => {
    return setPaymentMethodClient(type);
  };

  return (
    <CartContext.Provider
      value={{
        deliver,
        products,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        productsTotalPrice,
        dataClient,
        clientInformation,
        paymentMethod,
        paymentMethodClient,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvide;

export const useCartContext = () => useContext<ICartContext>(CartContext);
