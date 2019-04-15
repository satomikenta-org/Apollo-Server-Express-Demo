const router = require('express').Router();

router.post('/login', (_, res) => {
  res.send('You are authenticated!!');
});

router.post('/signup', (_, res) => {
  res.send('You are authenticated!!');
});

module.exports = router;

