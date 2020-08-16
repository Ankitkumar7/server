const moongose = require('mongoose')
const notification_history = moongose.Schema({
    "title" : {
        type: String,
    },
    "body": {
        type: String
    },
    'created_by': {
        type: String,
    },
    'recieved_on': {
        type: Date
    }
})

module.exports = moongose.model('notification_history', notification_history, 'notification_history');