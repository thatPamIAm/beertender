const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const categories = require('./categories');
const styles = require('./styles');
const breweries = require('./breweries');
const beers = require('./beers');

app.set('port', process.env.PORT || 3000);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use('/api/v1', categories);
app.use('/api/v1', styles);
app.use('/api/v2', breweries);
app.use('/api/v2', beers);

app.get('/*', (request, response) => {
  response.status(404).send({ error: 'Not found' });
});

if (!module.parent) {
  app.listen(app.get('port'));
}

module.exports = app;
