const express    = require('express'),
	  bodyParser = require('body-parser'),
	  massive    = require('massive'),
	  dc         = require('./controllers/database_controller/database_controller');

require('dotenv').config();

const app  = express(),
	  port = 3007;

app.use(bodyParser.json());

// DATABASE CONNECTION
massive(process.env.CONNECTION_STRING).then((dbInstance) => {
	app.set('db', dbInstance);
	console.log('CONNECTION SUCCESSFUL')
}).catch((err) => console.error('CONNECTION FAILED', err));

app.get('/api/houses', dc.getHouses);
app.post('/api/house', dc.addHouse);
app.delete('/api/house/:id', dc.removeHouse);

//STARTING SERVER
app.listen(port, console.log(`Working on port ${port}`));