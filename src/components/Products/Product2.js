import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from '@mui/material';



import ProductImage from '../../images/product2.jpg';

export default function Product2() {
  const navigate  = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Dark Black Loofer"
      />
      <CardMedia
        component="img"
        height="194"
        image={ProductImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party Loofer and a Mr. Perfect choice
          eye cathing color and breath taking comfort, name of Quality,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant = 'contained' endIcon={<NavigateNextIcon/>} onClick={()=>{navigate('/products/2')}}>Details</Button>
      </CardActions>
    </Card>
  );
}
