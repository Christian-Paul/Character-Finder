import React from 'react';
import { IndexLink } from 'react-router';

import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

const { Content, Description, Extra, Group, Header, Image, Meta } = Item

const Results = React.createClass({
	getResultsDom: function() {
		console.log(this.props.matches);
		return (
			this.props.matches.map(function(character, i) {
				console.log(character);
				return (
					<Item as={ IndexLink } to={'matches/'+i} key={i}>
						<Image size='medium' src={ character.image } />

						<Content>
							<Header>{ character.name }</Header>
							<Meta>
								<span>{ character.source }</span>
							</Meta>
							<Description>{ character.description }</Description>
							<Extra>
								{character.matchedTropes.map((trope, j) => {
									return <Label key={j}>{trope}</Label>
								})}
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