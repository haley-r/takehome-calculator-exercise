const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calculationsRouter = require('./routes/calculations.router.js');
const PORT = process.env.PORT || 5001;

// middleware
app.use(bodyParser.json());
app.use(express.static('build'));

// express routes
app.use('/calculations', calculationsRouter);

// start server
app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
})