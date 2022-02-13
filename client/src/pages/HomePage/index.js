import { useState, useEffect } from "react";
import Post from "../../components/Post";
import Welcome from "../../components/Welcome";
import PostForm from "../../components/PostForm";
import NavBar from "../../components/NavBar";
import ProfilePage from "../../pages/ProfilePage";
import HomiesPage from "../../pages/HomiesPage";
import { Routes, Route } from "react-router-dom";
import * as postService from "../../api/post.service";

// take all of the posts from the db
// render them out in reverse chronological order
// make sure new posts render when created
// usestate, and useeffect for our posts, then map it out

const Home = () => {
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		await postService.getAll().then((res) => {
			setPosts(res.data.data.reverse());
		});
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="homies" element={<HomiesPage />}></Route>
				<Route
					path="/"
					element={
						<>
							<Welcome />
							<PostForm refreshPosts={() => fetchPosts()}/>
							{posts.map((post) => {
								return (
									<Post
										title={post.title}
										author={post.author}
										body={post.body}
										key={post._id}
									/>
								);
							})}
							;
						</>
					}
				></Route>
				<Route path="profile" element={<ProfilePage />}></Route>
			</Routes>
		</div>
	);
};

export default Home;
