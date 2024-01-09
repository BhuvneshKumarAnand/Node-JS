# Implement Form Validation Middleware

You're on a mission to enhance a Node.js application by implementing a crucial middleware named "formValidationMiddleware." This middleware, residing in 'middleware.js,' is designed to handle the validation of form data for the "newUser" functionality in the user controller.

## Tasks:

1. Refactor the code in the 'newUser' controller, transferring the validation logic to the middleware while preserving the existing functionality.

2. Modify the 'app.post("/new", newUser);' route handler in the 'index.js' file to utilize the 'formValidationMiddleware.'

## Hint:

After implementing the middleware, use Postman to verify the functionality of the POST route "/new."
[View GIF](https://files.codingninjas.in/middleware-27982.gif)

## Note:

This is a practice problem to test your understanding of middleware concepts. Although the existing code will pass, submitting it with the implemented middleware will assess your learning.
