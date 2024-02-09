// Please don't change the pre-written code
// Import the necessary modules here
import winston from 'winston';


// Write your code here
// Configure the winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'combined.log' })
    ]
});



export const loggerMiddleware = async(req, res, next) => {
    // Write your code here
    logger.info({
        message: `req URL: ${req.url}\nreqBody: ${JSON.stringify(req.body)}`,
        service: 'user-service'
    });

    // Call the next middleware
    next();
};
export default loggerMiddleware;