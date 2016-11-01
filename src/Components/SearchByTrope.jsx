import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react'

const tropeOptions = [
		{
			text: 'Action Girl',
			value: 'Action Girl'
		},
		{
			text: 'Adorkable',
			value: 'Adorkable'
		},
		{
			text: 'Flower in Her Hair',
			value: 'Flower in Her Hair'
		},
		{
			text: 'The Berserker',
			value: 'The Berserker'
		},
		{
			text: 'Broken Ace',
			value: 'Broken Ace'
		},
		{
			text: 'Defrosting Ice Queen',
			value: 'Defrosting Ice Queen'
		},
		{
			text: 'Oni',
			value: 'Oni'
		},
		{
			text: 'The Stoic',
			value: 'The Stoic'
		},
		{
			text: 'Pragmatic Hero',
			value: 'Pragmatic Hero'
		},
	];

const SearchByTrope = React.createClass({
	handleSearch: function() {
		// query data for results
		// set users results state
		// redirect to results page
		this.context.router.push('/results'); 
	},
	render: function() {
		return (
			<div className='page search'>
				<h1>Find Characters by Trope</h1>
				<Dropdown placeholder='Tropes' fluid multiple search selection options={tropeOptions} />
				<Button onClick={this.handleSearch}>Search</Button>
			</div>
		)
	}
});

SearchByTrope.contextTypes = {
	router: React.PropTypes.object
};

export default SearchByTrope