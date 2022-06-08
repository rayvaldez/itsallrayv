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
          backgroundColor: 'primary.dark',
      }}>
        <Typography variant="h3">
          Hi, I am Ray Valdez, a <br/>
          Full Stack developer <br/>
          based in London
        </Typography>
      </Box>
    </CssBaseline>
  );
};

export default Landing;
