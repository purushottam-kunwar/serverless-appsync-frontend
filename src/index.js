
import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import config from './config';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

Amplify.configure({
	API: {
		endpoints: [
			{
				name: 'testApiCall',
				endpoint: config.graphql.URL,
				region: config.graphql.REGION,
			}
		]
	}
});

let myAppConfig = {
	aws_appsync_graphqlEndpoint: config.graphql.URL,
	aws_appsync_region: config.graphql.REGION,
	aws_appsync_authenticationType: config.graphql.AUTHENTICATION_TYPE,
	aws_appsync_apiKey: config.graphql.API_KEY,
};

Amplify.configure(myAppConfig);

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();