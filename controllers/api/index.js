const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;