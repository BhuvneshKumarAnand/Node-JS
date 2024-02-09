// Please don't change the pre-written code
// Import the necessary modules here
import fs from 'fs';

// Write your code here
const logFilePath = 'log.txt';

export const loggerMiddleware = async(req, res, next) => {
    // Write your code here
    if (req.url.startsWith('/api/user')) {
        const timestamp = new Date().toString();

        const reqUrl = req.url;

        const reqBody = JSON.stringify(req.body);

        const logEntry = `${timestamp}\nreq URL: ${reqUrl}\nreqBody: ${reqBody}\n\n`;

        fs.appendFile(logFilePath, logEntry, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
    }
    next();
};
export default loggerMiddleware;