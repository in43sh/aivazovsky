// Connecting all the required packages
const express = require ('express');
const bodyParser = require ('body-parser');
// const session = require ('express-session');
const cors = require ('cors');
const massive = require ('massive');

require('dotenv').config();

// Controllers
const paintings_controller = require('./controllers/paintings_controller');

const app = express();

app.use( bodyParser.json() );
app.use( cors() );

// Connecting our .env variable
massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db) );

// Paintings management
app.post('/api/add', paintings_controller.add_painting);
app.get('/api/painting/:id', paintings_controller.getOne);
app.get('/api/paintings', paintings_controller.getAll);
app.put('/api/painting/:id', paintings_controller.update);
app.delete('/api/painting/:id', paintings_controller.delete);

// Connecting our port
const port = process.env.PORT || 3333;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );