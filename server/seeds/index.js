require("dotenv").config();
//need dotenv here since we aren't accessing our server.js at all! :)

//bring in the db connection 
const db = require('../models');
const fs = require("fs");

//we can easily work with a json file to async/await creating users in that json file
//we need readFileSync to read the file and parse the JSON to something more easily manipulated
//we also need to pass in the file path for readFileSync
const userSeeds = JSON.parse(
    fs.readFileSync(`${__dirname}/users.json`)
)

//try/catch is a bit like if/else but easier to distinguish error with
// it is also common to use in testing! 
const seedUsers = async () => {
    try {
        await db.User.create(userSeeds);
        console.log("Data created!")
    } catch (err) {
        console.log(err)
    }
}

// THIS WILL DELETE LITERALLY EVERYTHING IN "USER" DB
const deleteUser = async() => {
    try{
        await db.User.deleteMany();
        console.log("Data destroyed!")
    }
    catch (err) {
        console.log(err)
    }
}

// deleteUser()
// seedUsers()

module.exports = {
    usersJSON: require("./users.json")
}