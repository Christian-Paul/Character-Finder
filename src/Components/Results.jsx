import React from 'react';
import { IndexLink } from 'react-router';

import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

const { Content, Description, Extra, Group, Header, Image, Meta } = Item

const Results = React.createClass({
	getResultsDom: function() {
		return (
			this.props.matches.map(function(character, i) {
				return (
					<Item as={ IndexLink } to='characters/emilia-tan' key={i}>
						<Image src={ character.image } />

						<Content>
							<Header>{ character.name }</Header>
							<Meta>
								<span>{ character.source }</span>
							</Meta>
							<Description>{ character.description }</Description>
							<Extra>
								<Label>{ character.tropes[0] }</Label>
								<Label>{ character.tropes[1] }</Label>
							</Extra>
						</Content>
					</Item>
				)
			})
		)
	},
	render: function() {
		return (
			<div className='page results'>
				<h1>Your Matches</h1>
				<Group divided link>
					{ this.getResultsDom() }
				</Group>
			</div>
		)
	}
});

export default Results