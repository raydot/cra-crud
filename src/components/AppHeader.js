/*
	Create an AppHeader component.  This will serve as the navbar
*/

import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
} from '@material-ui/core';

const AppHeader = () => (
	<AppBar position="static">
		<Toolbar>
			<Typography variant="title" color="inherit">
				Dave's React App
			</Typography>
		</Toolbar>
	</AppBar>
);

export default AppHeader;