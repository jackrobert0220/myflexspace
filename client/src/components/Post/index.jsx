// Post Component
import React from "react";
import Dopeness from "../Dopeness";
import { string } from "prop-types";

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

Post.propTypes = {
	title: string.isRequired,
	author: string.isRequired,
	body: string.isRequired,
};

Post.defaultProps = {
	author: "Teri London",
};

export default Post;
