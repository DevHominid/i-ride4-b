import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from './logger';
import keystone from 'keystone';

// Config env vars
dotenv.config();

// Init app
const app = express();
const port = process.env.PORT || 8080;

// Init keystone
keystone.init({
  'name': 'i-Ride4',
  'favicon': '../public/favicons/favicon.ico',
  'static': ['public'],
  'auto update': true,
  'cors allow origin': true,
  'cors allow methods': 'GET,OPTIONS,POST',
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'testkeystonecookiesecret',
  'trust proxy': true
});

if (process.env.MONGODB) {
  keystone.set('mongo', process.env.MONGODB);
}

if (process.env.HOST) {
  keystone.set('host', process.env.HOST);
}

if (process.env.PORT) {
  keystone.set('port', process.env.PORT)
}

// Use Gzip compression
app.use(compression());

// Parse application/json
app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Init logging - morgan
// Failed requests
app.use(morgan('dev', {
  skip: function (req, res) {
    return res.statusCode < 400
  }, stream: process.stderr
}));
// Successful requests
app.use(morgan('dev', {
  skip: function (req, res) {
    return res.statusCode >= 400
  }, stream: process.stdout
}));

app.get('/', (req, res) => res.send('Hello World!'));

// Import models
keystone.import('./models');

// Set keystone nav
keystone.set('nav', {
  'users': ['User']
});

// Handle errors
app.use((err, req, res, next) => {
  logger.error(`ERR: ${err}`);
  res.status(500).send('Something broke!');
});

app.listen(port, () => logger.info(`Server listening on port ${port}...`));
