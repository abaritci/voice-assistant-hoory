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
   * Get User by id
   * @param userId
   * @returns {void|*|number|bigint}
   */
  getUser(userId) {
    return this.userSchema.findOne({_id: userId});
  }
  
  /**
   * Edit user by id and data
   * @param userId
   * @param data
   */
  editUser(userId, data) {
    return this.userSchema.findByIdAndUpdate({_id: userId},data);
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
