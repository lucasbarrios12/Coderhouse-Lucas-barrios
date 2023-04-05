import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import img from "./producto.png"

const CardWidget = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
} 

export default CardWidget
