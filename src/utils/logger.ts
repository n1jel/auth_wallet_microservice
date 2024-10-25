const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
    level: 'info', // Set the default logging level
    format: winston.format.combine(
        winston.format.timestamp(),   // Add timestamp to logs
        winston.format.colorize(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(), // Log to console
        new winston.transports.File({ filename: 'app.log' }) // Log to file
    ]
});

export default logger;

// Example usage
// logger.info('Info level log message');
// logger.warn('Warning level log message');
// logger.error('Error level log message');
