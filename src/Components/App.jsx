import React from 'react';
import { Router, Route, IndexLink, IndexRoute, browserHistory } from 'react-router';

import Layout from './Layout.jsx';
import Home from './Home.jsx';
import SearchByTrope from './SearchByTrope.jsx';
import SearchByCharacters from './SearchByCharacters.jsx';
import TropeIndex from './TropeIndex.jsx';

const App = React.createClass({
	render: function() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Home} />
					<Route path='/search-by-trope' component={SearchByTrope} />
					<Route path='/search-by-characters' component={SearchByCharacters} />
					<Route path='/trope-index' component={TropeIndex} />
				</Route>
			</Router>
		)
	}
});

export default App