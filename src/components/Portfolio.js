import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Portfolio() {
  return (
    <Box
      sx={{
				width: '100%',
				backgroundColor: '#FAF9F6',
    	}}
		>
			<Typography variant='h6'>
				Projects
			</Typography>
			<br></br>
			<Grid item xs={12} md={6} align='center' container
				direction='column'
				justifyContent='space-between'
				alignItems='center'
			>
				<Paper elevation={1} sx={{
					width: '85%',
					height: '50vh',
					mb: '5vh'
				}}>
					<Grid item align='center'>
						FPL Data
					</Grid>
				</Paper>
				<Paper elevation={1} sx={{
					width: '85%',
					height: '50vh',
					mb: '5vh'
				}}>
					<Grid item align='center'>
						Index Scout
					</Grid>
				</Paper>
				<Paper elevation={1} sx={{
					width: '85%',
					height: '50vh',
					mb: '5vh'
				}}>
					<Grid item align='center'>
						Actyve
					</Grid>
				</Paper>
				<Paper elevation={1} sx={{
					width: '85%',
					height: '50vh',
					mb: '5vh'
				}}>
					<Grid item align='center'>
						Watchlist
					</Grid>
				</Paper>				
			</Grid>
    </Box>
  )
}
