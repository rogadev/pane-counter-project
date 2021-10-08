const db = require('../models/index');
const User = db.user;

checkForDuplication = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).json({
        error: 'Email already exists',
      });
    } else {
      next();
    }
  });
};

const verifyRegister = {
  checkForDuplication,
};

module.exports = verifyRegister;
