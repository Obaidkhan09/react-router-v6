import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='app-bar-color'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='logoFonts'>
                        Shoe Store
                    </Typography>
                    <Box pr={5}>
                        <Button className='menu-fonts' onClick={()=>{
                            navigate('/');
                        }}>Home</Button>
                        <Button className='menu-fonts' onClick={()=>{
                            navigate('products');
                        }}>Products</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}