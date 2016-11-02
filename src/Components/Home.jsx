import React from 'react';

import { Button } from 'semantic-ui-react';
import { IndexLink } from 'react-router';

const Home = React.createClass({
	render: function() {
		return (
			<div className='page home'>
				<h1>Character Finder</h1>
				<h3>This project uses TVTrope's collection of characters and tropes to easily find characters based on their tropes, or similarity to other characters.</h3>
				<div className='search-by-options'>
					<Button as={ IndexLink } to='/search-by-trope'>
						By Trope
					</Button>
					<Button as={ IndexLink } to='/search-by-characters'>
						By Similar Characters
					</Button>
				</div>
				<p className='view-index'>
					<IndexLink to='/trope-index'>View All Tropes</IndexLink>
				</p>
			</div>
		)
	}
});

export default Home