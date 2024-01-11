// Please don't change the pre-written code
// Import the necessary modules here

import { body, validationResult } from "express-validator";

export const formValidation = async(req, res, next) => {
    // Write your code here
    // 1.setup rules validation
    const rules = [
        body('name').notEmpty().withMessage("Name is required"),
        body('email').isEmail().withMessage("Invalid email address"),
        body('image').custom((value, { req }) => {
            if (!req.file) {
                throw new Error("Image is required")
            }
            return true;
        })
    ];
    await Promise.all(
        rules.map((rule) => rule.run(req))
    );
    var validationErrors = validationResult(req);
    console.log(validationErrors);
    // if errors, return the error message
    if (!validationErrors.isEmpty()) {
        return res.render('upload-form', {
            errorMessage: validationErrors.array()[0].msg,
        });
    }
    next();
};