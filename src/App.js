import React, { Component } from 'react';
import uuid from 'uuid';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
	state = {
		persons: [
			{ id: uuid.v4(), name: 'Kris', age: 35 },
			{ id: uuid.v4(), name: 'Peter', age: 28 },
			{ id: uuid.v4(), name: 'Jane', age: 30 }
		]
	};

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

		this.setState({ persons: persons });
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
		let persons = null;
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<ErrorBoundary key={person.id}>
								<Person
									name={person.name}
									age={person.age}
									click={() => this.deletePersonHandler(index)}
									changed={event => this.nameChangedHandler(event, person.id)}
								/>
							</ErrorBoundary>
						);
					})}
				</div>
			);

			btnClass = classes.Red;
		}

		const assignedClasses = [];

		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red);
		}
		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				<h1>Hi, I'm a React App</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>
				<button className={btnClass} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
