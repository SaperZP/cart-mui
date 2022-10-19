import React, {FC} from 'react';
import './Cart.scss';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import {Button, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import Product from "../Product/Product";

interface CartProps {
  cartItems: CartItem[];
  addItem: (itemToAdd: Product) => void;
  deleteItem: (itemToAdd: CartItem) => void;
  decreaseAmount: (itemToAdd: CartItem) => void;
}

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Cart: FC<CartProps> = (
    {
      cartItems,
      addItem,
      deleteItem,
      decreaseAmount,
    }) => {
  const itemsPrice = cartItems.reduce((accumulator, b) => accumulator + (b.quantity * b.price), 0);
  const taxPrice = itemsPrice * 5 / 100;
  const shippingPrise = itemsPrice >= 1000 ? 0 : 50;
  const totalPrise = itemsPrice + taxPrice + shippingPrise;

  console.log(cartItems)

  return (
      <div className="Cart">
        <Stack
            divider={<Divider orientation="horizontal" flexItem/>}
            spacing={5}
        >
          <Item>
            <Stack spacing={2}>
              {cartItems.length > 0
                  ? (cartItems.map((cartItem) => (
                      <Item key={cartItem.id}>
                        <Typography>
                          {cartItem.name}
                        </Typography>

                        <Typography>
                          {cartItem.quantity}
                        </Typography>

                        <Button onClick={() => addItem(cartItem)}>
                          +
                        </Button>

                        <Button onClick={() => decreaseAmount(cartItem)}>
                          -
                        </Button>

                        <Button onClick={() => deleteItem(cartItem)}>
                          x
                        </Button>
                      </Item>
                  )))
                  : (
                      <Item>Select some item</Item>
                  )
              }
            </Stack>
          </Item>
          <Item>
            <Stack spacing={2}>
              <Item>{'items price' + itemsPrice}</Item>
              <Item>{'tax price' + taxPrice}</Item>
              <Item>{'shipping price' + shippingPrise}</Item>
              <Item>{'total price' + totalPrise}</Item>
            </Stack>
          </Item>
        </Stack>
      </div>
  );
}

export default Cart;
