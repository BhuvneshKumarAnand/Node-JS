// Please don't change the pre-written code
// Import the necessary modules here

import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
    res.render("update-form", { user: users[0] });
};

// Write your code here
export const updateUser = (req, res) => {
    const { name, email, image } = req.body;

    // Validate if the required fields are present
    if (!name || !email || !image) {
        return res.status(400).send('Name, email, and image are required');
    }

    // Assuming you have a single user in the users array
    const updatedUser = {
        name: name,
        email: email,
        image: image
    };

    // Update the user data in the model
    updateUsers(updatedUser);

    // Render the "update-form" view with the updated user data
    res.render('update-form', { user: updatedUser });
};