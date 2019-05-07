import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Kris', age: 35 },
			{ name: 'Kriss', age: 28 },
			{ name: 'Kriz', age: 30 }
		]
	};

	switchNameHandler = () => {
		// console.log("was clicked");
		// this.state.persons[1].name = 'Maximilian';
		this.setState({
			persons: [
				{ name: 'Zoro', age: 42 },
				{ name: 'Kriss', age: 28 },
				{ name: 'Pepi', age: 12 }
			]
		});
	};

	changedNameHandler = event => {
		this.setState({
			persons: [
				{ name: 'Zoro', age: 42 },
				{ name: event.target.value, age: 28 },
				{ name: 'Pepi', age: 12 }
			]
		});
	};

	render() {
		const btnStyle = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<button style={btnStyle} onClick={this.switchNameHandler}>
					Switch name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler}
					changed={this.changedNameHandler}
				>
					drink beer
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		);
	}
}

export default App;
