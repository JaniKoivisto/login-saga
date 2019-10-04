import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { login } from './actions';

const FormBackground = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const App = () => {
	const dispatch = useDispatch();
	const [ values, setValue ] = useState({ email: '', password: '' });
	const handleSubmit = (e, values) => {
		e.preventDefault();
		dispatch(login(values.email, values.password));
	};
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<FormBackground>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form
					noValidate
					onSubmit={(e) => {
						handleSubmit(e, values);
					}}
				>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={(e) => setValue({ ...values, [e.target.name]: e.target.value })}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={(e) => setValue({ ...values, [e.target.name]: e.target.value })}
					/>
					<Button type="submit" fullWidth variant="contained" color="primary">
						Sign In
					</Button>
				</form>
			</FormBackground>
		</Container>
	);
};

export default App;
