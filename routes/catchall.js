const express = require('express');
const path = require('path');

const router = express.Router();
const sitepath = path.join(__dirname, '../build', 'index.html');

router.get('/*', (request, responds) => {
  responds.sendFile(sitepath);
});

module.exports = router;