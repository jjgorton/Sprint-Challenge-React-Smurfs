import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
	render() {
		return (
			<div className="Smurfs">
				<h1>Your Smurfs</h1>
				<div className="smurf-container">
					{this.props.smurfs.map((smurf) => {
						return (
							<Smurf
								name={smurf.name}
								id={smurf.id}
								age={smurf.age}
								height={smurf.height}
								key={smurf.id}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

Smurf.defaultProps = {
	smurfs : []
};

export default Smurfs;
