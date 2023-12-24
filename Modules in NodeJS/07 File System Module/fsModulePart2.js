const fs = require('fs');

// Create and wite a file

try {
    fs.writeFileSync('employee.txt', 'Name: Bhuvnesh, Age:23, Education: B.Tech in ECE')
} catch (error) {
    console.log(error);
}

console.log('This is another operation being performed');