import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Header = () => {


  return (
    <div>
      <HideOnScroll>
        <AppBar sx={{background: 'none', boxShadow: '0 0 0 0'}}>
          <Toolbar sx={{width: '98%', margin: '0 auto'}}>
            <Typography variant='h5' sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}>
            Header Logo
            </Typography>
            <Typography sx={{
              display: { xs: 'none', md: 'flex'}
            }}>
              About  Portfolio  Contact {/*Change to actual menu*/}
            </Typography>
            <IconButton sx={{
              display: { xs: 'flex', md: 'none' },
            }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Header;
