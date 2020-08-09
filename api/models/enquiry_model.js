const moongose = require('mongoose')
const enquirySchema = moongose.Schema({
    "date" : {
        type: Date,
    },
    "enquiryNo": {
        type: String
    },
    "enqOfficerName" : {
        type: String,
    },
    "status" : {
        type: String
    },
    "suspectName" : {
        type: String
    },
    "createdBy": {
        type: String
    },
    "enquiry_model": {
        type: String
    },
    'reviewComment': {
        type: String
    }
})

module.exports = moongose.model('enquiry', enquirySchema, 'enquiry');