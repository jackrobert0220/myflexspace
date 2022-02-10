const path = require("path");
require("dotenv").config({path: '../.env'})
/* ==== External Modules ==== */
const express = require("express");
//DONT FORGET TO INSTALL METHOD-OVERRIDE INSIDE OF SERVER/
const cors = require("cors")
/* ==== Internal Modules ==== */

/* ==== Instanced Modules  ==== */
const app = express();
const routes = require("./routes")
/* ==== Configuration ==== */
const config = require("@myflexspace/config");

/* ==== Middleware ==== */
app.use(express.static(path.join("build")));
//helps us read body, including body with Postman and req.body
app.use(express.urlencoded({ extended: true }));
app.use(cors())

/* ====  Routes & Controllers  ==== */
app.use("/api", routes)

app.all("/api/*", (req, res, next) =>{
	res.send("HOLD UP THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
})


//MAGICAL FULL STACK MIDDLEWARE
//This targets anything that is NOT an "api" route, therefore it will be handled by React Router! The API routes must hit first, order matters, then use react via the React build directory

// ANY REQUEST not covered by routes express makes -- will get piped to this middleware!
// This literally hands over control to react

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "build", "index.html"))
})


/* ====  Server Listener  ==== */
app.listen(config.PORT, () => {
	console.log(`myflexspace is live at http://localhost${config.PORT}`);
});
