import React from 'react';

import Navbar from './Navbar.jsx';

const Layout = React.createClass({
	render: function() {
		var self = this;
		// Use react helper methods to pass state to arbitrary child component
		var children = React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, {
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