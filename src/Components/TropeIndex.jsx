import React from 'react';
import { Accordion } from 'semantic-ui-react'

const TropeIndex = React.createClass({
	getTropes: function() {
		return (
			this.props.tropes.map((trope) => {
				return ({
					title: trope.name,
					content: trope.description
				})
			})
		)
	},
	render: function() {
		return (
			<div className='page tropeindex'>
				<h1>All Tropes</h1>
				<Accordion panels={this.getTropes()} fluid styled/>
			</div>
		)
	}
});

export default TropeIndex