const express = require('express');
const router = express.Router();
const caseModel = require('./models/case_model');
var path = require('path');
var multer  = require('multer')
var fs = require('fs')
const caseFileModel = require('./models/casefile_model');
const casefile_model = require('./models/casefile_model');
const enquiryModel = require('./models/enquiry_model');
const enquiry_model = require('./models/enquiry_model');
const user_model = require('./models/user_model');
var cloudinary = require('cloudinary');
const app = require('../app');
const Excel = require('exceljs');

CLOUDINARY_URL="cloudinary://454741914527481:moHCUUvqzSRmEdCcs7gFsu_2L3Y@dan5drelz"
cloudinary.config({ 
    cloud_name: 'dan5drelz', 
    api_key: '454741914527481', 
    api_secret: 'moHCUUvqzSRmEdCcs7gFsu_2L3Y' 
  });
router.post('/addcase', (req, res, next) => {
    const caseDoc = new caseModel(req.body);
    caseDoc.save(req.body).then(data => {
        res.status(200).json({
            message: "Case Successfully added"
        })
    })
    
    // caseModel.insert(req.body)
    // .exec()
    // .then(data => {
    //     res.status(200).json({
    //         message: 'Case Created Successfully'
    //     })
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json({err: 'Something Went Wrong'});
    // })
})


router.post('/addEnquiry', (req, res, next) => {
    const enquiryDoc = new enquiryModel(req.body);
    console.log(enquiryDoc);
    
    enquiryDoc.save(req.body).then(data => {
        res.status(200).json({
            message: "Enquiry Successfully added"
        })
    })
    
    // caseModel.insert(req.body)
    // .exec()
    // .then(data => {
    //     res.status(200).json({
    //         message: 'Case Created Successfully'
    //     })
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json({err: 'Something Went Wrong'});
    // })
})

router.get('/allcases', (req, res, next) => {
    // let skip = (parseInt(req.query.pageNo) - 1) * parseInt(req.query.limit);
    // .skip(skip).limit(parseInt(req.query.limit))
    let toQuery;
    if(req && req.query && req.query.createdBy) {
         toQuery = {status: req.query.status, createdBy: req.query.createdBy}
    } else {
        toQuery = {status: req.query.status}
    }
    caseModel.find(toQuery).sort({_id:-1})
    .exec()
    .then(data => {
        res.status(200).json({
            data: data
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})

router.get('/allenquiry', (req, res, next) => {
    // let skip = (parseInt(req.query.pageNo) - 1) * parseInt(req.query.limit);
    // .skip(skip).limit(parseInt(req.query.limit))
    let query;
    if(req && req.query && req.query.createdBy) {
        query = {status:req.query.status, createdBy:req.query.createdBy}
    } else {
        query = {status:req.query.status}
    }
    enquiry_model.find(query).sort({_id:-1})
    .exec()
    .then(data => {
        res.status(200).json({
            data: data
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})

router.get('/getcasebyid', (req, res, next) => {
    // let skip = (parseInt(req.query.pageNo) - 1) * parseInt(req.query.limit);
    // .skip(skip).limit(parseInt(req.query.limit))
    caseModel.findOne({caseNo:req.query.caseNo})
    .exec()
    .then(data => {
        res.status(200).json({
            data: data
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})

router.get('/getenqbyid', (req, res, next) => {
    // let skip = (parseInt(req.query.pageNo) - 1) * parseInt(req.query.limit);
    // .skip(skip).limit(parseInt(req.query.limit))
    enquiry_model.findOne({enquiryNo:req.query.enqNo})
    .exec()
    .then(data => {
        res.status(200).json({
            data: data
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})



router.get('/disposeCase', (req, res, next) => {
    const caseId = req && req.query && req.query.caseNo

    caseModel.findOneAndUpdate({caseNo: caseId}, {$set: {status: 'completed'}})
    .exec()
    .then(data => {
        
        res.status(200).json({
            message: "Status has been updated"
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})

router.get('/disposeEnq', (req, res, next) => {
    const enqId = req && req.query && req.query.enqNo
    enquiry_model.findOneAndUpdate({enquiryNo: enqId}, {$set: {status: 'completed'}})
    .exec()
    .then(data => {
        
        res.status(200).json({
            message: "Status has been updated"
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})

router.put('/updateCase', (req, res, next) => {
    const caseId = req && req.query && req.query.caseNo

    caseModel.findOneAndUpdate({caseNo: caseId}, req.body)
    .exec()
    .then(data => {
        
        res.status(200).json({
            message: "Successfully Edited"
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})

router.put('/updateEnquiry', (req, res, next) => {
    const enqNo = req && req.query && req.query.enqNo

    enquiry_model.findOneAndUpdate({enquiryNo: enqNo}, req.body)
    .exec()
    .then(data => {
        
        res.status(200).json({
            message: "Successfully Edited"
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})


router.post('/saveFiles', (req, res, next) => {
    writeFile(req.files.file, res, req)
   

    
    
})

function writeFile(file, res, req) {
    var appDir = path.dirname(require.main.filename);
    console.log(appDir);
    
    const fileName = file && file.name || 'no_name.xlsx'
    const buffer = file && file.data
    let writeStream = fs.createWriteStream(fileName);
    writeStream.write(buffer, 'base64');
    var fileToUpload = path.dirname(fileName);
   

    // cloudinary.image(fileToUpload, {secure: true, transformation: [
    //     {width: 150, height: 150, gravity: "face", crop: "thumb"},
    //     {radius: 20},
    //     {effect: "sepia"},
    //     {overlay: "cloudinary_icon", gravity: "south_east", x: 5, y: 5, width: 50, opacity: 60, effect: "brightness:200"},
    //     {angle: 10}
    //     ]})
    // the finish event is emitted when all data has been flushed from the stream
    writeStream.on('finish', () => {
    console.log(' Downloaded Successfully');
   
    }); 
    writeStream.end();
    cloudinary.v2.uploader.upload(appDir + '/' + fileName, 
    {resource_type: "raw",
    overwrite: true},
    function(error, result) {
        console.log(result);
        casefile_model.findOne({caseNo: req.query.caseNo})
        .exec()
        .then(data => {
            if(data) {
                casefile_model.findOneAndUpdate({caseNo: req.query.caseNo}, {$set: {fileName: result.url}})
                .exec()
                .then(data => {
                })
            } else {
                const toPut = {fileName: result.url, caseNo: req.query.caseNo}
                console.log(toPut);
                const CF = new casefile_model(toPut)
                CF.save().then(data => {
                   
                })
            }
        })
    });
    // cloudinary.uploader.upload(appDir + '/' + fileName, function(error, result) {
    //     console.log(error);
    //     console.log(result);
    //     const toPut = {fileName: error.url, caseNo: req.query.caseNo}
    //     console.log(toPut);
    //     const CF = new casefile_model(toPut)
    //     CF.save().then(data => {
    //     })
    // });
    fs.unlinkSync(fileName).then(res => {
        console.log(res);
        
    })
    res.status(200).json({status: 'Uploaded'});

  
  }
  

router.get('/downloadFile', (req, res, next) => {
    var appDir = path.dirname(require.main.filename);
    const caseNo = req && req.query.caseNo;
    caseFileModel.findOne({caseNo: caseNo}).sort({_id:-1})
    .exec()
    .then(data => {
        console.log(data);
        res.status(200).json({
            data: data
        })   
     
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
 
})

router.get('/filter', (req, res, next) => {
    let toQuery;
    if(req && req.query && req.query.type === 'case') {
        if(req.query.createdBy === 'all') {
         toQuery = {status: req.query.status}

        } else {
            toQuery = {createdBy: req.query.createdBy, status: req.query.status}
        }
        caseModel.find(toQuery).sort({_id:-1})
        .exec()
        .then(data => {
            res.status(200).json({
                data: data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err: 'Something Went Wrong'});
        })
    } else if(req && req.query && req.query.type === 'enquiry'){
        if(req.query.createdBy === 'all') {
            toQuery = {status: req.query.status}
   
           } else {
               toQuery = {createdBy: req.query.createdBy, status: req.query.status}
           }
           enquiry_model.find(toQuery).sort({_id:-1})
           .exec()
           .then(data => {
               res.status(200).json({
                   data: data
               })
           })
           .catch(err => {
               console.log(err)
               res.status(500).json({err: 'Something Went Wrong'});
           })
    }
   
 
})

router.get('/allUser', (req, res, next) => {
        const toQuery = {role: req.query.role}
        user_model.find(toQuery).sort({_id:-1})
        .exec()
        .then(data => {
            res.status(200).json({
                data: data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err: 'Something Went Wrong'});
        })
   
 
})

router.get('/addcomment', (req, res, next) => {
    const caseId = req && req.query && req.query.caseNo
    const comment = req && req.query && req.query.reviewComment


    caseModel.findOneAndUpdate({caseNo: caseId}, {$set: {reviewComment: comment}})
    .exec()
    .then(data => {
        
        res.status(200).json({
            message: "Comment added"
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})


router.get('/addenqcomment', (req, res, next) => {
    const enqNo = req && req.query && req.query.enqNo
    const comment = req && req.query && req.query.reviewComment
    enquiry_model.findOneAndUpdate({enquiryNo: enqNo}, {$set: {reviewComment: comment}})
    .exec()
    .then(data => {
        
        res.status(200).json({
            message: "Comment added"
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})


async function enqReport(data, res){
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("My Sheet");
    worksheet.properties.header 
  worksheet.columns = [
    {header: 'ENQUIRY NO', key: 'enqNo', width: 25, style: {alignment: {horizontal: "center"}}},
    {header: 'DATE', key: 'date', width: 25, style: {alignment: {horizontal: "center"}}},
    {header: 'NAME OF SUSPECT', key: 'suspectName', width: 25, style: {alignment: {horizontal: "center"}}}, 
    {header: 'NAME OF ENQUIRY OFFICER.', key: 'nameOfEnqOfficer', width: 35, style: {alignment: {horizontal: "center"}}},
    {header: 'COMMENT', key: 'comment', width:50, style: {alignment: {horizontal: "center"}}},
    {header: 'STATUS', key: 'status', width:50, style: {alignment: {horizontal: "center"}}},
  ];
  worksheet.getRow(1).fill = {
    type: 'pattern',
    pattern:'solid',
    fgColor:{ argb:'cccccc' }
    }
    if(data && data.length > 0) {
        for(let index=0 ; index< data.length; index++) {
            worksheet.addRow({
                enqNo: data[index].enquiryNo,
                date: data[index].date,
                suspectName: data[index].suspectName,
                nameOfEnqOfficer: data[index].enqOfficerName,
                comment: data[index].reviewComment,
                status: data[index].status,
                }
                );
        }
    }
  await workbook.xlsx.writeFile('enqRprt.xlsx');

  
  // save under export.xlsx
    //  res.status(200).json({
    //         message: 'Genrated success'
    //     })
    workbook.xlsx.writeBuffer(res).then(function (buffer) {
        res.status(200).send(buffer)
    })
  console.log("File is written");
  };



async function caseReport(data, res){
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("My Sheet");
    worksheet.properties.header 
  worksheet.columns = [
    {header: 'CASE NUMBER', key: 'caseNo', width: 25, style: {alignment: {horizontal: "center"}}},
    {header: 'DATE', key: 'date', width: 25, style: {alignment: {horizontal: "center"}}},
    {header: 'UNDER SECTION	', key: 'underSection', width: 25, style: {alignment: {horizontal: "center"}}}, 
    {header: 'NAME OF ACCUSE.', key: 'nameOfExc', width: 35, style: {alignment: {horizontal: "center"}}},
    {header: 'COMMENT', key: 'comment', width:50, style: {alignment: {horizontal: "center"}}},
    {header: 'PROSECUTION SANCTION STATUS', key: 'pSanctionStatus', width:50, style: {alignment: {horizontal: "center"}}},
    {header: 'CHARGE SHEET NO & DATE', key: 'chargeSheet', width:50, style: {alignment: {horizontal: "center"}}},
    {header: 'TRIAL STATUS	', key: 'trailStatus', width:25, style: {alignment: {horizontal: "center"}}},
    {header: 'CONFISCATION STATUS', key: 'confiscationStatus', width:25, style: {alignment: {horizontal: "center"}}},
    {header: 'DEPARTMENTAL PROCEEDING', key: 'preceeding', width:35, style: {alignment: {horizontal: "center"}}},
    {header: 'STATUS', key: 'status', width:35, style: {alignment: {horizontal: "center"}}}

  ];
  worksheet.getRow(1).fill = {
    type: 'pattern',
    pattern:'solid',
    fgColor:{ argb:'cccccc' }
    }
    if(data && data.length > 0) {
        for(let index=0 ; index< data.length; index++) {
            worksheet.addRow({
                caseNo: data[index].caseNo,
                date: data[index].date,
                underSection: data[index].underSection,
                nameOfExc: data[index].nameOfAccuse,
                comment: data[index].reviewComment,
                pSanctionStatus: data[index].prosSanctionStatus,
                chargeSheet: data[index].chartSheetDate,
                trailStatus: data[index].trialStatus,
                confiscationStatus: data[index].confiscationStatus,
                preceeding: data[index].depProceeding,
                status: data[index].status
               
                }
                );
        }
    }

  
  // save under export.xlsx
//   await workbook.xlsx.writeFile('caseReport.xlsx');
    //  res.status(200).json({
    //         message: 'Genrated success'
    //     })
    workbook.xlsx.writeBuffer(res).then(function (buffer) {
        res.status(200).send(buffer)
    })
  console.log("File is written");
  };
router.get('/generateReport', (req, res, next) => {
    const caseType = req && req.query && req.query.type;
    caseModel.find({status: caseType}).sort({_id:-1})
    .exec()
    .then(data => {
        caseReport(data, res)
     
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
  
    // const enqNo = req && req.query && req.query.enqNo
    // const comment = req && req.query && req.query.reviewComment
    // enquiry_model.findOneAndUpdate({enquiryNo: enqNo}, {$set: {reviewComment: comment}})
    // .exec()
    // .then(data => {
        
    //     res.status(200).json({
    //         message: "Comment added"
    //     })
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json({err: 'Something Went Wrong'});
    // })
})


router.get('/generateEnqReport', (req, res, next) => {
    const enqType = req && req.query && req.query.type;
    enquiry_model.find({status: enqType}).sort({_id:-1})
    .exec()
    .then(data => {
        enqReport(data, res)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
  
    // const enqNo = req && req.query && req.query.enqNo
    // const comment = req && req.query && req.query.reviewComment
    // enquiry_model.findOneAndUpdate({enquiryNo: enqNo}, {$set: {reviewComment: comment}})
    // .exec()
    // .then(data => {
        
    //     res.status(200).json({
    //         message: "Comment added"
    //     })
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json({err: 'Something Went Wrong'});
    // })
})

module.exports = router;