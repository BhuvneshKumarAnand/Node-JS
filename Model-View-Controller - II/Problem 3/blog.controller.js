// Please don't change the pre-written code

export const validateBlog = (req, res) => {
    // Write your code here
    const { title, description, image } = req.body;

    // Initialize error messages array
    const errors = [];

    // Validate the "Title" field
    console.log(req.body);


    if (!title || title.trim() == '') {
        errors.push("The title field should not be empty");
    } else if (title.length < 3) {
        errors.push("The title field should contain at least 3 characters");
    }

    // Validate the "Description" field

    if (!description || description.trim() == '') {
        errors.push("The description field should not be empty");
    } else if (description.length < 10) {
        errors.push("The description field should contain at least 10 characters");
    }

    // Validate the "Image URL" field
    try {
        const validUrl = new URL(image);
    } catch (err) {
        errors.push("The image URL provided should be a valid URL");
    }

    // Check if there are any validation errors
    if (errors.length > 0) {
        // Render the 'addBlog' view with error messages
        res.render('addBlog', { title: 'Add Blog', errors: errors });
    } else {
        // Validation successful, display success message
        res.render('addBlog', { title: 'Add Blog', success: 'Validation successful!', errors: null });
    }
};


export const renderBlogForm = (req, res) => {
    res.render("addBlog", { errors: null, success: false });
};