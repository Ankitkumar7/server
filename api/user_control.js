const express = require('express');
const router = express.Router();
const userModel = require('./models/user_model');






router.get('/login', (req, res, next) => {
    // let skip = (parseInt(req.query.pageNo) - 1) * parseInt(req.query.limit);
    // .skip(skip).limit(parseInt(req.query.limit))
    let toQuery = {userName: req.query.userName, password: req.query.password, status: 'active'}
    userModel.findOne(toQuery)
    .exec()
    .then(data => {
        if(data) {
            res.status(200).json({
                data: data
            })
        } else {
            res.status(200).json({
                data: 'user not found'
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})


router.post('/adduser', (req, res, next) => {
    const userDoc = new userModel(req.body);
    userDoc.save(req.body).then(data => {
        res.status(200).json({
            message: "User Successfully Created"
        })
    })
})

router.get('/block', (req, res, next) => {
    const toQuery = {userName: req.query.userName}
    userModel.findOneAndUpdate(toQuery, {$set: {status:req.query.status}})
    .exec()
    .then(data => {
        if(data) {
            res.status(200).json({
                data: data
            })
        } else {
            res.status(200).json({
                message: 'User Blocked'
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})



router.post('/applogin', (req, res, next) => {
    // let skip = (parseInt(req.query.pageNo) - 1) * parseInt(req.query.limit);
    // .skip(skip).limit(parseInt(req.query.limit))
    let toQuery = {userName: req.query.userName, password: req.query.password}
    let notificationId = req.body.id
    userModel.findOne(toQuery)
    .exec()
    .then(data => {
        if(data) {
            data['notification_ids'] = notificationId
                // write logic to save
            // if(data && data.notification_ids && data.notification_ids.length > 0) {
            //     for(let index=0; index < data.notification_ids.length; index++) {
            //         if(data.notification_ids[index] !== notificationId) {
            //             data.notification_ids.push(notificationId)
            //         }
            //     }
            // } else {
                
            // }
            console.log(data);
            userModel.findOneAndUpdate(toQuery, {$set: {notification_ids:data['notification_ids']}})
            .exec()
            .then(data => {
                if(data) {
                    res.status(200).json({
                        data: data
                    })
                } else {
                    res.status(200).json({
                        message: `${data['notification_ids']} has been added`
                    })
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({err: 'Something Went Wrong'});
            })
            // res.status(200).json({
            //     data: data
            // })
        } else {
            res.status(200).json({
                data: 'user not found'
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Something Went Wrong'});
    })
})

module.exports = router;