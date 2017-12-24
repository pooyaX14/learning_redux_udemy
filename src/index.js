/* eslint-disable no-console */
import React from 'react';
import 'babel-polyfill';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/style.css'; // webpack can css files too
import '../node_modules/bootstrap/dist/css/bootstrap.css';

render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
);
