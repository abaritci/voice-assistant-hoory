const express = require('express'),
  router = express.Router(),
  gravatar = require('gravatar'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  passport = require('passport'),
  validateRegisterInput = require('../validation/register'),
  validateLoginInput = require('../validation/login'),
  auth = require('../middlewares/auth.middleware'),
  auth_config = require('../config/auth.config'),
  error_config = require('../config/error.config'),
  crypto = require('crypto'),
  userService = require('../services/user.service');

const UserSchema = require('../schemas/user.schema');

router.get('/', auth, userService.getUsers);

router.delete('/:id', auth, userService.deleteUsers);

router.get('/:id', auth, userService.getUser);

router.post('/register', function (req, res) {
  
  const {errors, isValid} = validateRegisterInput(req.body);
  
  if (!isValid) {
    return res.status(400).json(errors);
  }
  UserSchema.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists'
      });
    }
    else {
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      const newUser = new UserSchema({
        name: req.body.name,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        sex: req.body.sex,
        color: req.body.color,
        avatar
      });
      
      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error('There was an error', err);
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.error('There was an error', err);
            else {
              newUser.password = hash;
              newUser
              .save()
              .then(user => {
                res.json(user)
              });
            }
          });
        }
      });
    }
  });
});

router.post('/login', (req, res) => {
  
  const {errors, isValid} = validateLoginInput(req.body);
  
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  const email = req.body.email;
  const password = req.body.password;
  
  UserSchema.findOne({email})
  .then(user => {
    if (!user) {
      errors.email = 'User not found'
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password)
    .then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          avatar: user.avatar
        }
        return generate_jwt(payload).then((token, error) => {
          if (error) console.error('There is some error in token', error);
          else {
            res.json({
              success: true,
              token: `Bearer ${token.jwt}`
            });
          }
        });
      }
      else {
        errors.password = 'Incorrect Password';
        return res.status(400).json(errors);
      }
    });
  });
});

router.get('/me', auth, (req, res) => {
  return res.json({
    id: req.user.id,
    name: req.user.name,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    avatar: req.user.avatar
  });
});

function generate_jwt(payload) {
  return Promise.try(() => jwt.sign(
    {...payload, timestamp: Date.now()},
    auth_config.jwt.secret,
    {expiresIn: auth_config.jwt.exp}
  )).then(async jwt => {
    let r_token = generate_token(auth_config.r_token.size);
    return {jwt, r_token};
  });
}

function generate_token(length = 12) {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'test') return resolve('test_hhwgqdfvargcftvvqctgqvtqdtcwrgszefgr_test');
    crypto.randomBytes(length, (err, buffer) => {
      if (err) return reject(err);
      return resolve(buffer.toString('hex'));
    });
  });
}

module.exports = router;
