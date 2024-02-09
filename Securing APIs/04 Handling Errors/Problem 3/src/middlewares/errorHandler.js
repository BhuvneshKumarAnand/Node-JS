// // Please don't change the pre-written code

// export class customErrorHandler extends Error {
//     constructor(statusCode, errMessage) {
//         super(errMessage);
//         this.statusCode = statusCode;
//     }
// }

// export const errorHandlerMiddleware = (err, req, res, next) => {
//     // Write your code here
//     if (err instanceof CustomErrorHandler) {
//         res.status(err.statusCode).json({ error: err.message });
//     } else {
//         // Handle unhandled errors with default "500" status code and message
//         console.error('Unhandled error:', err);
//         res.status(500).json({ error: 'Oops! Something went wrong... Please try again later!' });
//     }
// };

// Please don't change the pre-written code

export class customErrorHandler extends Error {
    constructor(statusCode, errMessage) {
        super(errMessage);
        this.statusCode = statusCode;
    }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
    // Write your code here

    if (err instanceof customErrorHandler) {
        res.status(err.statusCode).send(err.message);
    } else {
        // Handle unhandled errors with default "500" status code and message
        res.status(500).send("oops! something went wrong...Try again later!");
    }
    next();
};