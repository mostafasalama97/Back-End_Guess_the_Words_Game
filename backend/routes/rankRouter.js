const express = require('express');
const rankControllers = require('../controllers/rankControllers');

const router = express.Router();

router.post('/postrank', rankControllers.getRank);

module.exports = router;
