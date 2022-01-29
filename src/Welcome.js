// bring in React from React
import React from "react";

// define our Welcome functional component
function Welcome(props) {
	// what should the component return
	return (
		// Make sure to return some UI
		<div>
			<h1>Welcome to MyFlexSpace, {props.name}!</h1>
			<p>
				You are located in<h3>{props.location}</h3>
			</p>
		</div>
	);
}

export default Welcome;
