const moongose = require('mongoose')
const documentSchema = moongose.Schema({
    fileName: {
        type: String
    },
   content: {   
       type: String
   },
   created_on: {
       type: Date,
       default: Date.now
       
   },
   modified_on: {
    type: Date,
    
}
  
})

module.exports = moongose.model('document', documentSchema, 'document');