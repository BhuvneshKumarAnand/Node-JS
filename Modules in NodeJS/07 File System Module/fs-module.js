const fs = require('fs');

console.log("Start Reading");

const buffer = fs.readFileSync('data.txt');
// console.log(buffer); // Buffer Data
console.log(buffer.toString());

console.log('This is another operation being performed');