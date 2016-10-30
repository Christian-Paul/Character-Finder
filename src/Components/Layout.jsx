import React from 'react';

import Navbar from './Navbar.jsx';

const Layout = React.createClass({
	getInitialState: function() {
		return ({
			sampleCharacters: [
				{
					name: 'Emelia',
					tropes: ['Action Girl', 'Adorkable', 'Flower in Her Hair'],
					source: 'Re:Zero',
					image: 'http://vignette1.wikia.nocookie.net/rezero/images/3/3e/Episode_8.png/revision/latest?cb=20160520212139',
					description: 'The main female protagonist. She is a half-elf girl who is one of the candidates to become the next ruler in the royal election. Subaru first meets her when her insignia is stolen by Felt as she needs to possess it to be eligible to participate in the election.'
				},
				{
					name: 'Rem',
					tropes: ['Action Girl', 'The Beserker', 'Broken Ace', 'Defrosting Ice Queen', 'Oni'],
					source: 'Re:Zero',
					image: 'http://vignette1.wikia.nocookie.net/rezero/images/0/02/Rem_Anime.png/revision/latest?cb=20160730213532',
					description: 'A maid at the Roswaal mansion and the younger twin sister of Ram. She does the cooking, although she is stated to be more generally skilled than her sister in all areas.'
				},
				{
					name: 'Crusch',
					tropes: ['Action Girl', 'The Stoic', 'Pragmatic Hero'],
					source: 'Re:Zero',
					image: 'http://i0.kym-cdn.com/photos/images/original/001/149/139/016.jpg',
					description: "One of the participants in the royal selection to become king of Lugunica. A somewhat dense, but hard-working woman, who tends to prefer masculine attire. If she is chosen as the new king of Lugunica, she vows her first act will be to free Lugunica from the dragon's covenant."
				}
			]
		})
	},
	render: function() {
		var self = this;
		// Use react helper methods to pass state to arbitrary child component
		var children = React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, {
				sampleCharacters: self.state.sampleCharacters
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