const express = require('express');
const app = express();
var cors = require("cors")

const morgan = require('morgan');
const caseControl = require('./api/case_control')
const userControl = require('./api/user_control')

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/development');
const fileUpload = require('express-fileupload');

let mongoUri = config.database.withoutAuth;
const mongooseOptions = {
    useFindAndModify: false,
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
};

if (config.database.isProd) {
    mongooseOptions.auth = config.database.auth
    mongoUri = config.database.withoutAuth
}

console.log(mongoUri);

mongoose.connect('mongodb+srv://admin:admin@cluster0.tdyon.mongodb.net/specialvigilanceunit?retryWrites=true&w=majority');

let db = mongoose.connection;
//Check connection 
db.once('open', function() {
    console.log(`Conncted to MongoDB address ${mongoUri}`)
})
// Check for DB errors
db.on('error', function() {
    console.log('err');
});
app.use(morgan('dev'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use(fileUpload());
app.use(bodyParser.urlencoded({'extended': false}));
app.use(bodyParser.json());

app.use(cors({credentials: true, origin: true}))
app.use(function (req, res, next) {
    // res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token, x-email-id, x-device-id, x-device-token, x-device-type, role, role-region, admin, user-id, type, userid, self, systemIPInfo')
    res.header('Access-Control-Expose-Headers', 'organizationId, cardConfigVersion')
    if (req.method === 'OPTIONS') return res.send(200)
    next()
  })
  

app.use('/api/svu/v1', caseControl);
app.use('/api/svu/v1/user', userControl);

app.use(express.static('./dist/'));
app.get('/svu', function(req, res) {
    res.sendFile('index.html', {root: 'dist/'}
  );
  });



app.use((req, res, next) => {
    const error = new Error('API NOT FOUND');
    error.status =  404
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;  