const router = require('express').Router();
const Services = require('../../services')
const AuthUtils = require('../../utils/auth');

const asyncWrapper = fn => (...args) => fn(...args).catch(args[2]);


router.post('/login', asyncWrapper( async (req, res) => {
  // need validator
  const { name, email } = req.body; 
  const user = await Services.User.findOneByEmail(email);
  if (!user) return res.sendStatus(401); // not found such user.
  if (user.name === name && user.email === email) {
    const token = await AuthUtils.genToken(user.id, name);
    res.send({msg: "You Are Authenticated!", token });
  } else {
    // name and email is not correct pair.  
    res.sendStatus(401);
  }
}));

router.post('/signup', asyncWrapper( async (req, res) => {
  // need validator
  const { name, email } = req.body;
  const result = await Services.User.create(name, email);
  if (result) {
    res.send('You are authenticated!!');
  } else {
    throw new Error('Create User failed');
  }
}));

module.exports = router;

