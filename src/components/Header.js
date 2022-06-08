import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {


  return (
    <div>
      <AppBar sx={{background: 'none'}}>
        <Toolbar>
          <h2>Header Logo</h2>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
