// Dopeness Component
import React, { Component } from "react";

class Dopeness extends Component {
	// setting the initial state for dopenessCount to be 0
	state = {
		dopenessCount: 0,
	};

	// increaseDopeness method that is called onClick event
	increaseDopeness = () => {
		let moreDope = this.state.dopenessCount + 1;
		this.setState({
			dopenessCount: moreDope,
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.increaseDopeness}>
					Dopeness: {this.state.dopenessCount}
				</button>
			</div>
		);
	}
}

export default Dopeness;
