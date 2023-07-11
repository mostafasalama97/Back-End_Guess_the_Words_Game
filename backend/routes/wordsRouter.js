const express = require('express');
const wordsControllers = require('../controllers/wordsControllers');

const router = express.Router();

router.get('/getwords', wordsControllers.getWord);

module.exports = router;
