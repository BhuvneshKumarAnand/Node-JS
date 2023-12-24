/*The readline module in Node.js is used to get input from the user. It provides an interface for reading data from a Readable stream, such as process.stdin. The output stream is used to print prompts for user input that arrives on, and is read from, the input stream. The write() method will write the data to the readline Interface's input as if it were provided by the user.
 */


// In short, It reads input from terminal

// example- sum of two numbers

// Import Readline
const readline = require('readline');

// create the interface to connect with commanding/terminal

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

interface.question('Enter first number ', (num1) => {
    interface.question('Enter 2nd number ', (num2) => {
        console.log(Number(num1) + Number(num2));
    })
})