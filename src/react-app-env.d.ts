/// <reference types="react-scripts" />

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number
}

interface Data {
  products: Product[]
}