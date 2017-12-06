import keystone from 'keystone';

/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

 const User = keystone.list('User');

 exports = module.exports = function(done) {

    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: 'dylan@devhominid.com',
        password: '123456',
        isAdmin: true
    }).save(done);
};
