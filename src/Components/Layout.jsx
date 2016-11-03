import React from 'react';

import Navbar from './Navbar.jsx';

const Layout = React.createClass({
	getInitialState: function() {
		return ({
			previousSearch: '',
			nextSearch: '',
			matches: [],
			tropes: []
		})
	},
	componentDidMount: function() {
		var self = this;

		axios.get('/tropes')
			.then(function(response) {
				self.setState({
					tropes: response.data
				})
			})
			.catch(function(error) {
				console.log(error)
			});
	},
	setMatches: function(matches) {
		this.setState({
			matches: matches
		})
	},
	render: function() {
		var self = this;
		// Use react helper methods to pass state to arbitrary child component
		var children = React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, {
				tropes: self.state.tropes,
				matches: self.state.matches,
				setMatches: self.setMatches
			})
		})

		return (
			<div>
				<Navbar />
				{children}
			</div>
		)
	}
});

export default Layout