'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    cors = require('cors'),
    employees = require('./services/employee-service'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.get('/employees', employees.findAll);
app.get('/employees/:id', employees.findById);

app.listen(app.get('port'), function () {
    console.log('Employee Directory server listening on port ' + app.get('port'));
});