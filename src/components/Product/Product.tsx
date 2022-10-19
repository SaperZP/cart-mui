import React, {FC} from 'react';
import './Product.scss';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface ProductProps {
  product: Product;
  addItem: (itemToAdd: Product) => void;
}

const Product: FC<ProductProps> = (
    {
      product,
      addItem,
    }
) => (
    <Card sx={{width: 200}}>
      <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {product.name}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
            aria-label="add to favorites"
            onClick={() => addItem(product)}
        >
          <AddShoppingCartIcon/>
        </IconButton>
      </CardActions>
    </Card>
);

export default Product;

