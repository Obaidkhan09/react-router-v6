import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import cover from '../images/cover.jpg';

import './styling/Home.css';


function Home() {
    return (
        <div className='container'>
            <Box>
                <Paper elevation ={3} className='fill'>
                    <img src={cover} />
                    <div className='centered'>
                        <h1 className='mainFonts'>Shoe Store</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable 
                            content of a page when looking at its layout. The point of using Lorem Ipsum is that 
                            it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                            content here', making it look like readable English. Many desktop publishing packages and wide variety
                        </p>
                    </div>
                </Paper>
            </Box>
        </div>
    );
}

export default Home;