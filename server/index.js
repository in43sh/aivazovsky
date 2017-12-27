const express = require ('express');
const bodyParser = require ('body-parser');
// const session = require ('express-session');
const cors = require ('cors');
const massive = require ('massive');

require('dotenv').config();

// Controllers
const painting_controller = require('./controllers/painting_controller');

const app = express();

app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db) );

// Paintings manadement
app.post('/api/add', painting_controller.add);

const port = process.env.PORT || 3333;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );