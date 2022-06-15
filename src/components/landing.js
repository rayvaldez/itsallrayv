import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';

const Landing = () => {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#1c313a',
    }}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          width: '90vw',
          color: '#FAF9F6',
        }}>
          Ray Valdez <br/>
          Full Stack Developer <br/>
          London
        </Typography>
      </ThemeProvider>
    </Box>
  );
};

export default Landing;
