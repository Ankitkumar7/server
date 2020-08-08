const moongose = require('mongoose')
const caseFileSchema = moongose.Schema({
   fileName: {
       type: String
   },
   caseNo: {
       type: String
   }
  
})

module.exports = moongose.model('casefile', caseFileSchema, 'casefile');