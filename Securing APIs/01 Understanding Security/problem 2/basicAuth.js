// Please don't change the pre-written code
// Import the necessary modules here

import { getAllUsers } from "../features/user/model/user.model.js";

const basicAuthMiddleware = (req, res, next) => {
    // Write your code here
    // 1. Check is Authorizer is empty
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).send("No authorization details found");
    }

    // 2. Extract credentials
    const base64credentials = authHeader.replace("Basic", '');
    console.log(base64credentials);

    // 3. Decode credentials
    const decodeCredentials = Buffer.from(base64credentials, 'base64').toString('utf8');
    console.log(decodeCredentials); // [username:password]
    const creds = decodeCredentials.split(':');

    const user = getAllUsers().find(u => u.email == creds[0] && u.password == creds[1]);
    if (user) {
        next();
    } else {
        return res.status(401).json({ status: "false", msg: "authorization failed" });
    }

};

export default basicAuthMiddleware;