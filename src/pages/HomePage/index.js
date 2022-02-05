import React from "react";
import Post from "../../components/Post";
import Welcome from "../../components/Welcome";
import NavBar from "../../components/NavBar";
import ProfilePage from "../../pages/ProfilePage";
import HomiesPage from "../../pages/HomiesPage";
import {Routes, Route} from 'react-router-dom';


const post = {
	title: "Eff Off Zuck",
	author: "Miss London",
	body: "I secretly recruited a group of superheroes to save the Internet",
};

function Home(props) {
	return (
		<div>
			<NavBar />
			<Routes>
                <Route path="homies" element={<HomiesPage />}> </Route>
				<Route path="/" element={<Welcome name={"Teri"} location={"San Francisco"} />}></Route>
				<Route path="posts" element={
									<Post 
										title={post.title} 
										author={post.author} 
										body={post.body} />} >
				</Route>
                <Route path="profile" element={<ProfilePage />}> </Route>
			</Routes>
		</div>
	);
}

export default Home;