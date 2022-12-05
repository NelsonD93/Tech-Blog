const router = require('express').Router();
const {Post} = require('../../models')

router.get('/',(req,res)=>{
    Post.findAll()
    .then((data)=>{
        const posts = data.map((post) => post.get({ plain: true }));
        res.json(posts)
    })
})

router.post('/',(req,res)=>{
    Post.create(req.body)
    .then((data)=>{
    
        res.json(data)
    })
    .catch(()=>{
        res.json({error:'There is a problem'})
    })
})

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

module.exports = router;