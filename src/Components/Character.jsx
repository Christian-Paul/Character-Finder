import React from 'react';

import { Accordion, Item } from 'semantic-ui-react'

const { Content, Description, Extra, Group, Header, Image, Meta } = Item

const Character = React.createClass({
	getTropes: function() {
		const character = this.props.matches[this.props.params.matchNumber];

		return (
			character.tropes.map((trope, i) => {
				return ({
					title: trope,
					content: character.tropeExplanations[i]
				})
			})
		)
	},
	render: function() {
		const character = this.props.matches[this.props.params.matchNumber];

		return (
			<div className='page character'>

				<Group>
					<Item>
						<Image size='medium' src={ character.image } />

						<Content>
							<Header className='character-name'>{ character.name }</Header>
							<Meta>
								<span>{ character.source }</span>
							</Meta>
							<Description>{ character.description }</Description>
						</Content>
					</Item>
				</Group>

				<div className='tropes'>
					<h3>{character.name}'s Tropes</h3>
					<Accordion panels={this.getTropes()} fluid styled/>
				</div>
			</div>
		)
	}
});

export default Character