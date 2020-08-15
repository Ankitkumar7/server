const moongose = require('mongoose')
const usersSchema = moongose.Schema({
    "userName" : {
        type: String,
    },
    "password": {
        type: String
    },
    "role" : {
        type: String,
    },
    "profilePic" : {
        type: String
    },
    "name" : {
        type: String
    },
    "status": {
        type: String
    },
    'notification_ids': {
        type: String
    }
})

module.exports = moongose.model('users', usersSchema, 'users');