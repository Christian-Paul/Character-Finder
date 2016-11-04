import React from 'react';
import { Router, Route, IndexLink, IndexRoute, browserHistory } from 'react-router';

import Layout from './Layout.jsx';
import Home from './Home.jsx';
import SearchByTrope from './SearchByTrope.jsx';
import SearchByCharacters from './SearchByCharacters.jsx';
import TropeIndex from './TropeIndex.jsx';
import Results from './Results.jsx';
import Character from './Character.jsx';

const App = React.createClass({
	render: function() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Home} />
					<Route path='/search-by-trope' component={SearchByTrope} />
					<Route path='/search-by-characters' component={SearchByCharacters} />
					<Route path='/trope-index' component={TropeIndex} />
					<Route path='/results' component={Results} />
					<Route path='/matches/:matchNumber' component={Character} />
				</Route>
			</Router>
		)
	}
});

export default App