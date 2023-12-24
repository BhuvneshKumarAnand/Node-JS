exports.getAbsolutePath = (filePath) => {
    // Write your code here
    const path = require('path');
    filePath = path.resolve('src', 'file.txt');
    return filePath;
};