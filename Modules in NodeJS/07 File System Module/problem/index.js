// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs');

const Solution = () => {
    // Write your code here
    // create a file
    try {
        fs.writeFileSync('notes.txt', "The world has enough coders ");
    } catch (error) {
        console.log(error);
    }

    // read the notes.txt
    let buffer = fs.readFileSync('notes.txt', { encoding: 'utf-8' });
    console.log(buffer);

    // Append the file notes.txt
    try {
        fs.appendFileSync('notes.txt', "BE A CODING NINJA!")
    } catch (error) {
        console.log(error);
    }

    // read the notes.txt
    buffer = fs.readFileSync('notes.txt', { encoding: 'utf-8' });
    console.log(buffer);
};
Solution();
module.exports = Solution;