/* ==== External Modules ==== */
const express = require("express");

/* ==== Internal Modules ==== */

/* ==== Instanced Modules  ==== */
const app = express();

/* ==== Configuration ==== */
const config = require("@myflexspace/config");

/* ====  Routes & Controllers  ==== */
app.all("/api/*", (req, res, next) =>{
	res.send("HOLD UP THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
})


/* ====  Server Listener  ==== */
app.listen(config.PORT, () => {
	console.log(`myflexspace is live at http://localhost${config.PORT}`);
});
