import { Grid, Paper, Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';

import ProductImage1 from '../images/product1.jpg';
import ProductImage2 from '../images/product2.jpg';
import ProductImage3 from '../images/product3.jpg';

import './styling/ProductsDetails.css'

export default function ProductsDetails() {
    const inventory = {
        1: {
            text: "This impressive paella is a perfect party Loofer and a Mr. Perfect choice eye cathing color and breath taking comfort, name of Quality, if you like.",
            img: ProductImage1,
        },
        2: {
            text: "This impressive paella is a perfect party Loofer and a Mr. Perfect choice eye cathing color and breath taking comfort, name of Quality, if you like.",
            img: ProductImage2,
        },
        3: {
            text: "This impressive paella is a perfect party Loofer and a Mr. Perfect choice eye cathing color and breath taking comfort, name of Quality, if you like.",
            img: ProductImage3,
        }
    }
    const { productId } = useParams();
    const id = inventory[productId];
    const { text, img } = id
    return (
        <div>
            <h2>Product Shoe {productId}</h2>
            <Box pb={10}>
            <Grid container id='details' justifyContent={'center'}>
                <Grid item xs={8}>
                    <Paper id ='details1'>
                        <img src={img} alt='' height="500px" width="450px" />
                    <Box pt={3}>
                    <p>{text}</p>
                    </Box>
                    </Paper>
                    </Grid>
            </Grid>
            </Box>
        </div>
    );
}