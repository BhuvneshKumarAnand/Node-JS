const fs = require('fs');
const path = require('path');
// create a file
// fs.writeFileSync('data.txt', "New Data");

// read a file
// const buffer = fs.readFileSync('data.txt', { encoding: 'utf-8' });
// console.log(buffer);

// read async file


// Method 1
// fs.readFile('src/data.txt', (err, data) => {
//     if (err) console.log(err);
//     else console.log(data.toString());
// })

// Method 2 using path module
const filePath = path.join('src', 'data.txt');
console.log(filePath); // it gives us the relative path

const filePathResolved = path.resolve('src', 'data.txt');
console.log(filePathResolved); // gives us the absolute path from root

fs.readFile(filePath, (err, data) => {
    if (err) console.log(err);
    else console.log(data.toString());
})
fs.readFile(filePathResolved, (err, data) => {
    if (err) console.log(err);
    else console.log(data.toString());
})

console.log(path.extname(filePath));
console.log(path.extname(filePathResolved));