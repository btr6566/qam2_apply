var express = require('express');
var router = express.Router();


const sql = require('mssql');



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Hello from db');
});

module.exports = router;
