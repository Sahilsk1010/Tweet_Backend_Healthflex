const express = require('express');
const { posttweets, timeline } = require("../controllers/tweetcontrol"); 
const router = express.Router();
const auth = require('../middlewares/auth');

router.post('/', auth, posttweets);
router.get('/:userId/timeline', timeline); 

module.exports = router;
