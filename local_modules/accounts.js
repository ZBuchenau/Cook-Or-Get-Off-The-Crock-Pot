var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

module.exports = function() {
  return {
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
              if(error) {
                reject(error);
              }
              if (same) {
                resolve(user);
              } else {
                resolve(false);
              }
            });
          });
      });
    }
  };
};
