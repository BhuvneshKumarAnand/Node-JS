// Import the readline module
const readline = require("readline");

const Solution = () => {
    // Create a readline interface
    const qInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // Prompt the user for input
    qInterface.question("Enter the first number: ", (n1) => {
        qInterface.question("Enter the second number: ", (n2) => {
            const maxi = Math.max(Number(n1), Number(n2));
            console.log(`The maximum of the two numbers is: ${maxi}`);

            // Close the readline interface
            qInterface.close();
        });
    });
};

Solution();
module.exports = Solution;