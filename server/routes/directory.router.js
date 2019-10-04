const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Gathers all nonprofits from the database who have been approved
router.get('/', (req, res) => {
  let queryText = `SELECT * FROM "nonprofit" WHERE "is_approved" ORDER BY "name";`;

  pool.query(queryText)
  .then((results) => {
    res.send(results.rows);
  })
  .catch((error) => {
    console.log('error in directory GET', error);
    res.sendStatus(500);
  });
});

module.exports = router;