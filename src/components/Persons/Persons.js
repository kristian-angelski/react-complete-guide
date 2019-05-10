import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getDerivedStateFromProps');
	// 	return state;
	// }

	// componentWillReceiveProps(props) {
	// 	console.log('[Persons.js] componentWilLReceiveProps', props);
	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return null;
	}

	// componentWillUpdate() {

	// }

	componentDidUpdate() {
		console.log('[Persons.js] componentDidUpdate');
	}

	// All cleanup happens here
	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}

	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {
			return (
				<Person
					key={person.id}
					name={person.name}
					age={person.age}
					click={() => this.props.clicked(index)}
					changed={event => this.props.changed(event, person.id)}
				/>
			);
		});
	}
}

export default Persons;
