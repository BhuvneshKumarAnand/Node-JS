const fs = require('fs');

// Create and wite a file

try {
    fs.writeFileSync('employee.txt', 'Name: Bhuvnesh, Age:23, Education: B.Tech in ECE')
} catch (error) {
    console.log(error);
}

// Append the data -  Add the data to existing file

fs.appendFileSync('employee.txt', "Name: Jatin, Age: 22");

//Deleting a file

try {
    fs.unlinkSync('employee.txt')
} catch (error) {
    console.log(error);
}
console.log('This is another operation being performed');