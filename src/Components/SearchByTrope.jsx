import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react'

const SearchByTrope = React.createClass({
	getInitialState: function() {
		return ({
			selected: []
		})
	},
	handleSearch: function() {
		var self = this;

		// query data for results
		axios.get('/characters?selectedTraits=' + self.state.selected)
			.then(function(response) {
				// set user's matches state
				self.props.setMatches(response.data)


				// redirect to results page
				self.context.router.push('/results');
			})
			.catch(function(error) {
				console.log(error)
			});
	},
	handleChange: function(name, value) {
		this.setState({
			selected: value.value
		})
	},
	getDropdownOptions: function() {
		var tropes = this.props.tropes;
		var dropdownOptions = [];

		for(var i = 0; i < tropes.length; i++) {
			var options = {
				text: tropes[i].name,
				value: tropes[i].name
			}

			dropdownOptions.push(options);
		}

		return dropdownOptions
	},
	render: function() {
		this.getDropdownOptions()
		return (
			<div className='page search'>
				<h1>Find Characters by Trope</h1>
				<div className='dropdown-holder'>
					<Dropdown placeholder='Tropes' fluid multiple search selection onChange={this.handleChange} options={this.getDropdownOptions()} />
				</div>
				<div className='button-holder'>
					<Button onClick={this.handleSearch}>Search</Button>
				</div>
			</div>
		)
	}
});

SearchByTrope.contextTypes = {
	router: React.PropTypes.object
};

export default SearchByTrope