const express = require ('express');
const bodyParser = require ('body-parser');
const session = require ('express-session');
const massive = require ('massive');
const bcrypt = require ('bcrypt');
const saltRound = 12;
const multer =  require('multer');
const AWS = require('aws-sdk');
const path = require('path')
const port = process.env.PORT || 3333;
const app = express();

app.use( bodyParser.json() );

app.use( express.static( `${__dirname}/../build` ) );

// here we're importing .env file
require('dotenv').config();

// Controllers
const paintings_controller = require('./controllers/paintings_controller');
const users_controller = require('./controllers/users_controller');

// AWS declare
// AWS.config.update should be above declaring s3 variable.
// Use region only if you want to get something from AWS.
// See https://stackoverflow.com/a/26284339/5184474
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
  // s3.putObject() puts the image to the AWS bucket. If the file is already there
  // it won't give any error, just make view that file is uploaded again though
  // it just checked if it's in there
  s3.putObject(params, (err) => { 
    console.log(err);
    if (err) return res.status(400).send(err);
  })
  var imageUrl = 'https://s3.amazonaws.com/' + params.Bucket + '/'+ params.Key
  res.status(200).send(imageUrl);
})

// Session initialization
app.use( session({
  secret: process.env.SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 200 * 1000
  }
}) );

// Connecting our .env variable
massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db) );

// Users management
app.post('/register', users_controller.register);
app.post('/login', users_controller.login);
app.post('/logout', users_controller.logout);
app.get('/user-data', users_controller.getUserData);
app.get('/api/getUserId/:user', users_controller.getUserId)

// Paintings management
app.post('/api/add', paintings_controller.add_painting);
app.get('/api/painting/id=:id', paintings_controller.getOne);
app.get('/api/genre=:genre', paintings_controller.getByGenre);
app.get('/api/search', paintings_controller.search);
app.get('/api/paintings/user=:user', paintings_controller.getByUser);
app.get('/api/slideshow', paintings_controller.getSlideShow);
app.get('/api/paintings', paintings_controller.getAll);
app.put('/api/update/:id', paintings_controller.update);
app.delete('/api/delete/:id', paintings_controller.destroy);

// app.get('/api/order-by-year-asc', paintings_controller.getByYearAsc);

// Production
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

// Connecting our port
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );