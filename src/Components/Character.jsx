import React from 'react';

import { Accordion, Card } from 'semantic-ui-react'

const Character = React.createClass({
	getTropes: function() {
		const match = this.props.matches[this.props.params.matchNumber];

		return (
			match.tropes.map((trope, i) => {
				return ({
					title: trope,
					content: match.tropeExplanations[i]
				})
			})
		)
	},
	render: function() {
		const match = this.props.matches[this.props.params.matchNumber];

		return (
			<div className='page character'>
				<Card
					image={match.image}
					header={match.name}
					meta={match.source}
					description={match.description}
					centered
				/>
				<div className='tropes'>
					<h3>{match.name}'s Tropes</h3>
					<Accordion panels={this.getTropes()} fluid styled/>
				</div>
			</div>
		)
	}
});

export default Character