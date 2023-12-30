// Write your code here

// Function to input user's blog using readline and save it to the file 'myblog.txt'

import readline from 'readline';

import { writeBlog, publishBlog } from './blogActions.js';

const inputAndWriteBlog = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter your blog: ', (blog) => {
        // Save the blog to 'myblog.txt'
        writeBlog('myblog.txt', blog);
        publishBlog('myblog.txt');
        rl.close();
    });
};

inputAndWriteBlog();