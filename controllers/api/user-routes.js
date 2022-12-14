const router = require('express').Router();
const {User} = require('../../models')

router.get('/',(req,res)=>{
    User.findAll()
    .then((data)=>{
        const users = data.map((user) => user.get({ plain: true }));
        res.json(users)
    })
})

router.post('/signup',(req,res)=>{
  console.log(req.body)
    User.create(req.body)
    .then((data)=>{
    console.log(data)
        res.json(data)
    })
    .catch((err)=>{
      console.log(err)
        res.json({error:'There is a problem'})
    })
})

router.post('/login', async (req, res) => {
    console.log(req.body)
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData)
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword)
      if (!validPassword) {
        res
          .status(401)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });


  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;