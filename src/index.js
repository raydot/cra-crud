import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import postReducer from './reducers/postReducer';

const store = createStore(postReducer);

ReactDOM.render(
	<Provider store={store}>
	<App /> 
	</Provider>, document.getElementById('root')
);

//Update the app without needing to refresh the page.
if (module.hot) module.hot.accept();
