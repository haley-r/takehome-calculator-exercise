const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//get route to get everything
router.get('/', (req, res) => {
    const query = 'SELECT * FROM calculations ORDER BY answer DESC;'
    pool.query(query)
        .then((result) => {
            console.log('got stuff from the db: ', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error getting from db: ', error);
            res.sendStatus(500);
        })
})

module.exports = router;