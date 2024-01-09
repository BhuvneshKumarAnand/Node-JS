// Please don't change the pre-written code
// Import the necessary modules here

export const formValidationMiddleware = (req, res, next) => {
    // Write your code here
    const { name, mobile } = req.body;
    if (!name || !mobile) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    next();

};