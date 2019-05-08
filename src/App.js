import React, { Component } from 'react';
import uuid from 'uuid';
import classes from './App.css';
import Person from './Person/Person';

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
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								name={person.name}
								age={person.age}
								key={person.id}
								click={() => this.deletePersonHandler(index)}
								changed={event => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);

			style.backgroundColor = 'red';
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
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
