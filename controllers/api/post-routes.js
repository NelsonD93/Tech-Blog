const router = require('express').Router();
const {Post} = require('../../models')

router.get('/',(req,res)=>{
    Post.findAll()
    .then((data)=>{
        const posts = data.map((post) => post.get({ plain: true }));
        res.json(posts)
    })
})

// Create a post
router.post('/', async (req, res) => {
    try {
      const newPost = await Post.create({
        user_id: req.session.user_id,
        post_name: req.body.post_name,
        post_description: req.body.post_description
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/:id',(req,res)=>{
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((data)=>{
    
        res.json(data)
    })
    .catch(()=>{
        res.json({error:'There is a problem'})
    })
})

router.put('/:id',(req,res)=>{
    Post.update(req.body,
        {
        where: {
            id: req.params.id
        }
    })
    .then((data)=>{
    
        res.json(data)
    })
    .catch(()=>{
        res.json({error:'There is a problem'})
    })
})

// Create a post
router.post('/', async (req, res) => {
    try {
      const newPost = await Post.create({
        user_id: req.session.user_id,
        post_name: req.body.post_name,
        post_description: req.body.post_description
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;