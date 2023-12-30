import fs from 'fs';
// import { fileURLToPath } from 'url';



// Function to publish the content of a file
const publishBlog = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        // console.log('Published Blog Content:');
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error reading blog:', error.message);
        return null;
    }
};

// Function to write a blog to a file

const writeBlog = (filePath, blog) => {
    try {
        fs.writeFileSync(filePath, blog);
        // console.log('Blog saved successfully to', filePath);
        // publishBlog(filePath);
    } catch (error) {
        console.error('Error writing blog:', error.message);
    }
};
export { writeBlog, publishBlog };