const moongose = require('mongoose')
const caseSchema = moongose.Schema({
    "date" : {
        type: Date,
        default: Date.now
    },
    "caseNo": {
        type: String
    },
    "underSection" : {
        type: String,
    },
    "nameOfAccuse" : {
        type: String
    },
    "InvStatus" : {
        type: String
    },
    "prosSanctionStatus" : {
        type: String
    },
    "trialStatus" : {
        type: String
    },
    'confiscationStatus': {
        type: String
    },
    "chartSheetDate" : {
        type: String,
       
    },
    "depProceeding" : {
        type: String
    },
    "invOfficer" : {
        type: String
    },
    "status" : {
        type: String
    },
    "createdAt" : {
        type: Date,
        default: Date.now
    },
    "updatedAt" : {
        type: Date,
        default: Date.now
    },
    "createdBy": {
        type: String
    },
    'reviewComment': {
        type: String
    },
    'fileUrl' : {
        type: String
    }
  
})

module.exports = moongose.model('cases', caseSchema, 'cases');