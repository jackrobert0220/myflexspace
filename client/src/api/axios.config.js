// we set up a config file as an instance of axios, then export
// axios.config.js new industry standard naming convention
import axios from "axios";

// switch URL depending on whether ur local or pushing to heroku
const backendAPI = "http://localhost:4000/api";
// const backendAPI = "https://myflexspace1026.herokuapp.com/api";

// standard axios instance naming conventions can be api, client, or apiClient
// baseURLs used in real industry projects to reduce repetitive code
const tellMyFlexSpaceTo = axios.create({
	baseURL: `${backendAPI}`,
	headers: {
		"Content-type": "application/json",
	},
});

export default tellMyFlexSpaceTo;
