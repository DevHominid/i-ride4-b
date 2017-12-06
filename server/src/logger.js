import winston from 'winston';

const level = process.env.LOG_LEVEL || 'debug';

const logger = new winston.Logger({
  transports: [
    // Write logs to console
    new winston.transports.Console({
      // Set log level
      level: level,
      // Print timestamp with log entry
      timestamp: function() {
        return (new Date()).toISOString();
      }
    })
  ]
});

export default logger;
