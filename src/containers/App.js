import React, { Component } from 'react';
import uuid from 'uuid';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{ id: uuid.v4(), name: 'Kris', age: 35 },
			{ id: uuid.v4(), name: 'Peter', age: 28 },
			{ id: uuid.v4(), name: 'Jane', age: 30 }
		],
		showPersons: false,
		showCockpit: true,
		changeCounter: 0
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	// componentWillMount() {
	// 	console.log('[App.js] componentWillMount');
	// }

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

	nameChangedHandler = (event, personId) => {
		const personIndex = this.state.persons.findIndex(person => {
			return person.id === personId;
		});

		const person = {
			...this.state.persons[personIndex]
		};
		// console.log(person);

		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState((prevState, props) => {
			return { persons: persons, changeCounter: prevState.changeCounter + 1 };
		});
	};

	deletePersonHandler = personIndex => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		console.log('[App.js] render');
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler}
					/>
				</div>
			);
		}

		return (
			<Auxiliary>
				<button
					onClick={() => {
						this.setState({ showCockpit: !this.state.showCockpit });
					}}
				>
					toggle cockpit
				</button>
				{this.state.showCockpit ? (
					<Cockpit
						title={this.props.appTitle}
						showPersons={this.state.showPersons}
						persons={this.state.persons}
						clicked={this.togglePersonsHandler}
					/>
				) : null}
				{persons}
			</Auxiliary>
		);
	}
}

export default withClass(App, classes.App);
