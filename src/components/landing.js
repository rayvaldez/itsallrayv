import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

const Landing = () => {

  return (
    <CssBaseline>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#1c313a',
      }}>
        <Typography variant="h2" sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          width: '50vw',
          color: '#e8e8e8',
        }}>
          Hi, I am Ray Valdez, a <br/>
          Full Stack Developer <br/>
          based in London
        </Typography>
      </Box>
    </CssBaseline>
  );
};

export default Landing;
