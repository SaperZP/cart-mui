import React, {FC} from 'react';
import './Products.scss';
import Product from "../Product/Product";


interface ProductsProps {
  products: Product[];
  addItem: (itemToAdd: Product) => void;
}

const Products: FC<ProductsProps> = ({products, addItem,}) => (
    <div className="Products">
      <div className="Products__container">
        {products.map(product => (
            <Product
                key={product.id}
                product={product}
                addItem={addItem}
            />
        ))}
      </div>
    </div>
);

export default Products;
