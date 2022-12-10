const {Post} = require('../models/post')
const withAuth = require('../utils/auth')
const router = require('express').Router();


router.get('/', withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll({
        where: {
          userId: req.userId,
        },
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('allpost', {
        layout: 'dashboard',
        posts,
      });
    } catch (err) {
      res.redirect('login');
    }
  });
  
  router.get('/new', withAuth, (req, res) => {
    res.render('newpost', {
      layout: 'dashboard',
    });
  });
  
  module.exports = router;