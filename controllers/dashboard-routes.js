const router = require('express').Router();
const { Router } = require('express');
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
console.log('Test')
console.log(req.session.user_id)
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id },
            
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
        res.render('dashboard', {
            layout: 'main',
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router