import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';


const Header = () => {


  return (
    <div>
      <AppBar sx={{background: 'none', boxShadow: '0 0 0 0'}}>
        <Toolbar sx={{width: '98%', margin: '0 auto'}}>
          <Typography variant='h5' sx={{
            display: { xs: 'none', md: 'flex' },
            flexGrow: 1,
          }}>
          Header Logo
          </Typography>
          <IconButton sx={{
            display: { xs: 'flex', md: 'none' },
          }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
