// make instance to connect to postgres
const pg = require('pg');

// connect to database
const Pool = pg.Pool;

const pool = new Pool({
    database: 'calculations-db',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
})

pool.on('connect', () => {
    console.log('connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;