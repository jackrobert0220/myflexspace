const router = require("express").Router();
const {users} = require("../controllers")

router.get("/", users.index)

module.exports = router;