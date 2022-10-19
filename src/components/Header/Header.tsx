import React, { FC } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface Header {
  cartItems: CartItem[];
}

const Header: FC<Header> = ({cartItems}) => {

  return (
      <AppBar position="static">
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
          <Typography
              variant="h6"
              noWrap
              component="div"
          >
            MUI
          </Typography>
          <Box>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={cartItems.length} color="error">
                <AddShoppingCartIcon/>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Header;
