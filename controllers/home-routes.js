const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('homepage')
});

router.get('/login',(req,res)=>{
    res.render('login')
});

// router.get('/dashboard',(req,res)=>{
//     res.render('dashboard')
// });

router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.get('/create', async (req, res) => {
    try {
     res.render ('create', { logged_in: req.session.logged_in})
   
    } catch (err) {
         res.status(501).json(err);
     }
   });

module.exports = router