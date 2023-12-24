const fs = require('fs');

// Read a file
// Async operation

fs.readFile('data.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
})

// write data
// async operation

fs.writeFile('employee.txt', 'New Employee', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File is written');
    }
});

//append File
//async operation

fs.appendFile('employee.txt', '\nAnother Employee', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File is updated');
    }
});

//delete the file
//async operation

fs.unlink('employee.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File is deleted");
    }
})

console.log("Another operation");