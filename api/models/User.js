/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        firstName: 'STRING',
        lastName: 'STRING',
        age: {
            type: 'INTEGER',
            max: 150,
            required: true
        },
        birthDate: 'DATE',
        phoneNumber: {
            type: 'STRING',
            defaultsTo: '111-222-3333'
        },
        emailAddress: {
            type: 'email', // Email type will get validated by the ORM
            required: true
        }
    }
};

