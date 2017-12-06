import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from './logger';
import keystone from 'keystone';
import { apiRouter } from './routes';

// Config env vars
dotenv.config();

// Init app
const app = express();
const port = process.env.PORT || 8080;

// Init keystone
keystone.init({
  // Project options
  'name': 'i-Ride4',
  'brand': 'i-Ride4',
  'auto update': true,

  // Web server options
  'port': port,
  'static': ['public'],
  'favicon': '../public/favicons/favicon.ico',

  // Database and user auth
  'mongo': process.env.MONGO_URI || 'mongodb://localhost/i-ride4',
  'cookie secret': process.env.KEYSTONE_COOKIE_SECRET || 'temporarycookiesecret',
  'auth': true,
  'user model': 'User',

  // Services
  'cloudinary config': process.env.CLOUDINARY_CONFIG || {
    cloud_name: 'sample-cloud',
    api_key: 'samplekey',
    api_secret: 'samplesecret'
  },

  'session': true,
});

if (process.env.NODE_ENV === 'production') {
  keystone.set('cloudinary secure', true);
}

// Import models
keystone.import('./models');

// Set nav object
keystone.set('nav', {
  'users': ['User']
});

// Set express instance
keystone.set('app', app);

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

// Serve static assets
app.use(express.static(`${__dirname}/../public`));

// Mount routing middleware
app.use('/api', apiRouter);

// Handle errors
app.use((err, req, res, next) => {
  logger.error(`Error: \nMessage: ${err.message}`);
  res.status(500).send('Something broke!');
});

// app.listen(port, () => logger.info(`Server listening on port ${port}...`));

keystone.start();
