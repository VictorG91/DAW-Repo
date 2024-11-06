const router = require('express').Router();

router.use('/piratas', require('./api/piratas'));

module.exports = router;