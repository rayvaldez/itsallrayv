import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';

export default function Introduction() {

	let responsiveText = createTheme()

	responsiveText = responsiveFontSizes(responsiveText)

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#FAF9F6',
    }}>
			<ThemeProvider theme={responsiveText}>
        <Grid container spacing={0}>
					<Grid item xs={4} align='left' sx={{
						mt:'40vh',
						ml:'10vw',
					}}>
            <Typography variant='h2'>
                Image goes here
            </Typography>
					</Grid>
					<Grid item xs={6} md={5} align='right' sx={{
						mt:'22vh',
					}}>
            <Typography variant='h6'>
                Short Introduction about yourself
            </Typography>
						<Typography variant='h6' display='block'>
								Who What Where When				 
						</Typography>
						<br></br><br></br>
            <Typography variant='h6'>
                More about yourself 
            </Typography>
						<Typography variant='h6' display='block'>
								Who What Where When				 
						</Typography>
						<br></br><br></br>
            <Typography variant='h6'>
               Even More about yourself 
            </Typography>
						<Typography variant='h6' display='block'>
								Who What Where When				 
						</Typography>
						<br></br><br></br>
            <Typography variant='h6'>
               Wrap it up about yourself 
            </Typography>
						<Typography variant='h6' display='block'>
								Who What Where When				 
						</Typography>
					</Grid>
        </Grid>    
			</ThemeProvider>
   </Box>
  )
}