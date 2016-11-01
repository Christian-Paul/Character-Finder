import React from 'react';

import { Button } from 'semantic-ui-react';
import { IndexLink } from 'react-router';

const Home = React.createClass({
	render: function() {
		return (
			<div className='page home'>
				<h1>Character Finder</h1>
				<h3>Find characters you love</h3>
				<div className='serch-by-options'>
					<Button as={ IndexLink } to='/search-by-trope'>
						By Trope
					</Button>
					<Button as={ IndexLink } to='/search-by-characters'>
						By Similar Characters
					</Button>
				</div>
				<IndexLink to='/trope-index' className='view-index'>View All Tropes</IndexLink>
			</div>
		)
	}
});

export default Home