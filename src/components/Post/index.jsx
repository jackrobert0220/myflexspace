// Post Component
import React from "react";
import Dopeness from "../Dopeness";

function Post(props) {
	return (
		<>
			<h1>Title: {props.title}</h1>
			<p>By: {props.author}</p>
			<div>
				<p>{props.body}</p>
			</div>
			<div>
				<Dopeness />
			</div>
		</>
	);
}

export default Post;
