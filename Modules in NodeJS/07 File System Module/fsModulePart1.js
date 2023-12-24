const fs = require('fs');

console.log("Start Reading");

// Method 1
/*
const buffer = fs.readFileSync('data.txt');
// console.log(buffer); // Buffer Data
console.log(buffer.toString());
*/

// Method 2

const buffer = fs.readFileSync('data.txt', { encoding: 'utf-8' });
console.log(buffer);

console.log('This is another operation being performed');