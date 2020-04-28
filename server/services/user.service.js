'use strict';
const userModel = require('../models/user.model');


class User_service {
  getUsers(req, res, next) {
    userModel.getUsers(res.locals.userId).then((users) => {
      res.json(users);
    }).catch(error => next(error));
  }
  deleteUsers(req, res, next) {
    userModel.deleteUsers(req.params.id).then((user) => {
      res.json(user);
    }).catch(error => next(error));
  }
}

module.exports = new User_service();
