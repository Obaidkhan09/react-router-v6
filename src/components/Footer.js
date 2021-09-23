import React from "react";
import Grid from '@material-ui/core/Grid';
import CopyrightIcon from '@mui/icons-material/Copyright';

import './styling/Footer.css';

export default function Footer() {
    return (
        <div>
            <div className='back'>
                <Grid container>

                <Grid item xs={4} className='brand-name'>Shoe Store</Grid>
                <Grid item xs={4} className='ubuntu-fonts'>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </Grid>
                <Grid item xs={4} className='ubuntu-fonts'>
                    <ul>
                        <li>Karachi Pakistan</li>
                        <li>Punjab Colony, Karachi South.</li>
                        <li>0312-00001230</li>
                        <li>obaidkhan972@gmail.com</li>
                    </ul>
                </Grid>

            </Grid>
            </div>
            <div>
                <Grid container>
                    <Grid item xs={12} className='copyR'>
                        <CopyrightIcon/>Copy Right By Shoe Store.
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}