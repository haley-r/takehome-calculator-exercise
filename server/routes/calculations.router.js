const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//get route to get everything
router.get('/', (req, res) => {
    const query = 'SELECT * FROM calculations ORDER BY timestamp DESC;'
    pool.query(query)
        .then((result) => {
            console.log('history retrieved: ', result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error getting from db: ', error);
            res.sendStatus(500);
        })
})
//post route
router.post('/', (req, res) => {
    const query = 
        `INSERT INTO "calculations" ("first-number", "operator-symbol", "second-number", "answer", "timestamp")
        VALUES($1,$2,$3,$4,NOW());`
    const values = [
        req.body.firstNumber,
        req.body.operatorSymbol,
        req.body.secondNumber,
        req.body.answer
    ];
    pool.query(query, values)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error posting to db: ', error);
            res.sendStatus(500);
        })
})



module.exports = router;