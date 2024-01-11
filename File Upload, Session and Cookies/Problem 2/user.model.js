// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
    { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
    // Write your code here
    users.push(user);
};

export const authenticateUser = (reqUser) => {
    // Write your code here
    const user = users.find((u) => u.email === reqUser.email);
    if (user && user.password === reqUser.password) {
        return { success: true, message: "User authenticated successfully" };
    } else {
        return { success: false, message: "Authentication failed" };
    }
};