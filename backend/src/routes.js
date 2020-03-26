const express = require('express');

const OngCOntroller = require('./controllers/OngsController')
const IncidentControler = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngCOntroller.index);
routes.post('/ongs', OngCOntroller.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentControler.index);
routes.post('/incidents', IncidentControler.create);
routes.delete('/incidents/:id', IncidentControler.delete);



module.exports = routes;