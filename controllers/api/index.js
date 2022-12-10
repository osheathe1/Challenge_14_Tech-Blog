const router = require('express').Router();

const userRoutes = require('./userroutes');
const commentRoutes = require('./comments');
const postRoutes = require('./postroutes');



router.use('/comment', commentRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);


module.exports = router;