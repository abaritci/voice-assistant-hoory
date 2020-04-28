'use strict';

class UserModel {
  constructor() {
    this.userSchema = require('../schemas/user.schema');
  }
  
  /**
   * Get all users without logged in user
   * @param userId
   * @returns {void|*|number|bigint}
   */
  getUsers(userId) {
    return this.userSchema.find({_id: {$nin: userId}});
  }
  
  /**
   * Delete user by id
   * @param userId
   * @returns {*|void|boolean|Promise<boolean>|IDBRequest<undefined>}
   */
  deleteUsers(userId) {
    return this.userSchema.findOneAndRemove({_id: userId});
  }
}

module.exports = new UserModel();
