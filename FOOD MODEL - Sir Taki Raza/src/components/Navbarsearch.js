// Navbarsearch.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const Navbarsearch = () => {
  return (
    <AppBar position="static" sx={{backgroundColor: '#3c6'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          <img src="logo.png" alt="Error no img found" style={{ height: '55px', marginRight: '10px', marginTop: '5px' }} />
        </Typography>
        <Button color="inherit">Login<LoginIcon/></Button> 
      </Toolbar>
    </AppBar>
  );
};

export default Navbarsearch;
