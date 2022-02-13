import { useState } from "react";
import { func } from "prop-types";
import * as postService from "../../api/post.service";

const PostForm = ({ refreshPosts }) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const handleSubmit = async () => {
		let newPost = { title, body };
		let res = await postService.create(newPost).then(() => {
			setTitle("");
			setBody("");
			refreshPosts();
			console.log(newPost);
		});

		console.log(res);
		// 201 = create
		if (!res === 201) {
			alert(`ERROR! oh noes! not dope! it was code: ${res.status}`);
		}
	};

	return (
		<div>
			<form>
				<label>
					Post Title:
					<input
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						type="text"
						name="title"
						placeholder="input title value target, homie"
					/>
				</label>
				<label>
					What's on your mind, homie?
					<textarea
						onChange={(e) => setBody(e.target.value)}
						value={body}
						type="text"
						name="body"
						placeholder="input body value target, homie"
					/>
				</label>
			</form>
			<button onClick={handleSubmit}> Add Post, Homie + </button>
		</div>
	);
};

PostForm.propTypes = {
	refreshPosts: func,
};

export default PostForm;
