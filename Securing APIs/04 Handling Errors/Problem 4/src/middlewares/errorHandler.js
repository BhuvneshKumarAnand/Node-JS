// Please don't change the pre-written code
// Import the necessary modules here
import { logger } from './logger.middleware.js';

export class customErrorHandler extends Error {
    constructor(statusCode, errMessage) {
        super(errMessage);
        this.statusCode = statusCode;
    }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
    // Write your code here
    // Check if the error is a custom error
    if (err instanceof customErrorHandler) {
        // Log the error
        logger.error({
            timestamp: new Date().toString(),
            requestURL: req.url,
            errorMessage: err.message
        });
        // Send custom error response
        res.status(err.statusCode).json({ error: err.message });
    } else {
        // Log unhandled error
        logger.error({
            timestamp: new Date().toString(),
            requestURL: req.url,
            errorMessage: 'Oops! Something went wrong... Please try again later!'
        });
        // Send default error response
        res.status(500).json({ error: 'Oops! Something went wrong... Please try again later!' });
    }
};