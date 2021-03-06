// Licensed under the Apache License. See footer for details.
const express = require('express');

const router = express.Router();

router.get('/blocks', (req, res) => {
  res.sendFile(`${__dirname}/json/blockchain-get-blocks.json`);
});

module.exports = router;
