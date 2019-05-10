import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const Cockpit = props => {
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		// HTTP request
		setTimeout(() => {
			console.log('data fetched');
		}, 1000);
		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect');
		};
		// the empty array ensures that the effect hook gets executed only once - behavior like componentDidMount() {}
		// if we want this to be executed whenever for example "persons" change, we simply put persons in the array - [persons]
	}, []);

	const assignedClasses = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold);
	}
	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button className={btnClass} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default Cockpit;
