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
					<Grid item align='center' xs={12} md={6} sx={{
						mt: { xs: '15vh', md: '40vh'}
					}}>
            <Typography variant='h2'>
                Image goes here
            </Typography>
					</Grid>
					<Grid item xs={12} md={6} align='center' sx={{
						mt:'22vh',
					}}>
            <Typography variant='hp'>
                Short Introduction about yourself
            </Typography>
						<Typography variant='hp' display='block'>
								Who What Where When				 
						</Typography>
						<br></br><br></br>
            <Typography variant='hp'>
                More about yourself 
            </Typography>
						<Typography variant='hp' display='block'>
								Who What Where When				 
						</Typography>
						<br></br><br></br>
            <Typography variant='hp'>
               Even More about yourself 
            </Typography>
						<Typography variant='hp' display='block'>
								Who What Where When				 
						</Typography>
						<br></br><br></br>
            <Typography variant='hp'>
               Wrap it up about yourself 
            </Typography>
						<Typography variant='hp' display='block'>
								Who What Where When				 
						</Typography>
					</Grid>
        </Grid>    
			</ThemeProvider>
   </Box>
  )
}