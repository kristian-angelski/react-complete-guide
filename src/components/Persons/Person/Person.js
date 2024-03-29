import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
	render() {
		console.log('[Person.js] rendering...');
		return (
			<Auxiliary>
				<p onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old !
				</p>
				<p>{this.props.children}</p>
				<input
					type="text"
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Auxiliary>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	changed: PropTypes.func.isRequired
};

export default withClass(Person, classes.Person);
