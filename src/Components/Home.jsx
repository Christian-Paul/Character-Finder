import React from 'react';

import { Button } from 'semantic-ui-react';
import { IndexLink } from 'react-router';

const Home = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Character Finder</h1>
				<h3>Find characters you love</h3>
				<Button as={ IndexLink } to='/search-by-trope'>
					By Trope
				</Button>
				<Button as={ IndexLink } to='/search-by-characters'>
					By Similar Characters
				</Button>
				<IndexLink to='/trope-index'>View All Tropes</IndexLink>
			</div>
		)
	}
});

export default Home