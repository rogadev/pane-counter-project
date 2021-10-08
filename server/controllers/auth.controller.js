const { secret } = require('../config/auth.config.js');
const db = require('../models');
const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register
exports.register = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    organization: req.body.organization,
  });

  user.save((err, user) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    res.status(200).send({ message: 'User registration successful' });
  });
};

// Login
exports.login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({ message: 'Invalid Password!' });
    }

    const token = jwt.sign({ id: user.id }, secret, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      auth: true,
      token: token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        organization: user.organization,
      },
    });
  });
};
