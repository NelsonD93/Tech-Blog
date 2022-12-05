const router = require('express').Router();
const {Comment} = require('../../models')

router.get('/',(req,res)=>{
    Comment.findAll()
    .then((data)=>{
        const comments = data.map((post) => post.get({ plain: true }));
        res.json(comments)
    })
})

router.post('/',(req,res)=>{
    Comment.create(req.body)
    .then((data)=>{
    
        res.json(data)
    })
    .catch(()=>{
        res.json({error:'There is a problem'})
    })
})

router.delete('/:id',(req,res)=>{
    Comment.destroy({
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
    Comment.update(req.body,
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