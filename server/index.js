// Connecting all the required packages
const express = require ('express');
const bodyParser = require ('body-parser');
const session = require ('express-session');
const massive = require ('massive');

const bcrypt = require ('bcrypt');
const saltRound = 12;

const multer =  require('multer');
const AWS = require('aws-sdk');

const app = express();

// here we're importing .env file
require('dotenv').config();

// Controllers
const paintings_controller = require('./controllers/paintings_controller');
const users_controller = require('./controllers/users_controller');

// AWS declare
// use region only if you want to get something from AWS
// see https://stackoverflow.com/a/26284339/5184474
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION
});
const s3 = new AWS.S3();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 52428800
  }
})

// AWS Upload
app.post('/api/upload', upload.single('painting'), (req, res) => {
  var params = {
    Bucket: process.env.BUCKET,
    Key: req.file.originalname, 
    Body: req.file.buffer,
    ContentType: "image/png",
    ACL: 'public-read'
  }
  s3.putObject(params, (err) => { 
    console.log(err);
    if (err) return res.status(400).send(err);
  })
  var imageUrl = 'https://s3.amazonaws.com/' + params.Bucket + '/'+ params.Key
  res.status(200).send(imageUrl);
})

app.use( bodyParser.json() );

app.use( session({
  secret: process.env.SECRET,
  saveUninitialized: false,
  resave: false
}) );

// Connecting our .env variable
massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db) );

// Users management
app.post('/register', users_controller.register);
app.post('/login', users_controller.login);
app.post('/logout', users_controller.logout);
app.get('/user-data', users_controller.getUserData);

// Paintings management
app.post('/api/add', paintings_controller.add_painting);
app.get('/api/painting/:id', paintings_controller.getOne);
app.get('/api/paintings', paintings_controller.getAll);
app.get('/api/genre=:genre', paintings_controller.getByGenre);
app.get('/api/search', paintings_controller.search);
app.put('/api/painting/:id', paintings_controller.update);
app.delete('/api/delete/:id', paintings_controller.destroy);

// Connecting our port
const port = process.env.PORT || 3333;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );