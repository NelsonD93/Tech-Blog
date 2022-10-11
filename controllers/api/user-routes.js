const router = require('express').Router();
const {User} = require('../../models')

router.get('/',(req,res)=>{
    User.findAll()
    .then((data)=>{
        const users = data.map((user) => user.get({ plain: true }));
        res.json(users)
    })
})

router.post('/',(req,res)=>{
    User.create(req.body)
    .then((data)=>{
    
        res.json(data)
    })
    .catch(()=>{
        res.json({error:'There is a problem'})
    })
})

module.exports = router;