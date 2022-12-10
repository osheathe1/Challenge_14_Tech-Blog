const router = require('express').Router();

const apiRoutes = require('./api/');
const homepageRoutes = require('./homeroutes');
const dashboardRoutes = require('./boardroutes');

router.use('/api', apiRoutes);
router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;