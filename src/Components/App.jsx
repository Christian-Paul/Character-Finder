import React from 'react';
import { Router, Route, IndexLink, IndexRoute, browserHistory } from 'react-router';

import Layout from './Layout.jsx';
import Home from './Home.jsx';

const App = React.createClass({
	render: function() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Home} />
				</Route>
			</Router>
		)
	}
});

export default App