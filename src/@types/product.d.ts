export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  type: [];
  phrase: string;
}

export type CartProduct = {
  productId: Product["id"];
  quantity: number;
};
