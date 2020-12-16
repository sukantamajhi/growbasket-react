import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Registration.css';
// import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(15),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: theme.spacing(5),
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	button: {
		backgroundColor: theme.palette.error.dark,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function message() {
	document
		.getElementById('submitMessage')
		.innerHTML('Thank you for registered');
}

export default function SignUp() {
	const classes = useStyles();

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<FormControl>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete='fname'
									name='firstName'
									variant='outlined'
									required
									fullWidth
									id='firstName'
									label='First Name'
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='lastName'
									autoComplete='lname'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='current-password'
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											value='allowExtraEmails'
											color='primary'
										/>
									}
									label='I want to receive inspiration, marketing promotions and updates via email.'
								/>
							</Grid>
						</Grid>
						<button
							type='submit'
							id='submit'
							fullWidth
							variant='contained'
							onClick={message}>
							Sign up on GrowBasket
						</button>
						<div id='submitMessage'></div>
						<Grid container justify='flex-end'>
							<Grid item>
								<Link to='/login' variant='body2' id='signin'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</form>
				</FormControl>
			</div>
		</Container>
	);
}
