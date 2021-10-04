import React from 'react';
import { Grid } from '@mui/material';
import Product1 from './Products/Product1';
import Product2 from './Products/Product2';
import Product3 from './Products/Product3';

import { Box } from '@mui/system';

function ProductsHome () {
    return(
        <Box pt={7} pb={7}>
            <Grid container spacing={7} justifyContent={'center'}>
                <Grid item sx={12}>
                    <Product1 />
                </Grid>
                <Grid item sx={12}>
                    <Product2 />
                </Grid>
                <Grid item sx={12}>
                    <Product3 />
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductsHome;