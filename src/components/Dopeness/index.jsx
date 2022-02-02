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

	//decreaseDopeness method
	decreaseDopeness = () => {
		let lessDope = this.state.dopenessCount - 1;
		this.setState({
			dopenessCount: lessDope,
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.increaseDopeness}>Increase Dopeness</button>
				<span>Dopeness: {this.state.dopenessCount}</span>
				<button onClick={this.decreaseDopeness}>Decrease Dopeness</button>
			</div>
		);
	}
}

export default Dopeness;
