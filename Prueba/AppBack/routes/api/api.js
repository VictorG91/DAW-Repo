const router = require('express').Router();

router.use('/piratas', require('./piratas'));
router.use('/marines', require('./marines'));
router.use('/tripulaciones', require('./tripulaciones'));

module.exports = router;

