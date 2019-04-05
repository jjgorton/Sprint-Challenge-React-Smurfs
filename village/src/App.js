import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs : []
		};
	}
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.

	componentDidMount() {
		axios
			.get('http://localhost:3333/smurfs')
			.then((res) => {
				this.setState({ smurfs: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className="App">
				<nav>
					<NavLink to="/">
						<h3>Smurf Village</h3>
					</NavLink>
					<NavLink to="/smurf-form">
						<h3>Add a Smurf</h3>
					</NavLink>
				</nav>

				<Route path="/smurf-form" component={SmurfForm} />

				<Route path="/" render={() => <Smurfs smurfs={this.state.smurfs} />} />
			</div>
		);
	}
}

export default App;
