import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";


import {dataFromServer} from "./dataFromServer";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (itemToAdd: Product | CartItem) => {
    const itemExist = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if (itemExist) {
      setCartItems((currentItems) => (
              currentItems.map(cartItem => (
                      cartItem.id === itemToAdd.id
                          ? {...cartItem, quantity: cartItem.quantity + 1}
                          : cartItem
                  )
              )
          )
      )
    } else {
      setCartItems([...cartItems, {...itemToAdd, quantity: 1}])
    }
  }

  const deleteFromCart = (itemToDelete: CartItem) => {
    const filteredItems = cartItems.filter((item) => item.id !== itemToDelete.id)

    setCartItems(filteredItems)
  }

  const decreaseAmount = (itemToDecrease: CartItem) => {
    const item = cartItems.find(cartItem => cartItem.id === itemToDecrease.id);

    if (item && item.quantity === 1) {
      deleteFromCart(item)
    }

    if (item && item.quantity > 1) {
      setCartItems((currentItems) => (
              currentItems.map(cartItem => (
                      cartItem.id === itemToDecrease.id
                          ? {...cartItem, quantity: cartItem.quantity - 1}
                          : cartItem
                  )
              )
          )
      )
    }
  }

  return (
      <div className="App">
        <Header cartItems={cartItems}/>
        <main className="App__main">
          <Products
              products={dataFromServer.products}
              addItem={addToCart}
          />
          <Cart
              cartItems={cartItems}
              addItem={addToCart}
              deleteItem={deleteFromCart}
              decreaseAmount={decreaseAmount}
          />
        </main>
      </div>
  );
}

export default App;
