import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from './logger';

// Config env vars
dotenv.config();

// Init app
const app = express();
const port = process.env.PORT || 8080;

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

// Handle errors
app.use((err, req, res, next) => {
  logger.error(`ERR: ${err}`);
  res.status(500).send('Something broke!');
});

app.listen(port, () => logger.info(`Server listening on port ${port}...`));
