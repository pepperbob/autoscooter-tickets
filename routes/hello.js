var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.send({"msg": "Hello World"});
})

module.exports = router;