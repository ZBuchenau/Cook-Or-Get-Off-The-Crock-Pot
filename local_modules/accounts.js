var bcrypt = require('bcrypt');

module.exports = function() {
  return {
    validUsername: function(submission) {
      var username = submission.username;
      return new Promise(function(resolve, reject) {
        knex('users')
          .select('id')
          .where('username', username)
          .then(function(matchingNames) {
            if (matchingNames.length) {
              reject('username is not unique');
            }
            resolve(submission);
          });
      });
    },
    validPassword: function(submission) {
      var password = submission.password;
      return new Promise(function(resolve, reject) {
        if (password.length >= 4 && password.length <= 16) {
          resolve(submission);
        }
        resolve('invalid password');
      });
    },
    hash: function(submission) {
      var password = submission.password;
      return new Promise(function(resolve, reject) {
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(password, salt, function(error, hash) {
            if (error) {
              reject(error);
            }
            submission.password = hash;
            resolve(submission);
          });
        });
      });
    },
    authenticate: function(submission) {
      return new Promise(function(resolve, reject) {
        knex('users')
          .select('*')
          .where('username', submission.username)
          .then(function(userInfo) {
            var user = userInfo[0];
            var password = user.password;
            delete user.password;
            bcrypt.compare(submission.password, password, function(error, same) {
              if (error) {
                reject(error);
              }
              if (same) {
                resolve(user);
              } else {
                resolve(false);
              }
            });
          }).catch(function(error) {
            reject(error);
          });
      });
    }
  };
};
